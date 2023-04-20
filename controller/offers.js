const connection= require('../model/DbConnect')


const postoffer = async (req, res) => {
    let data = req.body;
    console.log(data);
    let sqlQuery = "INSERT INTO offers  SET?";

    await connection.query(sqlQuery, data, function (error, result) {
        if (error) {
            console.log("error", error.sqlMessage);
        }
        else {
            res.send(result);
        }
    })
};


let offerlist = async (req,res) => {
    let sqlquery = 'SELECT * FROM  offers';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

} 


const offerUpdate = async (req, res) => {
    const { offer_code } = req.params
    const { offer_name,valid_from,valid_to,discount_upto,flat_discount,status} = req.body
    const data = {  offer_name,valid_from,valid_to,discount_upto,flat_discount,status}
    let sqlquery = 'UPDATE offers SET ? WHERE offer_code = ?';
    await connection.query(sqlquery, [data,offer_code], (error, result) => {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}


const Updatestatusoffer  = async (req, res) => {
    const { offer_code } = req.params
    const { status} = req.body
    const data = { status}
    let sqlquery = 'UPDATE offers SET status=? WHERE offer_code = ?';
    await connection.query(sqlquery, [data,offer_code], (error, result) => {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}

module.exports ={Updatestatusoffer,offerUpdate,offerlist,postoffer}
