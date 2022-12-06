FROM node:slim
WORKDIR /usr/app
ADD . .
ENTRYPOINT npm start --prefix frontend
