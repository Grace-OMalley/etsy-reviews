const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');
var faker = require('faker');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const productSchema = new mongoose.Schema({
  // productID: Number,
  itemId: Number,
  overallRating: Number,
  itemReviewsQuant: String,
  reviews: [{
    username: String,
    userPic: String,
    reviewDate: String,
    reviewBody: String,
    starRating: Number,
    userProductImage: String
  }]
}, {
  capped: true,
  max: 100
  // capping doesn't work...
})

const Product = mongoose.model('Product', productSchema);

const populateData = async () => {

  for (let i = 0; i < 100; i++) {

    // create one product instance for each iteration
    let reviewsQuantity = Math.floor( Math.random() * 35);
    console.log('reviews quantity:', reviewsQuantity);

    let product = new Product({
      itemId: i + 1,
      overallRating: 0,
      itemReviewsQuant: reviewsQuantity,
      reviews: []
    })

    let reviewSum = 0;
    // set up sub iteration for reviews
    // create 0-20 reviews for each product
    for (let i = 0; i < reviewsQuantity; i++) {
      let rating = await  Math.floor((Math.random() * (5 - 1 + 1) + 1));
      console.log('rating:', rating);
      reviewSum = reviewSum + rating;

      // cast data for current review
      let review = {
        username: faker.name.firstName() + ' ' + faker.name.lastName(),
        userPic: faker.internet.avatar(),
        reviewDate: faker.date.between('2017-01-01', '2021-05-05'),
        reviewBody: faker.lorem.paragraphs(),
        starRating: rating,
        userProductImage: 'img url goes here'
      }
      // push review to reviews array on product model
      product.reviews.push(review);
    }

    //assign overall rating
    let averageRating = Math.ceil(reviewSum / reviewsQuantity);
    console.log('average rating:', averageRating);
    product.overallRating = averageRating;

    //save current product to DB
    product.save((error, doc) => {
      if (error) {
        return console.error(error);
      } else {
        console.log('doc saved')
      }
    })
  }
  //...then move on to next product
}

populateData();

const getProduct = (id) => {
  // return Product.findOne({"reviews.10": {"$exists": true}});
  return Product.findOne({itemId: id});

}

// module.exports.generateData = generateData;
module.exports.getProduct = getProduct;

