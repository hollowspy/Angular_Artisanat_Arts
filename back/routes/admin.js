var express = require('express');
var router = express.Router();
const passport = require('passport');
const connection = require('../bdd/bdd.js')

router.post('/', (req, res) => {
    passport.authenticate('local', (err, user) => {
        console.log('route admin', user)
        if (err) {
            console.log('erreur dans la route dans auth/sign')
            return res
                .status(500)
                .send(`${err} dans auth/signin`);
        }
        if (!user) {
            console.log('erreur dans auth / signup, mauvais identifiants')
            return res
                .status(400)
                .json({flash: 'Not a yet a Success'});
        }
        return res.json({user, flash: 'ok'});
    })(req, res);
});

router.post('/bestiaire/new', (req, res) => {
    console.log('ajout oeuvre bestiaire')
    const name = req.body.name;
    const materials = req.body.materials;
    const width = req.body.width
    const height = req.body.height
    const reproduction = req.body.reproduction
    let requeteSQL = `INSERT INTO bestiaire 
                  (name, materials, width, height, reproduction) 
                  VALUES ('${name}','${materials}','${width}','${height}', '${reproduction}')`;
    console.log(requeteSQL)
    connection.query(requeteSQL, function (err, result) {
        res.send((err === null)
            ? {
                msg: 'Vous venez d\'ajouter une nouvelle oeuvre dans bestiaire'
            }
            : {
                msg: err
            });
    });
});

router.delete('/bestiaire/delete/:id', (req, res) => {
    const id = req.params.id;
    let requeteSQL = `DELETE FROM bestiaire WHERE id=${id}`;
    console.log(requeteSQL)
    connection.query(requeteSQL, (err, result) => {
        res.send((err === null)
            ? {
                msg: 'Oeuvre supprimée'
            }
            : {
                msg: err
            });
    });
});

router.put('/bestiaire/edit/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const name = req.body.name;
    const materials = req.body.materials;
    const width = req.body.width
    const height = req.body.height
    const reproduction = req.body.reproduction
    let requeteSQL = `UPDATE bestiaire SET name='${name}', materials='${materials}', width=${width}, height=${height}, reproduction='${reproduction}' WHERE id=${id};`
    console.log(requeteSQL)
    connection.query(requeteSQL, (err, result) => {
      res.send((err === null)
          ? {
              msg: 'Oeuvre modifie'
          }
          : {
              msg: err
          });
  });
});

module.exports = router;
