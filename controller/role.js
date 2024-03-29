const connection = require('../model/DbConnect')

let roledata = async (req, res) => {
    let sqlquery = 'SELECT * FROM roles';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

}


const postRole = async (req, res) => {
    let roledata = req.body;
    console.log(roledata);
    let sqlQuery = "INSERT INTO  roles SET ?";

    await connection.query(sqlQuery, roledata, function (error, result) {
        if (error) {
            console.log("error", error.sqlMessage);
        }
        else {
            res.send(result);
        }
    })
};

const roleDelete = async (req, res) => {
    try {
        console.log("object");
        let { role_id } = req.params;
        console.log("role_id", role_id);
        let sqlquery = `DELETE FROM admin_role WHERE role_id =?`;
        await connection.query(sqlquery, role_id, (error, result) => {
            if (error)
                console.log(error.sqlMessage);
            else
                res.send(result);
        })
    } catch (error) {
        res.send(error.message);

    }

}

const roleUpdate = async (req, res) => {
    const { role_id } = req.params
    const { role_name } = req.body
    const data = { role_name }
    let sqlquery = 'UPDATE roles SET ? WHERE role_id = ?';
    await connection.query(sqlquery, [data, role_id], (error, result) => {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}

//======== role assign api=================

const assignRole = async (req, res) => {
    let roledata = req.body
    console.log(roledata);
    let sqlQuery = "INSERT INTO  role_assign SET ? ";

    const a = await connection.query(sqlQuery, roledata, function (error, result) {
        console.log(a.sql)
        if (error) {
            console.log("error", error.sqlMessage);
        }
        else {
            res.send(result);
        }
    })
};

const viewassignRole = async (req, res) => {
    const id = req.query.id
    let sqlquery = ' select * from role_assign natural join roles where id=?;';

    await connection.query(sqlquery, id, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}

const deleteAssignRole =   async (req, res) => {
        try {

            let { id} = req.query;
            let { role_id } = req.query;

            
            let sqlquery = `DELETE FROM role_assign where id=? AND role_id=?;`;
           const a= await connection.query(sqlquery, [id,role_id], (error, result) => {
            console.log(a.sql)
                if (error)
                    console.log(error.sqlMessage);
                else
                    res.send(result);
            })
        } catch (error) {
            res.send(error.message);
    
        }
    
    }

module.exports = { roledata, roleUpdate, postRole, roleDelete, assignRole, viewassignRole, deleteAssignRole }