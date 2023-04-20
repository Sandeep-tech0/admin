const express = require('express');
var cors = require('cors')
const app = express();
const swaggerui = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');

app.use(express.json());
app.use(cors())

const option = {
    definition:{
        openapi:"3.0.0",
        info :{
            title:"node js api documentation for mysql",
            version:"1.0.0"
        },
        servers:[
            {

            url: "http://localhost:7000"
            }
        ]
    },
    apis:['./index.js']
}
app.use("/api-docs", swaggerui.serve,swaggerui.setup(swaggerjsdoc(option)));






const roleRoute = require('./routes/roleRout')
const userRoute= require('./routes/userRoute')
const categoryRoute= require('./routes/categoryRoute')
const subcategoryRoute = require('./routes/subcategoryRoute')
const customerRoute = require('./routes/customerRoute');
const offerRoute= require('./routes/offerRoute')


app.use('/api/admin', roleRoute);
app.use('/api/admin',userRoute);
app.use('/api/admin',categoryRoute);
app.use('/api/admin',subcategoryRoute);
app.use('/api/admin',customerRoute);
app.use('/api/admin',offerRoute);


const port =4000;

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})



/**
 * @swagger
 * components:
 *       schemas:
 *             admin_user:
 *                     type: object
 *                     properties:
 *                              id:
 *                                type: string
 *                              name:
 *                                type: string
 *                              password: 
 *                                type: string
 *                              status:
 *                                type: string
 *                              createdon:
 *                                type: datetime
 */


/**
 * @swagger
 * /api/admin/userlist:
 *              get:
 *                 summary: node js api
 *                 description: node js api
 *                 responses:
 *                   200:
 *                      description: to test get method
 *                      content:
 *                            application/json:
 *                                      schema:
 *                                        type: array
 *                                        items:
 *                                            $ref : "#components/schemas/display"
 */
