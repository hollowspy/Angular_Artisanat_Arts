// utilisation classique avec callback

var express = require('express');
var router = express.Router();
const connection = require('../../bdd/bdd.js')

router.post('/', (req, res) => {
    let sql = `SELECT * from deco`; 
    connection.query(sql, (err, result) => {
        if (err) throw err; 
        res.send(JSON.stringify(result))

    })
})


// const mysql = require('promise-mysql');


// let pool = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'jn8bb11',
//     database : 'artisanats_arts',
   
// });

// router.get('/', async (req, res) => {
//     try {
//         let connection = await pool.getConnection();
//         let results = await connection.query('SELECT * from deco');
//         res.send(JSON.stringify(results));
//     } catch (err) {
//         return res.send('erreur', err);
//     }
// });



module.exports = router;

