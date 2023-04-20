const connection= require('../model/DbConnect')

let customerdata = async (req,res) => {
    let sqlquery = 'SELECT * FROM customer';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

} 


const postcustomer = async (req, res) => {
    let roledata = req.body;
    console.log(roledata);
    let sqlQuery = "INSERT INTO  customer SET?";

    await connection.query(sqlQuery, roledata, function (error, result) {
        if (error) {
            console.log("error", error.sqlMessage);
        }
        else {
            res.send(result);
        }
    })
};

const deletecustomer = async (req, res) => {
    try {
        console.log("object");
        let { c_id } = req.params;
        console.log("customer_id", c_id);
        let sqlquery = `DELETE FROM customer WHERE c_id =?`;
        await connection.query(sqlquery, c_id, (error, result) => {
            if (error)
                console.log(error.sqlMessage);
            else
                res.send(result);
        })
    } catch (error) {
        res.send(error.message);

    }

}

const customerUpdate = async (req, res) => {
    const { c_id } = req.params
    const { c_name,password} = req.body
    const data = { c_name,password}
    let sqlquery = 'UPDATE customer SET ? WHERE c_id = ?';
    await connection.query(sqlquery, [data, role_id], (error, result) => {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}


module.exports = {customerdata,deletecustomer,customerUpdate,postcustomer}