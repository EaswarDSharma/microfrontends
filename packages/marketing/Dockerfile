FROM node:16-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN echo "starting marketing"
CMD ["npm", "run", "start"]
EXPOSE 8081