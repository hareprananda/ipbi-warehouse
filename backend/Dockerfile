FROM node:18.14.2

WORKDIR /var/app/ipbi-be

COPY ./backend .

COPY .env .

RUN yarn install

CMD [ "yarn", "dev" ]