const express = require("express")
const customerRoute = express.Router()
const { customerdata, postcustomer, deletecustomer, customerUpdate } = require('../controller/customer')

customerRoute.get('/customer',customerdata)
customerRoute.post('/addcustomer',postcustomer);
customerRoute.delete('/deletecustomer/:c_id',deletecustomer)
customerRoute.patch('/customerupdate/:c_id',customerUpdate)

module.exports= customerRoute;