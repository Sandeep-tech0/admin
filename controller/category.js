const connection= require('../model/DbConnect')


let categorydata = async (req,res) => {
    let sqlquery = 'SELECT * FROM category';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

} 

// const postcategory = async (req, res) => {
//     try {
//         console.log(req.body)
//         const data = {
//             Category_id: req.body.Category_id,
//             Category_Name: req.body.Category_Name,
//             gst: req.body.gst
//         }

//         const sql = "INSERT INTO category SET ?"
//        const a = await connection.query(sql, data, async (err, result) => {
//         console.log(err.sqlMessage)
//             if (err) {
//                 return res.send({ status: 400, Eroor: err.message })
//             }
//             console.log(result)
//             if (req.files) {
//                 const profilePicture = req.files["Category_image"];
//                 //   console.log("profilePicture",profilePicture)
//                 if (profilePicture) {
//                   const extensions = [".png", ".jpg", ".jpeg"];
//                   const fileLink = await uploadFile(profilePicture, extensions);
//                   console.log(fileLink);
//                   const data = {Category_image: fileLink}
//                   const a = await connection.query('update category SET ? where Category_id = ? ', [data ,Category_id ], async (err, result) => {
//                     console.log(a.sql)
//                         if (err) {
//                             return res.send({ status: 400, Eroor: err.message })
//                         }
//                         else{

//                             res.send({ status: 200, response: result })
//                         }
            
//                     }) 
//                 };
        
                  
//                 //  await UserUpdateData(req.user._id, data);
//                 }
              

//             res.send({ status: 200, response: result })
            
//         })
      
//     } catch (err) {
//         res.send({ status: 400, Eroor: err.message })
//     }
// };

const postcategory = async (req,res) =>{
    try {
        const data = [
          req.body.Category_id,
          req.body.Category_Name,
          req.file.location,
          req.body.gst
         ];
         console.log(data)
        const sql = "INSERT INTO category(Category_id,Category_Name,Category_image,gst) values(?,?,?,?)";
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

const categoryUpdate =  async (req,res) =>{
    try {
        const Categoryid = req.params.Category_id;
        const {Category_Name} = req.body;
        const Category_image = req.file.location;
        const {gst} = req.body;

console.log(Category_Name,Category_image,gst,Categoryid)
       data = {Category_Name,Category_image,gst}

        const sql = "UPDATE category SET ?   where Category_id=?";
       const a = await connection.query(sql, [data,Categoryid], (error, result) => {
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
   


///========================Show Category_name AND Categoryid ==========================
const productCategoryNameGet = async (req, res) => {
    try {
    let sqlQuery = "SELECT Category_id, Category_Name FROM category";
    await connection.query(sqlQuery, (error, result) => {
    if (error) {
    res.send({ status: 400, Error: error.sqlMessage });
    } else {
    res.send({ status: 200, response: result });
    }
    });
    } catch (err) {
    res.send({ Error: error.sqlMessage });
    }
    };
    


module.exports = {categorydata,categoryUpdate,deletecategory,postcategory,productCategoryNameGet}