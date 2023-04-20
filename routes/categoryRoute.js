const express = require("express")
const categoryRoute = express.Router()
const {postcategory,categoryUpdate,categorydata,deletecategory} = require('../controller/category')

categoryRoute.get('/categorylist',categorydata)
categoryRoute.post('/addnewcategory',postcategory);
categoryRoute.delete('/deletecategory/:cid',deletecategory)
categoryRoute.patch('/updatecategory/:cid',categoryUpdate)

module.exports= categoryRoute;