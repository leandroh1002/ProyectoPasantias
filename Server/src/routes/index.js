const router = require ('express').Router();
const getPublishes = require("../controllers/getPublish")
const getPublishById = require("../controllers/getPublishById");
const postPublish = require('../controllers/postPublish');


router.get('/publish' , getPublishes)  
router.get('/publish/:idPublish' , getPublishById)  
router.post('/publish' , postPublish)  

module.exports = router;
