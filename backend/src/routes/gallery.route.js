const express = require('express');
const galleryRouter = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        if (file) {
            const name = file.originalname;

            cb(null, name);
        }
    }
})
const upload = multer({storage: storage}).single('file')

galleryRouter.get('/', (req, res)=>{
    return res.status(200).send({ok:true});
})

module.exports = galleryRouter;