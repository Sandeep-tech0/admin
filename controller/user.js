const connection = require('../model/DbConnect')
const bcryt = require('bcrypt')

///=  user list get api function ===============================================//

let userdata = async (req, res) => {
    let sqlquery = 'SELECT * FROM admin_user ';

    await connection.query(sqlquery, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

}

//============================================================================///

///= user Registeration post api fuction ====================//
const postuser = async (req, res) => {
    let {id,name,password} = req.body;
    const salt = await bcryt.genSalt(5);
    const haashPassword = await bcryt.hash(password,salt);
    const userdata= {id,name,password:haashPassword}
    let sqlQuery = "INSERT INTO  admin_user SET?";

    await connection.query(sqlQuery, userdata, function (error, result) {
        if (error) {
            console.log("error", error.sqlMessage);
        }
        else {
            res.send(result);
        }
    })
};
//==================================================================================

// const userDelete = async (req, res) => {
//     try {
//         console.log("object");
//         let { uid } = req.params;
//         console.log("uid", uid);
//         let sqlquery = `DELETE FROM admin_user_login WHERE uid =?`;
//         await connection.query(sqlquery, uid, (error, result) => {
//             if (error)
//                 console.log(error.sqlMessage);
//             else
//                 res.send(result);
//         })
//     } catch (error) {
//         res.send(error.message);

//     }

// }

///==== usermodify patch api function ===========================================
const userUpdate = async (req, res) => {
    // const id  = req.params
const {id} = req.query
const{name,password} = req.body
   data = {name,password}


    let sqlquery = 'UPDATE admin_user SET? WHERE id = ?';
    a = await connection.query(sqlquery,[data, id], (error, result) => {
        console.log(a.sql)
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}

//===========================================================================================


//========= userstatus  update  put api function  ===============================================


const userStatus = async (req, res) => {
    const data = [

        req.query.status,
        req.query.id,
    ]


    let sqlquery = 'UPDATE admin_user SET status =? WHERE id = ?';
    const a = await connection.query(sqlquery, data, (error, result) => {
        console.log(a.sql)
        if (error)  
            console.log(error.sqlMessage);
        else
            res.send(result);
    })
}


//======== userpassword change  patch api fuction   =====================================/////
const changeUserPassword = async (req, res) => {
    try {
        const { oldPassword, newPassword, confirmPassword } = req.body
        const { id } = req.params
        console.log(req.body)
        console.log(req.params);
        // if(!oldPassword || !newPassword || !confirmPassword) {
        //     console.log("object");
        //     return res.json({ status: 400, response: "Missing Parameters" });
        // }
        // if(newPassword !== confirmPassword) {
        //     return res.json({ status: 400, response: "Password miss match Parameters" });
        // }

        let sqlquery = 'SELECT * FROM admin_user WHERE id = ? ';
      const a =  await connection.query(sqlquery, id, async (err, result) => {
            if (result.length == 0) {
                return res.json({ status: 400, response: "user not found" });
            }
            if (err) {
                return res.json({ status: 400, response: err.sqlMessage });
            }
 
    const compare = await bcryt.compare()

            if (result.length != 0) {
                if (oldPassword == result[0].password) {
                    if (result[0].password === newPassword) {
                        return res.json({ status: 400, response: "sedrtyujkjhgfdesdfghjk not match" });
                    } else {
                        if (newPassword !== confirmPassword) {
                            return res.json({ status: 400, response: "Password miss match Parameters" });
                        }
                        if (result[0].password == newPassword) {
                            return res.json({ status: 400, response: ` new password can not be same as old password` });
                        }
                        let sqlquery1 = 'UPDATE admin_user SET ? WHERE id = ? ';
                        await connection.query(sqlquery1, [{ password: newPassword }, id], async (err1, result1) => {
                            if (result) {
                                return res.json({ status: 400, response: "Password changed success fully" });
                            }
                            if (err) {
                                return res.json({ status: 400, response: err.sqlMessage });
                            }
                        });
                    }
                } else {
                    return res.json({ status: 400, response: "Password not match" });
                }
            }
        })
    } catch (error) {
        res.json({ status: 400, response: error.message })
    }
}



//============== user list filter get api ==============================



let singleUser = async (req, res) => {
    const id = req.params.id
    let sqlquery = 'SELECT name ,id,status,createdon FROM admin_user where id =?';

    await connection.query(sqlquery, id, function (error, result) {
        if (error)
            console.log(error.sqlMessage);
        else
            res.send(result);
    })

}






//=====================================================================//


module.exports = { postuser, changeUserPassword, userStatus, userdata, userUpdate, singleUser }