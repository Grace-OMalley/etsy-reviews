# FROM node:12
# WORKDIR . /app
# COPY package.json package-lock.json ./
# RUN npm install
# FROM mesosphere/aws-cli
# COPY ./client/dist .
# CMD ["s3", "sync", "./", "s3://reviews-grace-omalley"]
FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 1128
CMD ["npm", "run", "server-dev"]

