let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dane2"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM `hobby`", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});