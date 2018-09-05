var express = require('express');
var router = express.Router();
const passport = require('passport');
const connection = require('../bdd/bdd.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var rimraf = require('rimraf');

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
        const token = jwt.sign(user, 'mon_token_jwt')
        return res.json({user, token, flash: 'ok'});
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
                  VALUES ("${name}","${materials}","${width}","${height}", "${reproduction}")`;
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
            if (err === null){
               rimraf(`public/images/bestiaire/${id}`, function (err){
                if (err){
                    console.log('erreur', err)
                } else {
                    console.log('fichier supprimés avec succès')
                }
               });
            }
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
    let requeteSQL = `UPDATE bestiaire SET name="${name}", materials="${materials}", width=${width}, height=${height}, reproduction="${reproduction}" WHERE id=${id};`
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

router.post('/vegetal/new', (req, res) => {
    console.log('ajout oeuvre bestiaire')
    const name = req.body.name;
    const materials = req.body.materials;
    const width = req.body.width
    const height = req.body.height
    const reproduction = req.body.reproduction
    let requeteSQL = `INSERT INTO vegetal 
                  (name, materials, width, height, reproduction) 
                  VALUES ("${name}","${materials}","${width}","${height}", "${reproduction}")`;
    console.log(requeteSQL)
    connection.query(requeteSQL, function (err, result) {
        res.send((err === null)
            ? {
                msg: 'Vous venez d\'ajouter une nouvelle oeuvre dans Vegetal'
            }
            : {
                msg: err
            });
    });
});

router.delete('/vegetal/delete/:id', (req, res) => {
    const id = req.params.id;
    let requeteSQL = `DELETE FROM vegetal WHERE id=${id}`;
    console.log(requeteSQL)
    connection.query(requeteSQL, (err, result) => {
        res.send((err === null)
            ? {
                msg: 'Oeuvre supprimée'
            }
            : {
                msg: err
            });
            if (err === null){
                rimraf(`public/images/vegetal/${id}`, function (err){
                 if (err){
                     console.log('erreur', err)
                 } else {
                     console.log('fichier supprimés avec succès')
                 }
                });
             }
    });
});

router.put('/vegetal/edit/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const name = req.body.name;
    const materials = req.body.materials;
    const width = req.body.width
    const height = req.body.height
    const reproduction = req.body.reproduction
    let requeteSQL = `UPDATE vegetal SET name="${name}", materials="${materials}", width=${width}, height=${height}, reproduction="${reproduction}" WHERE id=${id};`
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

router.post('/newuser', (req, res) => {
    isAlreadySign = false;
    res.setHeader('Content-Type', 'application/json');
    console.log('je rentre dans newUser')
    const hash = bcrypt.hashSync(req.body.password, 10)
    const email = req.body.email;
    const password = req.body.password;
    const passwordCheck = req.body.passwordCheck;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName
    console.log(req.body)
    let reqSQLcheck = `SELECT firstName, lastName FROM admin where mail = '${email}'`;
    console.log(reqSQLcheck)
    connection.query(reqSQLcheck, (err, result) => {
        if (err) 
            throw err;
        else {
            if (result.length >= 1) {
                console.log('mail trouvé, pas de création', result)
                isAlreadySign = true; 
                res.send(JSON.stringify({
                    message : "mail trouvé pas de création"
                }))
            }
            else {
                if (password !== passwordCheck){
                    console.log('password different')
                    res.send(JSON.stringify({
                        message : "password differents"
                    }))
                }
                else {
                    let requeteSQL_Insert = `INSERT INTO admin 
                    (mail, password, firstName, lastName) 
                    VALUES ("${email}","${hash}","${firstName}", "${lastName}")`;
                    connection.query(requeteSQL_Insert, (err, result) => {
                        (err === null) ? 
                        res.send(JSON.stringify({
                            message : "le compte vient d\'etre ajouté"
                        })) : 
                        res.send(JSON.stringify({ 
                            message : err
                        }))
                 })
                }
                
            }
        }
    })

});



module.exports = router;
