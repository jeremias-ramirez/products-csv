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
    let link = "https://www.cotodigital3.com.ar/sitios/cdigi/producto/-aceite-girasol--canuelas---botella-900-ml/_/A-00050520-00050520-200";
    let linkImage = "https://static.cotodigital3.com.ar/sitios/fotos/full/00050500/00050520.jpg?3.0.136a";
    const productA = new Product("1234abc", "titulo", "descripcion", 100.20, link, linkImage, "marca");

    link = "https://www.cotodigital3.com.ar/sitios/cdigi/producto/-aceite-girasol--canuelas---botella-900-ml/_/A-00050520-00050520-200";
    linkImage = "https://static.cotodigital3.com.ar/sitios/fotos/full/00050500/00050520.jpg?3.0.136a";
    const productB = new Product("1235abc", "titulo2", "descripcion", 100.20, link, linkImage, "marca");

    link = "https://www.cotodigital3.com.ar/sitios/cdigi/producto/-aceite-girasol--canuelas---botella-900-ml/_/A-00050520-00050520-200";
    linkImage = "https://static.cotodigital3.com.ar/sitios/fotos/full/00050500/00050520.jpg?3.0.136a";
    const productC = new Product("1236abc", "titulo3", "descripcion", 100.20, link, linkImage, "marca");

    const fields = Product.getFacebookProductPropertyNames();
    const opts = { fields };
    const data = [productA, productB, productC].map(Product.toFacebookProduct);

    try {
      const csv = parse(data, opts);

      res.status(200);
      res.send(csv);
    } catch (err) {
      console.send(err);
    }
  });

}
