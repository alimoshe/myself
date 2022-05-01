const express = require('express');
const vendorDAO = require('../models/vendor/vendor.mongo');
const vendorRouter  = express.Router();

vendorRouter.get('/:active', async (req, res) => {
    const activeFilter = req.params.active || true;
    return res.status(200).send(await vendorDAO.getVendors(activeFilter));
})

vendorRouter.post('/', async (req, res)=>{
    const vendor = req.body;
    return res.status(200).send(await vendorDAO.createVendor(vendor));
})

vendorRouter.post('/ed', async (req, res)=>{
    const oldVendor = req.body.oldVendor;
    const newVendor = req.body.newVendor;
    return res.status(200).send(await vendorDAO.updateVendor(newVendor, oldVendor));
})

module.exports = vendorRouter;