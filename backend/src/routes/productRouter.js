const express = require("express");
const { UPDATE_DB_ERROR } = require("../config/constant");
const productDAO = require("../models/product/product.mongo");

const productRouter = express.Router();

productRouter.get("/:active", async (req, res) => {
  res.status(200).send(await productDAO.getAllActiveProducts());
});
productRouter.get("/", async (req, res) => {
  res.status(200).send(await productDAO.getAllProducts()());
});

productRouter.post("/", async (req, res) => {
  try {
    const product = req.body;
    console.log("new Product : ", product);
    return res.status(200).send(await productDAO.createProduct(product));
  } catch (err) {
    return res.status(400).send({ err: { ...UPDATE_DB_ERROR } });
  }
});

productRouter.post("/ed", async (req, res) => {
  try {
    const oldProduct = req.body.oldProduct;
    const newProduct = req.body.newProduct;
    return res
      .status(200)
      .send(await productDAO.updateProducct(newProduct, oldProduct));
  } catch (err) {
    return res.status(400).send({ err: { ...err } });
  }
});

productRouter.delete("/:id", async (req, res) => {
  try {
    const refToRemove = req.params.id;
    return res.status(200).send(await productDAO.removeProduct(refToRemove));
  } catch (err) {
    console.log(err);
    res.status(400).send({ err: { ...err } });
  }
});

module.exports = productRouter;
