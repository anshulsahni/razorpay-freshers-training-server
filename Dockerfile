FROM node:10-alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start", "3000"]
