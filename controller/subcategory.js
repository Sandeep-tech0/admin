const connection= require('../model/DbConnect')

let subcategorydata = async (req,res) => {
    let sqlquery = 'SELECT * FROM  sub_category';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

} 


const postsubcategory = async (req, res) => {
    let roledata = req.body;
    console.log(roledata);
    let sqlQuery = "INSERT INTO  sub_category SET?";

    await connection.query(sqlQuery, roledata, function (error, result) {
        if (error) {
            console.log("error", error.sqlMessage);
        }
        else {
            res.send(result);
        }
    })
};

const deletesubcategory = async (req, res) => {
    try {
        console.log("object");
        let { sub_category_id } = req.params;
        console.log("subcategory_id", subcategory_id);
        let sqlquery = `DELETE FROM sub_category WHERE sub_category_id =?`;
        await connection.query(sqlquery, sub_category_id, (error, result) => {
            if (error)
                console.log(error.sqlMessage);
            else
                res.send(result);
        })
    } catch (error) {
        res.send(error.message);

    }

}

const subcategoryUpdate = async (req, res) => {
    const { sub_category_id } = req.params
    const { subcategory_name,subcategory_image} = req.body
    const data = {subcategory_name,subcategory_image}
    let sqlquery = 'UPDATE sub_category SET ? WHERE sub_category_id = ?';
    await connection.query(sqlquery, [data, sub_category_id], (error, result) => {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}


module.exports = {subcategoryUpdate,subcategorydata,deletesubcategory,postsubcategory}