const fs = require('fs');
const { readJsonFromFile, writeJsonToFile } = require('./fs-utils');

const getProducts = () => {
    return readJsonFromFile('./products.json')
}
const addProduct = async (title, img, description, prise) => {
    let products = await getProducts();
    products.push({ title:title, img:img, description:description, prise:prise });    
   return writeJsonToFile('./products.json', products)
}

exports.getProducts = getProducts
exports.addProduct = addProduct