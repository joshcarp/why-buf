module github.com/joshcarp/grpc-vs-connect/connect-codegen

go 1.19

require (
	buf.build/gen/go/bufbuild/eliza/bufbuild/connect-go v1.1.0-20221108170037-30afbf7c670d.4
	buf.build/gen/go/bufbuild/eliza/protocolbuffers/go v1.28.1-20221108170037-30afbf7c670d.4
	github.com/bufbuild/connect-go v1.1.0
	github.com/joshcarp/eliza v0.0.0-20221123204923-649a8fcc71d3
	github.com/rs/cors v1.8.2
	golang.org/x/net v0.2.0
)

require (
	golang.org/x/text v0.4.0 // indirect
	google.golang.org/protobuf v1.28.1 // indirect
)
