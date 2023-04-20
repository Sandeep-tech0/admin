let mysql = require('mysql');

var connection = mysql.createConnection({
user:'root',
password: '',
host:'localhost',
database:'onlinebazar1',
port:3306
});


connection.connect(function (error){
    if (error){
        console.log(error.sqlMessage);
    }
    else{
        console.log('database connected');
    }
})
module.exports= connection;