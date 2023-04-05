FROM node:18.14.2-alpine

WORKDIR /var/app/ipbi-be

COPY . .

RUN yarn install

CMD [ "yarn", "dev" ]