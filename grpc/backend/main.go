// Copyright 2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

import (
	"context"
	"errors"
	"fmt"
	elizav1 "github.com/joshcarp/grpc-vs-connect/grpc-web/backend/gen/elizav1/eliza/v1"
	"io"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/joshcarp/eliza"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"github.com/spf13/pflag"
)

type elizaServer struct {
	elizav1.UnimplementedElizaServiceServer
	// The time to sleep between sending responses on a stream
	streamDelay time.Duration
}

// NewElizaServer returns a new elizaServer.  streamDelay applies to server-streaming and will delay the responses
// sent on a stream by the given duration.
func NewElizaServer(streamDelay time.Duration) elizav1.ElizaServiceServer {
	return &elizaServer{
		streamDelay: streamDelay,
	}
}

func (e *elizaServer) Say(ctx context.Context, request *elizav1.SayRequest) (*elizav1.SayResponse, error) {
	log.Println(request)
	reply, _ := eliza.Reply(request.Sentence) // ignore end-of-conversation detection
	return &elizav1.SayResponse{Sentence: reply}, nil
}

func (e *elizaServer) Converse(stream elizav1.ElizaService_ConverseServer) error {
	for {
		if err := stream.Context().Err(); err != nil {
			return err
		}
		request, err := stream.Recv()
		if err != nil && errors.Is(err, io.EOF) {
			return nil
		} else if err != nil {
			return fmt.Errorf("receive request: %w", err)
		}
		reply, endSession := eliza.Reply(request.Sentence)
		if err := stream.Send(&elizav1.ConverseResponse{Sentence: reply}); err != nil {
			return fmt.Errorf("send response: %w", err)
		}
		if endSession {
			return nil
		}
	}
}

func (e *elizaServer) Introduce(req *elizav1.IntroduceRequest, stream elizav1.ElizaService_IntroduceServer) error {
	name := req.Name
	if name == "" {
		name = "Anonymous User"
	}
	intros := eliza.GetIntroResponses(name)
	var ticker *time.Ticker
	if e.streamDelay > 0 {
		ticker = time.NewTicker(e.streamDelay)
		defer ticker.Stop()
	}
	for _, resp := range intros {
		if ticker != nil {
			select {
			case <-stream.Context().Done():
				return stream.Context().Err()
			case <-ticker.C:
			}
		}
		if err := stream.Send(&elizav1.IntroduceResponse{Sentence: resp}); err != nil {
			return err
		}
	}
	return nil
}

func main() {
	helpArg := pflag.BoolP("help", "h", false, "")
	streamDelayArg := pflag.DurationP(
		"server-stream-delay",
		"d",
		0,
		"The duration to delay sending responses on the server stream.",
	)
	pflag.Parse()

	if *helpArg {
		pflag.PrintDefaults()
		return
	}

	if *streamDelayArg < 0 {
		log.Printf("Server stream delay cannot be negative.")
		return
	}
	srv := grpc.NewServer()

	elizav1.RegisterElizaServiceServer(srv, NewElizaServer(time.Second))
	reflection.Register(srv)

	addr := ":8081"
	if port := os.Getenv("PORT"); port != "" {
		addr = ":" + port
	}
	lis, err := net.Listen("tcp", addr)
	if err != nil {
		log.Fatalf("error starting up: %w", err)
	}
	signals := make(chan os.Signal, 1)
	signal.Notify(signals, os.Interrupt, syscall.SIGTERM)
	go func() {
		if err := srv.Serve(lis); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("gRPC listen and serve: %v", err)
		}
	}()

	<-signals
	srv.GracefulStop()
}
