FROM golang:alpine AS builder
WORKDIR /usr/app
ADD . .
RUN go build -o app ./backend
ENTRYPOINT ./app
