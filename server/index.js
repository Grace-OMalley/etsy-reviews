const express = require('express')
const app = express()
const port = 1128
const bodyParser = require('body-parser');
const database = require('../database/dbIndex.js');
const helpers = require('./helpers.js');
const cors = require('cors');
const shrinkRay = require('shrink-ray-current');

app.use(shrinkRay());
app.use(express.static('client/dist'))
app.use(bodyParser.json());
app.use(cors());

app.get('/reviews/:itemId', async (req, res) => {

// let product = await database.getProduct(req.params.itemId);
database.getProduct(req.params.itemId)
  .then((product) => {
    res.status(201).send(product)
  })


// res.status(201);
// res.send(product);
})

app.listen(port, () => {
  console.log(`Etsy Reviews Service listening at http://localhost:${port}`);
})