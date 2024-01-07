const express = require('express');
const path = require('path');


const router = express.Router();

const adminControler = require('../controllers/admin');


router.route('/')
   .get(adminControler.getLogin) //get request
   .post(adminControler.postLogin); // post request

router.get('/adminlogout',adminControler.adminlogout); //get request   

router.get('/status',adminControler.getChangeStatus);// post change status
   
module.exports = router;