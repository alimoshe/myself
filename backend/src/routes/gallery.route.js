const express = require('express');
const galleryRouter = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');


// Create Multer Package Storage which means Location of storing Data
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
// Main route for upload Gallery Image data
const upload = multer({storage: storage}).single('file')
galleryRouter.post('/upload', (req, res) => {
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

// Get All Content of gallery Directory which reside on Server
galleryRouter.get('/rdc', (req, res) => {
    const directoryPath = path.join(__dirname, '..', '..', 'public', 'images');
    const directoryContent = fs.readdirSync(directoryPath);
    return res.status(200).send(directoryContent);
})

// Get name of a file from Request parameters and Return Binary Image content
galleryRouter.get('/rdc/:fileName', (req, res) => {
    try {
        const imageFileName = req.params.fileName;
        const directoryPath = path.join(__dirname, '..', '..', 'public', 'images');
        return res.status(200).sendFile(directoryPath + '/' + imageFileName);
    } catch (error) {
        res.status(404).send({err: error});
    }
})

// remove a File from Gallery Directory by name
galleryRouter.delete('/rdc/:fileName', (req, res) => {
    try {
        const imageFileName = req.params.fileName;
        const directoryPath = path.join(__dirname, '..', '..', 'public', 'images');
        fs.rmSync(directoryPath + '/' + imageFileName);
        return res.status(200).send({ok: true});
    } catch (error) {
        res.status(404).send({err: error});
    }
})
// Get Paginated Gallery Items
galleryRouter.get('/rdc-page/:pageNumber', (req, res) => {

    const directoryPath = path.join(__dirname, '..', '..', 'public', 'images');
    const directoryContent = fs.readdirSync(directoryPath);
    return res.status(200).send(directoryContent);
})

galleryRouter.get('/', (req, res) => {
    return res.status(200).send({ok: true});
})

module.exports = galleryRouter;