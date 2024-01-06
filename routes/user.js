const express = require('express');
const path = require('path');


const router = express.Router();

const userControler = require('../controllers/user');

router.get('/',userControler.getHome); //home page 
router.get('/homeafter',userControler.getHomeafter); //home page 
router.get('/Servicesbefore',userControler.getServicesbefore); //serv page
router.get('/serv',userControler.getServ); //serv page 
router.get('/Aboutbefore',userControler.getAbout); //aboutbefore page 
router.get('/Aboutafter',userControler.getAboutafter); //aboutafter page 
router.get('/faqbefore',userControler.getFAQ); //faqbefore page
router.get('/faqafter',userControler.getFAQafter); //faqafter page
router.get('/status',userControler.getStatus); //faqafter page

router.route('/login')
       .get(userControler.getLogin) // get request for login
       .post(userControler.postLogin)// post request for login

router.route('/createaccount') 
       .get(userControler.getCreateAccount)    //get request for create account   
       .post(userControler.postCreateAccount); //post request for create account   
 
       




router.post('/deletereq',userControler.deleteBooking,userControler.getStatus);       
       
router.get('/contact',userControler.getContact); 

router.route('/device')
       .get( userControler.authentication, userControler.getformdevices) //get request for form
       .post(userControler.postDevice); //post request form the form

router.route('/confirmbook')
       .get( userControler.getConfirmBook) //get request for form
       .post(userControler.postConfirmBook); //post request form the form

router.route('/service')
       .get(userControler.getformservices)//get request for form
        .post(userControler.postService); //post request form the service

router.route('/payment')
        .get(userControler.getformpayment )//get request for form
         .post(userControler.postPayment); //post request form the service
    
router.route('/tvbefore')
        .get(userControler.getTvbefore )//get request for tv

router.route('/tv')
        .get(userControler.getTv )//get request for tv

router.route('/phonebefore')
        .get(userControler.getPhonebefore )//get request for tv

router.route('/phone')
        .get(userControler.getPhone )//get request for tv

router.route('/laptopbefore')
        .get(userControler.getLaptopbefore )//get request for tv

router.route('/laptop')
        .get(userControler.getLaptop )//get request for tv

router.get('/logout',userControler.logout); //logout       

module.exports = router;