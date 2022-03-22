const { parse } = require('json2csv');
const { Product } = require("./product/Product.entity");

const productA = new Product("1234", "titulo", 100.20, "http://..product", "http://..image", "marca");
productA.fbProductCategory = 234;

const fbProductA = Product.getFacebookProductPropertyNames();


const fields = Product.getFacebookProductPropertyNames();
const opts = { fields };
const data = [productA].map(Product.getFacebookProduct);
try {
    const csv = parse(data, opts);
    console.log(csv);
} catch (err) {
    console.error(err);
}