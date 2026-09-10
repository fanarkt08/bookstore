# api-gateway (reverse proxy Express vers les microservices)

FROM node:20-slim
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=9001

ENV BOOKS_SERVICE_URL=http://ms-books:3000
ENV ORDERS_SERVICE_URL=http://ms-orders:3001
ENV PAYMENTS_SERVICE_URL=http://ms-payments:3002

EXPOSE 9001

CMD ["node", "src/index.js"]
