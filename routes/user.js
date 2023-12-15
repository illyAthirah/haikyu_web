const express = require('express');
const path = require('path');


const router = express.Router();

const userControler = require('../controllers/user');

router.get('/',userControler.getHome); //home page 
router.get('/serv',userControler.getServ); //home page 
router.get('/about',userControler.getAbout); //home page 

router.route('/login')
       .get(userControler.getLogin) // get request for login
       .post(userControler.postLogin)// post request for login

router.route('/createaccount') 
       .get(userControler.getCreateAccount)    //get request for create account   
       .post(userControler.postCreateAccount); //post request for create account   
 
       
router.route('/status')
       .post(userControler.postStatus); 

router.route('/showStatus')
       .get(userControler.authentication,userControler.getShowStatus);// get show status

router.post('/deletereq',userControler.deleteBooking,userControler.getShowStatus);       
       
router.get('/contact',userControler.getContact); 

router.route('/device')
       .get( userControler.authentication, userControler.getDevice) //get request for form
       .post(userControler.postDevice); //post request form the form


router.route('/service')
       //.get(userControler.getService )//get request for form
        .post(userControler.postService); //post request form the service

router.route('/payment')
        //.get(userControler.getPayment )//get request for form
         .post(userControler.postPayment); //post request form the service


router.get('/logout',userControler.logout); //logout       

module.exports = router;