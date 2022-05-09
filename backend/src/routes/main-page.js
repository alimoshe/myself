const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const os = require("os");
const mainPageRouter = express.Router();

// Create Multer Package Storage which means Location of storing Data
const storage = multer.diskStorage({
    destination: (req, file, cb, url) => {
        if(req.originalUrl === '/main-page/upload/slider')
            cb(null, 'public/main-page/slider');
        else
            cb(null, 'public/main-page');
    },
    filename: (req, file, cb) => {
        if (file) {
            const name = file.originalname;

            cb(null, name);
        }
    }
})
// Main route for upload Gallery Image data
const upload = multer({storage: storage}).single('file')
mainPageRouter.post('/upload/slider', (req, res) => {

    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        } else {
            return res.status(200).json({ok: true});
        }
    });

});
// Get All Content of main-page Directory which reside on Server
mainPageRouter.get('/rdc/slider', (req, res) => {
    ;
    const directoryPath = path.join(__dirname, '..', '..', 'public', 'main-page', 'slider');
    const directoryContent = fs.readdirSync(directoryPath);
    return res.status(200).send(directoryContent);
});

// Get name of a file from Request parameters and Return Binary Image content
mainPageRouter.get('/rdc/slider/:fileName', (req, res) => {
    try {
        const imageFileName = req.params.fileName;
        const directoryPath = path.join(__dirname, '..', '..', 'public', 'main-page', 'slider');
        return res.status(200).sendFile(directoryPath + '/' + imageFileName);
    } catch (error) {
        res.status(404).send({err: error});
    }
})
module.exports = mainPageRouter;