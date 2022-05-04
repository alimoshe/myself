import { PRODUCT_BASE_URL } from "../config/api-urls";

const productApi = {
  loadAllProducts: (laodCompletion) => {
    fetch(PRODUCT_BASE_URL + "/true", { method: "GET" })
      .then((res) => res.json())
      .then((result) => {
        laodCompletion(result);
      });
  },
  createNewProduct: (product, createCompletion) => {
    fetch(PRODUCT_BASE_URL + "/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        createCompletion(result);
      });
  },
  updateProduct: (oldProduct, newProduct, updateCompletion) => {
    fetch(PRODUCT_BASE_URL + "/ed", {
      method: "POST",
      body: JSON.stringify({ oldProduct: oldProduct, newProduct: newProduct }),
      headers: { "Content-Type": "application/json" },
    })
      .then((postResult) => postResult.json())
      .then((result) => {
        updateCompletion(result);
      });
  },
  removeProduct: (prodId, removeCompletion) => {
    fetch(PRODUCT_BASE_URL + `/${prodId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((postResult) => postResult.json())
      .then((result) => {
        removeCompletion(result);
      });
  },
};

export default productApi;
