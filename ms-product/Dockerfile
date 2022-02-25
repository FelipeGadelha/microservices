FROM node:16.13.2-alpine

RUN apk add bash

WORKDIR ./app

COPY ./ms-product/ /app
RUN yarn && yarn build
RUN ls -a
#RUN yarn && yarn build

CMD yarn start
#CMD node ./dist/src/app.js


#WORKDIR /app
#COPY ms-product/package*.json ./app
#RUN yarn install
#COPY . .

#CMD ["yarn","dev"]