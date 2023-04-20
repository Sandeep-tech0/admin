const connection = require('../model/DbConnect')

let userProfile = async (req, res) => {
    let sqlquery = 'SELECT * FROM admin_user';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

}


const updateUserProfile = async (req, res) => {
    // const id  = req.params

    const data = [
       
        req.body.name,
        req.body.status,
         req.params.id,

    ]

    
    let sqlquery = 'UPDATE admin_user SET name=?,status=? WHERE id = ?';
  a=   await connection.query(sqlquery, data, (error, result) => {
    console.log(a.sql)
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}

module.exports= {userProfile,updateUserProfile}
