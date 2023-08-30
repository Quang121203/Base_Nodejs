const connection = require('../database/connection');

const getHome = (req, res) => {
    res.send('Helloss World!');
}

const getTest = (req, res) => {
    res.render('home.ejs');
}

const postAddUser = (req, res) => {
    const{id,name,city}=req.body;
    connection.query(
        `INSERT INTO User
        VALUES (?,?,?);`,
        [id,name,city],
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
        }
      );
    res.send('add succedd');
}

module.exports = { getHome, getTest,postAddUser };