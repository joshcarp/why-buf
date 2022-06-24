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

// @generated by protoc-gen-es v0.2.1
// @generated from file buf/connect/demo/eliza/v1/eliza.proto (package buf.connect.demo.eliza.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * SayRequest describes the sentence said to the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.SayRequest
 */
export declare class SayRequest extends Message<SayRequest> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  constructor(data?: PartialMessage<SayRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.SayRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SayRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SayRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SayRequest;

  static equals(a: SayRequest | PlainMessage<SayRequest> | undefined, b: SayRequest | PlainMessage<SayRequest> | undefined): boolean;
}

/**
 * SayResponse describes the sentence responded by the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.SayResponse
 */
export declare class SayResponse extends Message<SayResponse> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  constructor(data?: PartialMessage<SayResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.SayResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SayResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SayResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SayResponse;

  static equals(a: SayResponse | PlainMessage<SayResponse> | undefined, b: SayResponse | PlainMessage<SayResponse> | undefined): boolean;
}

/**
 * ConverseRequest describes the sentence said to the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.ConverseRequest
 */
export declare class ConverseRequest extends Message<ConverseRequest> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  constructor(data?: PartialMessage<ConverseRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.ConverseRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConverseRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConverseRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConverseRequest;

  static equals(a: ConverseRequest | PlainMessage<ConverseRequest> | undefined, b: ConverseRequest | PlainMessage<ConverseRequest> | undefined): boolean;
}

/**
 * ConverseResponse describes the sentence responded by the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.ConverseResponse
 */
export declare class ConverseResponse extends Message<ConverseResponse> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  constructor(data?: PartialMessage<ConverseResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.ConverseResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConverseResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConverseResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConverseResponse;

  static equals(a: ConverseResponse | PlainMessage<ConverseResponse> | undefined, b: ConverseResponse | PlainMessage<ConverseResponse> | undefined): boolean;
}

/**
 * IntroduceRequest describes a request for details from the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.IntroduceRequest
 */
export declare class IntroduceRequest extends Message<IntroduceRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<IntroduceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.IntroduceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntroduceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntroduceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntroduceRequest;

  static equals(a: IntroduceRequest | PlainMessage<IntroduceRequest> | undefined, b: IntroduceRequest | PlainMessage<IntroduceRequest> | undefined): boolean;
}

/**
 * IntroduceResponse describes the sentence responded by the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.IntroduceResponse
 */
export declare class IntroduceResponse extends Message<IntroduceResponse> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  constructor(data?: PartialMessage<IntroduceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.IntroduceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntroduceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntroduceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntroduceResponse;

  static equals(a: IntroduceResponse | PlainMessage<IntroduceResponse> | undefined, b: IntroduceResponse | PlainMessage<IntroduceResponse> | undefined): boolean;
}

