const connection= require('../model/DbConnect')

let categorydata = async (req,res) => {
    let sqlquery = 'SELECT * category';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

} 


const postcategory = async (req, res) => {
    let roledata = req.body;
    console.log(roledata);
    let sqlQuery = "INSERT INTO  category SET?";

    await connection.query(sqlQuery, roledata, function (error, result) {
        if (error) {
            console.log("error", error.sqlMessage);
        }
        else {
            res.send(result);
        }
    })
};

const deletecategory = async (req, res) => {
    try {
        console.log("object");
        let { category_id } = req.params;
        console.log("cid", category_id);
        let sqlquery = `DELETE FROM category WHERE category_id =?`;
        await connection.query(sqlquery,category_id, (error, result) => {
            if (error)
                console.log(error.sqlMessage);
            else
                res.send(result);
        })
    } catch (error) {
        res.send(error.message);

    }

}

const categoryUpdate = async (req, res) => {
    const { category_id } = req.params
    const { category_name} = req.body
    const data = { category_name}
    let sqlquery = 'UPDATE category SET ? WHERE category_id = ?';
    await connection.query(sqlquery, [data, category_id], (error, result) => {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}


module.exports = {categorydata,categoryUpdate,deletecategory,postcategory}