FROM node:latest

WORKDIR /japp

COPY . /japp

RUN npm i

EXPOSE 3000

# CMD npm run start
CMD npm start