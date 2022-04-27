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

galleryRouter.get('/rdc', (req, res) => {
    const directoryPath = path.join(__dirname, '..', '..', 'public', 'images');
    const directoryContent = fs.readdirSync(directoryPath);
    return res.status(200).send(directoryContent);
})

galleryRouter.get('/rdc/:fileName', (req, res) => {
    try {
        const imageFileName = req.params.fileName;
        const directoryPath = path.join(__dirname, '..', '..', 'public', 'images');
        return res.status(200).sendFile(directoryPath + '/' + imageFileName);
    } catch (error) {
        res.status(404).send({err: error});
    }
})

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


galleryRouter.get('/', (req, res) => {
    return res.status(200).send({ok: true});
})

module.exports = galleryRouter;