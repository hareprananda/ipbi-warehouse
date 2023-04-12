FROM node:18.14.2-alpine

WORKDIR /var/app/ipbi-fe

COPY ./frontend .

RUN yarn install

RUN yarn global add serve

RUN yarn build

CMD serve -s build -p 4000