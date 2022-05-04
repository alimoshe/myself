const productModel = require('./product.model');
const { UPDATE_DB_ERROR } = require('../../config/constant');
async function getAllActiveProducts() {
    return await productModel.find({active : true});
}
async function getAllProducts() {
    return await productModel.find();
}

async function createProduct(product) {
    return await productModel.create(product);
}

async function updateProducct(product, oldOne) {
    try {

                console.log('new Product : ', product);
        console.log('old Product : ', oldOne);

        const newProdCode = product.code;
        const oldProdCode = oldOne.code;

        if (newProdCode !== oldProdCode) {
            const result = await productModel.find({code: newProdCode, active:true});
            if (result.length > 0) {
                return ({err: DUPLICATE_CODE});
            }
        }

        return await productModel.updateMany({_id: oldOne._id,}, {...product});
    }catch (err) {
        return ({err : err})
    }
}

async function removeProduct(productId) {
    return await productModel.deleteOne({_id : productId});
}
module.exports = {
    getAllActiveProducts,
    getAllProducts,
    createProduct,
    updateProducct,
    removeProduct,
}