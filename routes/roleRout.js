const express = require("express")
const roleRoute = express.Router()
const {roledata, postRole, roleDelete, roleUpdate,assignRole} = require('../controller/role')

roleRoute.get('/viewrole',roledata)
roleRoute.post('/addrole',postRole);
roleRoute.delete('/deleterole/:role_id',roleDelete)
roleRoute.patch('/updaterole/:role_id',roleUpdate)
roleRoute.post('/assignrole',assignRole)
module.exports= roleRoute;