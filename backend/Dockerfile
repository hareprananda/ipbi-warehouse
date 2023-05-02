FROM node:18.14.2

WORKDIR /var/app/ipbi-be

COPY ./backend .

COPY .env .

VOLUME ./backend/public ./public

RUN yarn install

CMD [ "yarn", "dev" ]