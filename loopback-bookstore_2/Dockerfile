# loopback-bookstore
FROM node:20-slim AS build
WORKDIR /home/node/app

COPY --chown=node package*.json ./
RUN npm ci

COPY --chown=node . .
RUN npm run build

FROM node:20-slim
WORKDIR /home/node/app
ENV NODE_ENV=production

COPY --from=build --chown=node /home/node/app ./

ENV PORT=3000
ENV HOST=0.0.0.0

# Nom du service mongo dans le docker-compose (network interne)
ENV MONGO_HOST=mongo
ENV MONGO_PORT=27017

EXPOSE 3000

CMD ["node", "."]
