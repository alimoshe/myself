const vendorModel = require('./vendor.model');

async function getVendors(active) {
    if (active)
        return vendorModel.find({active: true});
    else
        return vendorModel.find();
}

async function createVendor(vendor) {
    return vendorModel.create(vendor);
}
module.exports = {
    getVendors,
    createVendor,
}