FROM node:lts-alpine

ENV NODE_ENV=prod
ENV PORT=80

COPY . /app
WORKDIR /app

RUN npm install

ENTRYPOINT ["npm", "start"]
