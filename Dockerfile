FROM node:12 as builder
WORKDIR /Users/owner/fec/etsy-reviews
COPY package*.json ./
RUN npm install
COPY . .
FROM mesosphere/aws-cli
COPY --from=builder ./Users/owner/fec/etsy-reviews/client/dist .
CMD ["s3", "sync", "./", "s3://reviews-grace-omalley"]