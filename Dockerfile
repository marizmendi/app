FROM node:lts-alpine

ENV NODE_ENV=prod

COPY . /app
WORKDIR /app

RUN npm install

ENTRYPOINT ["npm", "start"]
