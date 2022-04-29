const express = require('express');
const masterData = require('../models/master');
const categoryRouter = express.Router();

categoryRouter.get('/', (req, res)=> {
    return res.status(200).send(masterData.superCategory);
})

module.exports = categoryRouter;