const express = require("express")
const userRoute = express.Router()
const {postuser,userdata,userUpdate, userStatus,singleUser, changeUserPassword} = require('../controller/user')

userRoute.get('/userlist',userdata)
userRoute.post('/registeruser',postuser);
// userRoute.delete('/deleteuser/:uid',userDelete)
userRoute.patch('/usermodify',userUpdate);
userRoute.get('/userlistfilter/:id',singleUser);
userRoute.patch('/userstatusupdate',userStatus) ; 
userRoute.get('/userlistfilter/:id', singleUser);
userRoute.patch('/userpasswordchange/:id', changeUserPassword);




module.exports= userRoute;