const express = require('express');
var cors = require('cors')
const app = express();
const swaggerui = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');
app.use(cors())
app.use(express.json());

const roleRoute = require('./routes/roleRout')
const userRoute= require('./routes/userRoute')
const categoryRoute= require('./routes/categoryRoute')
const subcategoryRoute = require('./routes/subcategoryRoute')
const customerRoute = require('./routes/customerRoute');
const offerRoute= require('./routes/offerRoute')
const retailerRoute = require('./routes/retailerRoute');

app.use('/api/admin', roleRoute);
app.use('/api/admin',userRoute);
app.use('/api/admin',categoryRoute);
app.use('/api/admin',subcategoryRoute);
app.use('/api/admin',customerRoute);
app.use('/api/admin',offerRoute);
app.use('/api/admin',retailerRoute);

const port =4000;

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
