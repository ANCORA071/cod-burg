FROM node:10-alpine

WORKDIR /usr/app

COPY  package.json .

COPY  . .

EXPOSE 3000

CMD ["yarn", "dev"]