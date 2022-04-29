const { DUPLICATE_CODE } = require('../../config/constant');
const vendorModel = require('./vendor.model');

async function getVendors(active) {
    if (active)
        return vendorModel.find({active: true},{_id:0,__v:0});
    else
        return vendorModel.find();
}

async function createVendor(vendor) {
    const vendorCode = vendor.code ;
    const result = await vendorModel.find({code : vendorCode});
    if(result.length > 0){
        return ({Response : null, err : DUPLICATE_CODE });
    }
    return vendorModel.create(vendor);

}
module.exports = {
    getVendors,
    createVendor,
}