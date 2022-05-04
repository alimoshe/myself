const mongoose = require('mongoose');
const productModel = new mongoose.Schema({
    code : {
        type : String,
        required : false,
    }, 
    title : {
        type : String,
        required : true
    },
    categoryId : {
        type : Number,
        required : false,
    },
    registerPrice : {
        type : Number,
        required : false,
    },
    discountPercent : {
        type : Number,
        required : false,
    },
    minimumStock : {
        type : Number,
        required:false,
    },
    active : {
        type : Boolean,
        required : false,
        default : true ,
    },
    mainUnitId : {
        type : Number,
        required : false,
    },
    secondaryUnitId : {
        type : Number,
        required:false,
    },
    secondaryUnitValue : {
        type : Number,
        required:false,
    },
    expireDate : {
        type : Date, 
        required : false
    }

})

module.exports = new mongoose.model('Product', productModel);