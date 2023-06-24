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

const subcategoryRoute = express.Router()
const {subcategoryUpdate,subcategorydata,deletesubcategory,postsubcategory} = require('../controller/subcategory')

subcategoryRoute.get('/viewsubcategory',subcategorydata)
subcategoryRoute.post('/addsubcategory', upload.single("subcategory_image"),postsubcategory);
subcategoryRoute.delete('/deletesubcategory/:sub_category_id',deletesubcategory)
subcategoryRoute.patch('/updatesubcategory',upload.single("subcategory_image"),subcategoryUpdate)

module.exports= subcategoryRoute;