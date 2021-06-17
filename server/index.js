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

app.get('/', (req, res) => {
  // res.send('Hello World!')
})

app.get('/reviews/:itemId', async (req, res) => {
console.log('GET received');
console.log('itemId:', req.params.itemId);

let product = await database.getProduct(req.params.itemId);

res.status(201);
res.send(product);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})