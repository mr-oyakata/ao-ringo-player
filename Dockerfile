FROM node:lts

# vue
WORKDIR /workspace
COPY ./workspace/package.json ./
COPY ./workspace/yarn.lock ./

RUN yarn install
