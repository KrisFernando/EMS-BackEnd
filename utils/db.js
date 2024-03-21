import mysql from 'mysql'

const con = mysql.createConnection({
    host: "ems-db.czrjhzqbd8na.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password1234",
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default con;

