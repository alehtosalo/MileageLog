FROM node:8.11.3-jessie

RUN npm install express

COPY server.js .

CMD node server.js