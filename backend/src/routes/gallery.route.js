const express = require('express');
const galleryRouter = express.Router();

galleryRouter.get('/', (req, res)=>{
    return res.status(200).send({ok:true});
})

module.exports = galleryRouter;