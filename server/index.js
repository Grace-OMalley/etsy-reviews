const express = require('express')
const app = express()
const port = 1128
const bodyParser = require('body-parser');
const database = require('../database/dbIndex.js');
const helpers = require('./helpers.js');

app.use(express.static('client/dist'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  // res.send('Hello World!')
})

app.get('/findOne', async (req, res) => {
console.log('GET received');
let product = await database.getProduct();
// console.log('RETRIEVED product');
let finalProduct = await helpers.sortDates(product);
console.log('finalProduct:', finalProduct);

res.status(201);
res.send(finalProduct);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})