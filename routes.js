const constants = require('./constants');
const { parse } = require('json2csv');
const { Product } = require("./product/Product.entity");


module.exports = function (app) {

  console.log("Routes loaded");

  app.get(constants.BASE_PATH + "/", function (req, res) {
    res.status(200);
    res.send("inicio");
  });
  /**
    * @api {get}  /products
    * @apiName products
    * @apiGroup Products
    *
    * @apiSuccess {Object[]}      data
    *
    */
  app.get(constants.BASE_PATH + '/products', function (req, res) {

    const productA = new Product("1234", "titulo", "descripcion", 100.20, "http://..product", "http://..image", "marca");
    productA.fbProductCategory = 234;

    const fields = Product.getFacebookProductPropertyNames();
    const opts = { fields };
    const data = [productA].map(Product.toFacebookProduct);

    try {
      const csv = parse(data, opts);

      res.status(200);
      res.send(csv);
    } catch (err) {
      console.send(err);
    }
  });

}
