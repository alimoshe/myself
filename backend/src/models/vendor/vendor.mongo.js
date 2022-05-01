const { DUPLICATE_CODE, UPDATE_DB_ERROR} = require('../../config/constant');
const vendorModel = require('./vendor.model');

async function getVendors(active) {
    if (active)
        return vendorModel.find({active: true},{__v:0});
    else
        return vendorModel.find();
}

async function createVendor(vendor) {
    const vendorCode = vendor.code ;
    const result = await vendorModel.find({code : vendorCode});
    if(result.length > 0){
        return ({err : DUPLICATE_CODE });
    }
    return vendorModel.create(vendor);
}

async function updateVendor(vendor, oldOne) {
    try {

        console.log(vendor);

        const newVendorCode = vendor.code;
        const oldVendorCode = oldOne.code;

        if (oldVendorCode !== newVendorCode) {
            const result = await vendorModel.find({code: newVendorCode, active:true});
            if (result.length > 0) {
                return ({err: DUPLICATE_CODE});
            }
        }
        return vendorModel.updateMany({_id: oldOne._id,}, {...vendor});
    }catch (err) {
        return ({err : {...UPDATE_DB_ERROR}})
    }
}

module.exports = {
    getVendors,
    createVendor,
    updateVendor,
}