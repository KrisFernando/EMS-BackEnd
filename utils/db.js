import mysql from 'mysql'

const con = mysql.createConnection({
    host: "ENDPOINT",
    user: "USER",
    password: "PASS",
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

