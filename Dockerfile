FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app/react-app

COPY package.json .

#install dependencies
RUN npm install

#copy source code
COPY . .

# build app
RUN npm run build

# beginning of the second stage
# production environment
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app 

# copy from build image
COPY --from=BUILD_IMAGE /app/react-app/dist /app/react-app/dist
EXPOSE 8080

COPY package.json .
COPY vite.config.ts .
RUN npm install typescript

EXPOSE 8080
CMD [ "npm","run","preview" ]



