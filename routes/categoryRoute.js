require("dotenv").config()
const path = require('path')
const express = require("express");
const multer = require("multer")
const multerS3 = require("multer-s3");
const aws  = require("aws-sdk");


const awsconfig = {
  secretAccessKey: "ZCeFAb0UPtg7UF+Mp0Vdcu8QwySRXRHPg8MjEuO1",
  accessKeyId: "AKIAUUPDRBNOFL4UZ65O",
  region: "ap-south-1",
  bucketName: "onlinebazarcategory",

};

// const BUCKET = process.env.BUCKET
const S3 = new aws.S3(awsconfig);

let upload = multer({
    storage: multerS3({
    bucket: "onlinebazarcategory",
    s3: S3,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
    },
    acl: "public-read",
    key: (req, file, cb) =>
    cb(
    null,
    `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`
    ),
    }),
    });
    


const categoryRoute = express.Router()
const {postcategory,categoryUpdate,categorydata,deletecategory,productCategoryNameGet} = require('../controller/category')


categoryRoute.get('/categorylist',categorydata)
categoryRoute.post('/addnewcategory', upload.single("Category_image"),postcategory);
categoryRoute.delete('/deletecategory/:cid',deletecategory)
categoryRoute.patch('/updatecategory/:Category_id',upload.single("Category_image"),categoryUpdate);
categoryRoute.get('/showcategory',productCategoryNameGet)



module.exports= categoryRoute;