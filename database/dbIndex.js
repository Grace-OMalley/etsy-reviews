const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');
var faker = require('faker');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const productSchema = new mongoose.Schema({
  overallRating: Number,
  itemReviewsQuant: String,
  reviews: [{
    userId: Number,
    username: String,
    userPic: String,
    reviewDate: String,
    reviewBody: String,
    starRating: Number,
    userProductImage: String
  }]
})

const Product = mongoose.model('Product', productSchema);

const populateData = () => {

  for (let i = 0; i < 100; i++) {

    let ratingValue = Math.floor((Math.random() * (5 - 2 + 1) + 2));
    console.log('rating value:', ratingValue);

    // create one product instance for each iteration
    let reviewsQuantity = Math.floor( Math.random() * 20);
    console.log('reviews quantity:', reviewsQuantity);

    let product = new Product({
      overallRating: ratingValue,
      itemReviewsQuant: reviewsQuantity,
      reviews: []
    })

    // set up sub iteration for reviews
    // create 0-20 reviews for each product
    for (let i = 0; i < reviewsQuantity; i++) {

      // cast data for current review
      let review = {
        username: faker.name.firstName() + ' ' + faker.name.lastName(),
        userPic: faker.internet.avatar(),
        reviewDate: faker.date.recent(),
        reviewBody: faker.lorem.paragraphs(),
        starRating: ratingValue,
        userProductImage: faker.commerce.product()
      }

      // push review to reviews array on product model
      product.reviews.push(review);
    }

    //save current product to DB
    product.save((error, doc) => {
      if (error) {
        return console.error(error);
      } else {
        console.log('doc saved')
      }
    })

  }
  // move on to next product
}

populateData();

const getProduct = () => {
  return Product.findOne({"reviews.10": {"$exists": true}});
}

// module.exports.generateData = generateData;
module.exports.getProduct = getProduct;

