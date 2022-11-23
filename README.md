# grpc-vs-connect
This repo is used to demonstrate the tangeble difference in developer experience when comparing grpc and connect. 

There are two directories:
- grpc-web:
  - grpc go application
  - envoy proxy to convert from grpc-web to grpc
  - react frontend that uses grpc-web to hit the frontend
  - protoc with a Makefile that is used to generate all the server and client stubs
  - local .proto schema, even for the client
- connect:
  - connect go backend application
  - connect-web frontend application


See the difference:
```
cloc --exclude-dir=node_modules --include-ext=go,js,ts,proto,yaml,Makefile --diff grpc-web connect
```
