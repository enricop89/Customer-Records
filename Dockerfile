FROM node:8.11.3-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run",  "start" ]