FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=3000
EXPOSE 3000

ENV GATEWAY_URL=http://localhost:9001

CMD ["node", "./bin/www"]
