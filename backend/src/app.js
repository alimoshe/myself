
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const galleryRouter = require('./routes/gallery.route');
const categoryRouter = require('./routes/category.route');
const vendorRouter = require('./routes/vendor.route');

const cms_app = express();
const databaseConnection  = require('./services/mongodb.service');
const mongoose = require('mongoose');

cms_app.use(cors({
    origin:'*'
}));
// --------------------------------------- use all middleware
cms_app.use(express.json());

// --------------------------------------- Initial MongoDB Connection
databaseConnection.dbConnect().then(() => {
    console.log('database connected successfully');
});

// --------------------------------------- Use Morgan Package for log all http event
cms_app.use(morgan('combined'));
// --------------------------------------- Register all routes exist in API
cms_app.use('/gallery', galleryRouter);
cms_app.use('/category', categoryRouter);
cms_app.use('/vendor', vendorRouter);

cms_app.get('/',(req, res)=>{
    res.status(200).send({
        ok : true
    })
})

module.exports = cms_app;