FROM node:14-alpine

ENV TEAM1_RZP_KEY_ID=$TEAM1_RZP_KEY_ID
ENV TEAM1_RZP_KEY_SECRET=$TEAM1_RZP_KEY_SECRET
ENV TEAM2_RZP_KEY_ID=$TEAM2_RZP_KEY_ID
ENV TEAM2_RZP_KEY_SECRET=$TEAM2_RZP_KEY_SECRET

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "run","start:prod"]
