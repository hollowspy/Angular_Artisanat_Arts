var express = require('express');
var router = express.Router();
const connection = require('../bdd/bdd.js')


router.get('/', (req, res)=> {
    res.send({ 
        "message"  : 'route fonctionne'
    })
})


router.post('/',(req, res)=> {
    console.log(req.body)
    const wordSearch = req.body.wordSearch
    const  requeteSQL =   `SELECT id,name, materials, Aphoto_principale, reproduction FROM bestiaire 
                                WHERE name LIKE '%${wordSearch}%'
                                OR materials LIKE '%${wordSearch}%' 
                                OR reproduction LIKE '%${wordSearch}%';
                                SELECT id,name, materials Aphoto_principale, reproduction FROM vegetal 
                                WHERE name LIKE '%${wordSearch}%'
                                OR materials LIKE '%${wordSearch}%'
                                OR reproduction LIKE '%${wordSearch}%'; `

    console.log(requeteSQL);
    connection.query(requeteSQL, (err, rows)=> {
        console.log('resultat bestiaire', rows)
        if (err) throw err; 
        else {
            let bestiaire = rows[0]; 
            let vegetal = rows[1]
            res.send(JSON.stringify({
                'message' : 'voici mes datas', 
                'bestiaire' : bestiaire,
                'vegetal' : vegetal
            }))
       }
    });
})





module.exports = router;