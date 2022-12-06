proto:
	protoc -I./demo/ --go_out=paths=source_relative:backend/gen/proto/elizav1 demo/eliza/v1/eliza.proto
	protoc -I././demo/ --go-grpc_out=paths=source_relative:backend/gen/proto/elizav1 demo/eliza/v1/eliza.proto
	protoc -I././demo/ --js_out=import_style=commonjs:frontend/src/gen demo/eliza/v1/eliza.proto
	protoc -I././demo/ --grpc-web_out=import_style=typescript,,mode=grpcwebtext:frontend/src/gen demo/eliza/v1/eliza.proto
