const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var faker = require('faker');



const productSchema = new mongoose.Schema({
  overallRating: Number,
  reviews: [{
    userId: Number,
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
    let product = new Product({
      overallRating: ratingValue,
      reviews: []
    })

    // set up sub iteration for reviews
    let reviewsQuantity = Math.floor( Math.random() * 20);
    console.log('reviews quantity:', reviewsQuantity);

    // create 0-20 reviews for each product
    for (let i = 0; i < reviewsQuantity; i++) {

      // cast data for current review
      let review = {
        userPic: faker.image.avatar(),
        reviewDate: faker.date.soon(),
        reviewBody: faker.lorem.paragraph(),
        starRating: ratingValue,
        userProductImage: faker.image.image()
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

// module.exports.generateData = generateData;
