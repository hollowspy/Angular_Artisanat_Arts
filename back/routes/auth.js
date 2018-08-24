var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
    console.log('je rentre dans auth')
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



module.exports = router;