const connection = require('../model/DbConnect')

retailerData =  async (req, res) => {
    let sqlquery = 'SELECT * FROM retailer_registration';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

}



const postRetailer = async (req, res) => {
    let role = req.body;
    console.log("roledata----------",role);
    let sqlQuery = "INSERT INTO retailer_registration SET?";

   const a = await connection.query(sqlQuery, role, function (error, result) {
    console.log(a.sql)
        if (error) {
            console.log("error", error.sqlMessage);
        }
        else {
            res.send(result);
        }
    })
};



module.exports = {retailerData,postRetailer}