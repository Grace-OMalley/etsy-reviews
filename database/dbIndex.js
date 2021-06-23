const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect('mongodb://localhost/reviews');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

const faker = require('faker');

const productSchema = new mongoose.Schema({
  itemId: Number,
  overallRating: Number,
  itemReviewsQuant: Number,
  shopReviewsQuant: Number,
  reviews: [{
    username: String,
    userPic: String,
    reviewDate: String,
    reviewBody: String,
    starRating: Number,
    productSpecs: Array
  }]
}, {
  max: 100
})

const Product = mongoose.model('Product', productSchema);

const populateData = async () => {
  const shirtSizes = ['Exta Small', 'Small', 'Medium', 'Large', 'Extra Large'];

  for (let i = 0; i < 100; i++) {

    // create one product instance for each iteration
    let reviewsQuantity = Math.floor( Math.random() * 35);
    let shopReviewsQuantity = Math.floor( Math.random() * (200 - 50 + 1)) + 50;

    let product = new Product({
      itemId: i + 1,
      overallRating: 0,
      itemReviewsQuant: reviewsQuantity,
      shopReviewsQuant: shopReviewsQuantity,
      reviews: []
    })

    let reviewSum = 1;
    // set up sub-iteration for reviews
    // create 0-20 reviews for each product
    for (let i = 0; i < reviewsQuantity; i++) {
      let rating = await Math.floor( Math.random() * (5 - 1 + 1)) + 1;
      reviewSum += rating;
      let s = Math.floor(Math.random() * ( (4 - 0 + 1) + 0));

      // cast data for current review
      let review = {
        username: faker.name.firstName() + ' ' + faker.name.lastName(),
        userPic: faker.internet.avatar(),
        reviewDate: faker.date.between('2017-01-01', '2021-05-05'),
        reviewBody: faker.lorem.paragraphs(),
        starRating: rating,
        userProductImage: 'img url goes here',
        productSpecs: [{Size: shirtSizes[s]}]
      }
      // push review to reviews array on product model
      product.reviews.push(review);
    }
    //assign overall rating to product
    let averageRating = Math.round(reviewSum / reviewsQuantity);
    product.overallRating = averageRating;

    //save current product to DB
    product.save((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('document saved.')
      }
    });
  }
  //...move on to next product
}

// populateData();

const getProduct = (id) => {
  return Product.findOne({itemId: id});
}

module.exports.getProduct = getProduct;
module.exports.connectDB = connectDB;
module.exports.populateData = populateData;

