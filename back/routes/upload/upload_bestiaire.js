var express = require('express');
var router = express.Router();
var multer = require('multer'); 
const connection = require('../../bdd/bdd.js')
var fs = require('fs');
var path = require('path');

router.get('/', (req, res)=> {
    res.send('ok upload Bestiaire')
})


var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './public/images/bestiaire');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now()+'_'+file.originalname);
    }
  });
//   var upload = multer({ storage : storage }).array('userPhoto',2);
var upload = multer({ storage : storage }).array('file', 6)
  

  
  router.post('/',function(req,res){
      upload(req,res,function(err) {
         console.log('je rentre dans upload')
         console.log('longueur', req.files.length)
         console.log('reqfiles', req.files);
          if(err) {
              console.log('erreur', err)
              return res.status(501).json({
                error : err,
                formatImage : pbFormatImage
            })
          }
          console.log('file uploadded')
         res.send(JSON.stringify({
            message : 'source photo MAJ'
         }))
      });
  });





module.exports = router;