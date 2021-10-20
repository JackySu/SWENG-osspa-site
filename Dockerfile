FROM registry.redhat.io/node:16

WORKDIR  /usr/src/publicwebsite

COPY package*.json ./


RUN npm install --legacy-peer-deps

COPY . .

# Build frontend JS assets
RUN npm run build

EXPOSE 8081

CMD [ "npm", "run" ,"start:production" ]
