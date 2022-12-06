// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: buf/connect/demo/eliza/v1/eliza.proto

package elizav1connect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/joshcarp/grpc-vs-connect/connect-codegen/backend/gen/buf/connect/demo/eliza/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_1_0

const (
	// ElizaServiceName is the fully-qualified name of the ElizaService service.
	ElizaServiceName = "buf.connect.demo.eliza.v1.ElizaService"
)

// ElizaServiceClient is a client for the buf.connect.demo.eliza.v1.ElizaService service.
type ElizaServiceClient interface {
	// Say is a unary request demo. This method should allow for a one sentence
	// response given a one sentence request.
	Say(context.Context, *connect_go.Request[v1.SayRequest]) (*connect_go.Response[v1.SayResponse], error)
	// Converse is a bi-directional streaming request demo. This method should allow for
	// many requests and many responses.
	Converse(context.Context) *connect_go.BidiStreamForClient[v1.ConverseRequest, v1.ConverseResponse]
	// Introduce is a server-streaming request demo.  This method allows for a single request that will return a series
	// of responses
	Introduce(context.Context, *connect_go.Request[v1.IntroduceRequest]) (*connect_go.ServerStreamForClient[v1.IntroduceResponse], error)
}

// NewElizaServiceClient constructs a client for the buf.connect.demo.eliza.v1.ElizaService service.
// By default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped
// responses, and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewElizaServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) ElizaServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &elizaServiceClient{
		say: connect_go.NewClient[v1.SayRequest, v1.SayResponse](
			httpClient,
			baseURL+"/buf.connect.demo.eliza.v1.ElizaService/Say",
			opts...,
		),
		converse: connect_go.NewClient[v1.ConverseRequest, v1.ConverseResponse](
			httpClient,
			baseURL+"/buf.connect.demo.eliza.v1.ElizaService/Converse",
			opts...,
		),
		introduce: connect_go.NewClient[v1.IntroduceRequest, v1.IntroduceResponse](
			httpClient,
			baseURL+"/buf.connect.demo.eliza.v1.ElizaService/Introduce",
			opts...,
		),
	}
}

// elizaServiceClient implements ElizaServiceClient.
type elizaServiceClient struct {
	say       *connect_go.Client[v1.SayRequest, v1.SayResponse]
	converse  *connect_go.Client[v1.ConverseRequest, v1.ConverseResponse]
	introduce *connect_go.Client[v1.IntroduceRequest, v1.IntroduceResponse]
}

// Say calls buf.connect.demo.eliza.v1.ElizaService.Say.
func (c *elizaServiceClient) Say(ctx context.Context, req *connect_go.Request[v1.SayRequest]) (*connect_go.Response[v1.SayResponse], error) {
	return c.say.CallUnary(ctx, req)
}

// Converse calls buf.connect.demo.eliza.v1.ElizaService.Converse.
func (c *elizaServiceClient) Converse(ctx context.Context) *connect_go.BidiStreamForClient[v1.ConverseRequest, v1.ConverseResponse] {
	return c.converse.CallBidiStream(ctx)
}

// Introduce calls buf.connect.demo.eliza.v1.ElizaService.Introduce.
func (c *elizaServiceClient) Introduce(ctx context.Context, req *connect_go.Request[v1.IntroduceRequest]) (*connect_go.ServerStreamForClient[v1.IntroduceResponse], error) {
	return c.introduce.CallServerStream(ctx, req)
}

// ElizaServiceHandler is an implementation of the buf.connect.demo.eliza.v1.ElizaService service.
type ElizaServiceHandler interface {
	// Say is a unary request demo. This method should allow for a one sentence
	// response given a one sentence request.
	Say(context.Context, *connect_go.Request[v1.SayRequest]) (*connect_go.Response[v1.SayResponse], error)
	// Converse is a bi-directional streaming request demo. This method should allow for
	// many requests and many responses.
	Converse(context.Context, *connect_go.BidiStream[v1.ConverseRequest, v1.ConverseResponse]) error
	// Introduce is a server-streaming request demo.  This method allows for a single request that will return a series
	// of responses
	Introduce(context.Context, *connect_go.Request[v1.IntroduceRequest], *connect_go.ServerStream[v1.IntroduceResponse]) error
}

// NewElizaServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewElizaServiceHandler(svc ElizaServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle("/buf.connect.demo.eliza.v1.ElizaService/Say", connect_go.NewUnaryHandler(
		"/buf.connect.demo.eliza.v1.ElizaService/Say",
		svc.Say,
		opts...,
	))
	mux.Handle("/buf.connect.demo.eliza.v1.ElizaService/Converse", connect_go.NewBidiStreamHandler(
		"/buf.connect.demo.eliza.v1.ElizaService/Converse",
		svc.Converse,
		opts...,
	))
	mux.Handle("/buf.connect.demo.eliza.v1.ElizaService/Introduce", connect_go.NewServerStreamHandler(
		"/buf.connect.demo.eliza.v1.ElizaService/Introduce",
		svc.Introduce,
		opts...,
	))
	return "/buf.connect.demo.eliza.v1.ElizaService/", mux
}

// UnimplementedElizaServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedElizaServiceHandler struct{}

func (UnimplementedElizaServiceHandler) Say(context.Context, *connect_go.Request[v1.SayRequest]) (*connect_go.Response[v1.SayResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("buf.connect.demo.eliza.v1.ElizaService.Say is not implemented"))
}

func (UnimplementedElizaServiceHandler) Converse(context.Context, *connect_go.BidiStream[v1.ConverseRequest, v1.ConverseResponse]) error {
	return connect_go.NewError(connect_go.CodeUnimplemented, errors.New("buf.connect.demo.eliza.v1.ElizaService.Converse is not implemented"))
}

func (UnimplementedElizaServiceHandler) Introduce(context.Context, *connect_go.Request[v1.IntroduceRequest], *connect_go.ServerStream[v1.IntroduceResponse]) error {
	return connect_go.NewError(connect_go.CodeUnimplemented, errors.New("buf.connect.demo.eliza.v1.ElizaService.Introduce is not implemented"))
}