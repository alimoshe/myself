const mongoose = require('mongoose');
const VendorModel = new mongoose.Schema({
    title : {
        type:String,
        required : true,
    },
    ecoCode : {
       type:String,
       required : false,
    },
    address : {
        type : String,
        required : true,
    },
    webSiteAddress : {
        type : String,
        required : false,
    },
    agentFullName : {
        type : String,
        required : false,
    },
    code : {
        type : String,
        required: false,
    },
    postalCode : {
        type:String,
        required:false,
    }
});

module.exports = new mongoose.model('Vendor', VendorModel);