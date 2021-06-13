FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 1128
CMD ["npm", "run", "server-dev"]

