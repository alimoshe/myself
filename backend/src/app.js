
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const galleryRouter = require('./routes/gallery.route');

const cms_app = express();
cms_app.use(cors({
    origin:'*'
}));
// --------------------------------------- use all middleware
cms_app.use(express.json());
cms_app.use('/gallery', galleryRouter)
// --------------------------------------- Use Morgan Package for log all http event
cms_app.use(morgan('combined'));
// --------------------------------------- Register all routes exist in API

cms_app.get('/',(req, res)=>{
    res.status(200).send({
        ok : true
    })
})

module.exports = cms_app;