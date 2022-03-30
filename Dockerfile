FROM docker.io/library/node:17.8.0

WORKDIR  /usr/src/publicwebsite

COPY package*.json ./


RUN npm install --legacy-peer-deps

COPY . .

# Build frontend JS assets
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run" ,"start:production" ]
