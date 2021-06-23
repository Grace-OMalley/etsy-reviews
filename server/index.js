const express = require('express')
const app = express()
const port = 1128
const bodyParser = require('body-parser');
const database = require('../database/dbIndex.js');
const helpers = require('./helpers.js');
const cors = require('cors');

// const shrinkRay = require('shrink-ray-current');
// app.use(shrinkRay());
app.use(express.static('client/dist'))
app.use(bodyParser.json());
app.use(cors());

database.connectDB();

app.get('/reviews/:itemId', async (req, res) => {
  database.getProduct(req.params.itemId)
    .then((product) => {
      if (product) {
        res.status(201).send(product)
      } else {
        throw new Error('No Product Found');
      }
    })
    .catch((err) => {
      console.log('server log error:', err);
      res.status(404).send(err);
    })
})

app.listen(port, () => {
  console.log(`Etsy Reviews Service listening at http://localhost:${port}`);
})