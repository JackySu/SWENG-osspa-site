FROM docker.io/library/node:17.8.0

WORKDIR  /usr/src/publicwebsite

COPY package*.json ./

RUN npm install 

RUN 

COPY . .

# Build frontend JS assets
RUN npm run build 

#clean up unwanted package after build
RUN npm ci --production && npm prune --production

EXPOSE 8080

CMD [ "npm", "run" ,"start:production" ]
