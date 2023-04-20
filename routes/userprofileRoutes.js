const express = require("express")
const userprofileRoute = express.Router()
const {userProfile,updateUserProfile} = require('../controller/userprofile')

userprofileRoute.get('/userprofile/:id',userdata)
userprofileRoute.patch('/userprofileupdate/:id',userUpdate);



module.exports= userprofileRoute;