const express = require("express")
const retailerRoute = express.Router()
const {retailerData,postRetailer} = require('../controller/retailer')

retailerRoute.get('/viewretailer',retailerData)
retailerRoute.post('/addretailer',postRetailer)


module.exports= retailerRoute;