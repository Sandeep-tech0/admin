const express = require("express")
const offerRoute = express.Router()
const {Updatestatusoffer,offerUpdate,offerlist,postoffer  } = require('../controller/offers.js')

offerRoute.get('/offerdata',offerlist)
offerRoute.post('/createnewoffer',postoffer);
offerRoute.patch('/updateoffer/:offer_code',offerUpdate)
offerRoute.patch('/offerstatuschange/:offer_code',Updatestatusoffer)

module.exports= offerRoute;