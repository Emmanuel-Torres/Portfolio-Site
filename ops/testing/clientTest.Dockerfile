FROM node:11-alpine
WORKDIR /src/web
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD npm run test