var express = require('express');
var router = express.Router();

/* GET food */
const ctrlFood = require("../controllers/food"); 

const ctrlMain = require("../controllers/main");


/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/favourite', ctrlFood.favouriteFood);
router.get('/list', ctrlFood.foodlist);


module.exports = router;