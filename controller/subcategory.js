const connection= require('../model/DbConnect')

let subcategorydata = async (req,res) => {
    let sqlquery = 'SELECT * FROM  category NATURAL JOIN sub_category';

    await connection.query(sqlquery, function (error, result) {
    
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

} 


const postsubcategory = async (req,res) =>{
    try {
        const data = [
          req.body.Category_id,
          req.body.sub_category_id,
          req.body.subcategory_name,
          req.file.location
         ];
         console.log(data)
        const sql = "INSERT INTO sub_category(Category_id,sub_category_id,subcategory_name,subcategory_image) values(?,?,?,?)";
       const a = await connection.query(sql, data, (error, result) => {
        console.log(a.sql)
            console.log(result, "result");
if (error) {
res.send({ status: 400, Error: error.sqlMessage });
} else {
res.send({ status: 200, response: result });
}
});
} catch (error) {
res.send({ Error: error.sqlMessage });
}
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

const subcategoryUpdate = async (req,res) =>{
    try {
    
        const {sub_category_id} = req.query;
        const {category_id} = req.query;

        const {subcategory_name} = req.body;
        const subcategory_image = req.file.location;

       data = {subcategory_name,subcategory_image}

        const sql = "UPDATE sub_category SET ? WHERE  sub_category_id= ? AND category_id=? ";
       const a = await connection.query(sql, [data,sub_category_id,category_id], (error, result) => {
        console.log(a.sql)
            console.log(result, "result");
if (error) {
res.send({ status: 400, Error: error.sqlMessage });
} else {
res.send({ status: 200, response: result });
}
});
} catch (error) {
res.send({ Error: error.sqlMessage });
}
};


module.exports = {subcategoryUpdate,subcategorydata,deletesubcategory,postsubcategory}