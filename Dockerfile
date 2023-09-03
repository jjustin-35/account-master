FROM node:18.17.1-alpine

WORKDIR /app

ARG ENV

ENV ENV $ENV
ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn run build

ARG BRANCH=none
ARG COMMIT=none
LABEL branch=$BRANCH commit=$COMMIT env=$ENV

EXPOSE 3000

CMD [ "yarn", "start" ]