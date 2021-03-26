const { getProducts, addProduct } = require('./repository');
var express = require('express');
const { query } = require('express');
var router = express.Router();


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', async (req, res) => {
  let products = await getProducts();
  if (!!req.query.search) {
    products = products.filter(p => p.title.indexOf(req.query.search)> -1)
  }
  res.send(products);
});
router.get('/:id', async (req, res) => {
  let productId = req.params.id
  let products = await getProducts();
  let product = products.find(p => p.id == productId)
  if (product) {
    res.send(product);
  } else {
    res.send(404);
  }
  
});
router.post('/', async (req, res) => {
  let productTitle = req.body.title
  let productPrise = req.body.productPrise
  let productDescription = req.body.productDescription
  let productImg = req.body.img
  let response = await addProduct(productTitle ,productPrise, productDescription, productImg)
        res.send({ success: true })
});

module.exports = router;

