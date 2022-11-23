# grpc-vs-connect
This repo is used to demonstrate the tangible difference in developer experience when comparing grpc and connect. 

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
cloc --exclude-dir=node_modules --include-ext=go,js,ts,proto,yaml,Makefile --diff grpc connect

      32 text files.
classified 30 files
      19 text files.
classified 17 files
 1:        1 unique file.                          
 2:        2 unique files.                          
      34 files ignored.                           

github.com/AlDanial/cloc v 1.94  T=0.02 s (776.9 files/s, 136106.8 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
Go
 same                            0              0             16             42
 modified                        1              0              0             46
 added                           0              0              0             34
 removed                         2             92             65            629
JavaScript
 same                            1              2              1              7
 modified                        0              0              0              0
 added                           0              0              0              0
 removed                         2            157            516            490
TypeScript
 same                            3              2              5             14
 modified                        0              0              0              0
 added                           0              0              0              0
 removed                         4             88            122            340
YAML
 same                            0              0              0              0
 modified                        0              0              0              0
 added                           0              0              0              0
 removed                         2              1              0             67
Protocol Buffers
 same                            0              0              0              0
 modified                        0              0              0              0
 added                           0              0              0              0
 removed                         1             10             31             26
-------------------------------------------------------------------------------
SUM:
 same                            4              4             22             63
 modified                        1              0              0             46
 added                           0              0              0             34
 removed                        11            348            734           1552
-------------------------------------------------------------------------------
```
