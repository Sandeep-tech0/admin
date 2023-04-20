const express = require("express")
const subcategoryRoute = express.Router()
const {subcategoryUpdate,subcategorydata,deletesubcategory,postsubcategory} = require('../controller/subcategory')

subcategoryRoute.get('/viewsubcategory',subcategorydata)
subcategoryRoute.post('/addsubcategory',postsubcategory);
subcategoryRoute.delete('/deletesubcategory/:sub_category_id',deletesubcategory)
subcategoryRoute.patch('/updatesubcategory/:sub_category_id',subcategoryUpdate)

module.exports= subcategoryRoute;