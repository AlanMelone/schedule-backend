FROM node:12.13-alpine As development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
RUN npm install typeorm -g
RUN npm i -g rimraf
RUN npm install ansi-styles -g
COPY . .
RUN npm run build
FROM node:12.13-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
RUN npm install typeorm -g
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/main"]
