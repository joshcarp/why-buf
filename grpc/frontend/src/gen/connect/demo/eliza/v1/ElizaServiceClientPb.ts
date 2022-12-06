/**
 * @fileoverview gRPC-Web generated client stub for buf.connect.demo.eliza.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: connect/demo/eliza/v1/eliza.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as connect_demo_eliza_v1_eliza_pb from '../../../../connect/demo/eliza/v1/eliza_pb';


export class ElizaServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSay = new grpcWeb.MethodDescriptor(
    '/buf.connect.demo.eliza.v1.ElizaService/Say',
    grpcWeb.MethodType.UNARY,
    connect_demo_eliza_v1_eliza_pb.SayRequest,
    connect_demo_eliza_v1_eliza_pb.SayResponse,
    (request: connect_demo_eliza_v1_eliza_pb.SayRequest) => {
      return request.serializeBinary();
    },
    connect_demo_eliza_v1_eliza_pb.SayResponse.deserializeBinary
  );

  say(
    request: connect_demo_eliza_v1_eliza_pb.SayRequest,
    metadata: grpcWeb.Metadata | null): Promise<connect_demo_eliza_v1_eliza_pb.SayResponse>;

  say(
    request: connect_demo_eliza_v1_eliza_pb.SayRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: connect_demo_eliza_v1_eliza_pb.SayResponse) => void): grpcWeb.ClientReadableStream<connect_demo_eliza_v1_eliza_pb.SayResponse>;

  say(
    request: connect_demo_eliza_v1_eliza_pb.SayRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: connect_demo_eliza_v1_eliza_pb.SayResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/buf.connect.demo.eliza.v1.ElizaService/Say',
        request,
        metadata || {},
        this.methodDescriptorSay,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/buf.connect.demo.eliza.v1.ElizaService/Say',
    request,
    metadata || {},
    this.methodDescriptorSay);
  }

  methodDescriptorIntroduce = new grpcWeb.MethodDescriptor(
    '/buf.connect.demo.eliza.v1.ElizaService/Introduce',
    grpcWeb.MethodType.SERVER_STREAMING,
    connect_demo_eliza_v1_eliza_pb.IntroduceRequest,
    connect_demo_eliza_v1_eliza_pb.IntroduceResponse,
    (request: connect_demo_eliza_v1_eliza_pb.IntroduceRequest) => {
      return request.serializeBinary();
    },
    connect_demo_eliza_v1_eliza_pb.IntroduceResponse.deserializeBinary
  );

  introduce(
    request: connect_demo_eliza_v1_eliza_pb.IntroduceRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<connect_demo_eliza_v1_eliza_pb.IntroduceResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/buf.connect.demo.eliza.v1.ElizaService/Introduce',
      request,
      metadata || {},
      this.methodDescriptorIntroduce);
  }

}

