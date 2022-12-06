proto:
	protoc -I./buf/ --go_out=paths=source_relative:backend/gen buf/connect/demo/eliza/v1/eliza.proto
	protoc -I././buf/ --go-grpc_out=paths=source_relative:backend/gen buf/connect/demo/eliza/v1/eliza.proto
	protoc -I././buf/ --js_out=import_style=commonjs:frontend/src/gen buf/connect/demo/eliza/v1/eliza.proto
	protoc -I././buf/ --grpc-web_out=import_style=typescript,,mode=grpcwebtext:frontend/src/gen buf/connect/demo/eliza/v1/eliza.proto
