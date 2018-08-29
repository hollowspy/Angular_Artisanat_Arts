var express = require('express');
var router = express.Router();
var multer = require('multer'); 

router.get('/', (req, res)=> {
    res.send('ok file')
})

var store = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './public/images')
    }, 
    filename:function(req, file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});

var upload = multer({storage:store}).single('file');

router.post('/upload', function(req, res, next){
    console.log('je rentre dans file/upload')
    console.log('reqbody', req.body)
    console.log('reqboydfile', req.body.file)
    console.log('reqfile', req.file)
    upload(req, res, function(err){
        if (err){
            return res.status(501).json({
                error : err
            })
        }
        return res.json({
            originalname:req.file.originalname,
            uploadname : req.file.filename
        });
    })
})

module.exports = router;
