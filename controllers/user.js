//moduler 
var mysql = require('mysql');


//authentication check
exports.authentication = (req, res, next) => {

   if (req.session.email != undefined) {
      next();
   }
   else {
      res.render('user/loginAccount', { user: "" });
   }
}

// show the home page
exports.getHome = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/Home', { user: req.session.email });
   }
   else {
      return res.render('user/Home', { user: "" });
   }
}


// show the home page
exports.getHomeafter = (req, res, next) => {

  if (req.session.email != undefined) {
    return res.render('user/Homeafter', { user: req.session.email });
   }
   else {
    return res.render('user/Homeafter', { user: "" });
  }
}




// show the home service before
exports.getServicesbefore = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/Servicesbefore', { user: req.session.email });
   }
   else {
      return res.render('user/Servicesbefore', { user: "" });
   }
}
// show the home services
exports.getServ = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/service', { user: req.session.email });
   }
   else {
      return res.render('user/service', { user: "" });
   }
}


// show the service method
exports.getformservices = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/formservices', { user: req.session.email });
   }
   else {
      return res.render('user/formservices', { user: "" });
   }
}

// show the form devices
exports.getformdevices = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/formdevices', { user: req.session.email });
   }
   else {
      return res.render('user/formdevices', { user: "" });
   }
}

// show the form devices
exports.getformpayment = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/formpayment', { user: req.session.email });
   }
   else {
      return res.render('user/formpayment', { user: "" });
   }
}


// show the tv
exports.getTvbefore = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/tvbefore', { user: req.session.email });
   }
   else {
      return res.render('user/tvbefore', { user: "" });
   }
}

// show the tv
exports.getTv = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/tv', { user: req.session.email });
   }
   else {
      return res.render('user/tv', { user: "" });
   }
}

// show the phone
exports.getPhonebefore = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/phonebefore', { user: req.session.email });
   }
   else {
      return res.render('user/phonebefore', { user: "" });
   }
}

// show the phone
exports.getPhone = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/phone', { user: req.session.email });
   }
   else {
      return res.render('user/phone', { user: "" });
   }
}


// show the laptop
exports.getLaptopbefore = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/laptopbefore', { user: req.session.email });
   }
   else {
      return res.render('user/laptopbefore', { user: "" });
   }
}
// show the laptop
exports.getLaptop = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/laptop', { user: req.session.email });
   }
   else {
      return res.render('user/laptop', { user: "" });
   }
}

// show the aboutbefore page
exports.getAbout = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/Aboutbefore', { user: req.session.email });
   }
   else {
      return res.render('user/Aboutbefore', { user: "" });
   }
}
//about after page
exports.getAboutafter = (req, res, next) => {

   if (req.session.email != undefined) {
     return res.render('user/Aboutafter', { user: req.session.email });
    }
    else {
     return res.render('user/Aboutafter', { user: "" });
   }
 }

//show FAQ
exports.getFAQ = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/faqbefore', { user: req.session.email });
   }
   else {
      return res.render('user/faqbefore', { user: "" });
   }
}

exports.getFAQafter= (req, res, next) => {

   if (req.session.email != undefined) {
     return res.render('user/faqafter', { user: req.session.email });
    }
    else {
     return res.render('user/faqafter', { user: "" });
   }
 }

//show the login page
exports.getLogin = (req, res, next) => {
   res.render('user/loginAccount', { user: "", msg: [], err: [] });
}

//show the satus page
exports.getStatus = (req, res) => {
   // Fetch data from the database

   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });
   
   const query = 'SELECT * FROM device'; // Replace with your actual table name
 
   connectDB.query(query, (err, results) => {
     if (err) {
       console.error('Error fetching data from the database: ', err);
       res.status(500).send('Internal Server Error');
     } else {
       // Render your status page with the fetched data
       res.render('user/status', { data: results }); // Update 'status' with your actual page name
     }
   });
 };

//post page of login
exports.postLogin = (req, res, next) => {

   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });

   data = "SELECT * " +
      "FROM  user " +
      "WHERE email = " + mysql.escape(req.body.email) +
      " AND password = " + mysql.escape(req.body.password);


   connectDB.query(data, (err, result) => {
      if (err) throw err; // show if any error have
      else {
         if (result.length) {
            req.session.email = result[0].email;
            res.render('user/Homeafter', {user: result[0].email});
         }
         else {
            res.render('user/loginAccount', { user: "", msg: [], err: ["Please Check Your information again"] });
         }

      }
   })

}


// show create account page
exports.getCreateAccount = (req, res, next) => {
   res.render('user/createAccount', { user: "", msg: [], err: [] })
}

//get data from user for create account
exports.postCreateAccount = (req, res, next) => {

   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });

   connectDB.connect((err) => {
      if (err) {
         console.error('Error connecting to the database:', err);
      } else {
         console.log('Connected to the database');
      }
   });

   var p1 = req.body.password;
   var p2 = req.body.con_pass;

   if (p1 !== p2) { // if password doesn't match 
      return res.render("user/createAccount", { user: "", msg: [], err: ["Password Doesn't Match"] })
   }

   var data = "INSERT INTO user " +
      " VALUES ( '" + req.body.email + "','" + req.body.firstname + "','" + req.body.lastname + "','" + req.body.username + "','" + req.body.phone + "','" + req.body.address + "','" + p1 + "')";
   
       
      connectDB.query(data, (err, result) => {
         if (err) {
            console.error('Error inserting data into the database:', err);
            return res.render("user/createAccount", { user: "", msg: [], err: ["Error inserting data into the database"] });
         } else {
            res.render('user/loginAccount', { user: "", msg: ["Account Created Successfully"], err: [] });
         }
      });
    
   
} 


//get request for devices
exports.getDevice = (req, res, next) => {
   res.render('user/formdevices', { user: req.session.email});
}

//get data from user for devices
exports.postDevice = (req, res, next) => {

   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });

   connectDB.connect((err) => {
      if (err) {
         console.error('Error connecting to the database:', err);
      } else {
         console.log('Connected to the database');
      }
   });

   var date = req.body.date;
   //console.log(date)
   data = "INSERT INTO device " +
      " VALUES ('" + req.session.deviceID + "','" + req.session.email + "','" + req.body.serialnumber + "','" + req.body.device_type + "','" + req.body.problem + "')";
      
   
      data1 = "SELECT * " +
      " FROM  user " +
      " WHERE email = " + mysql.escape(req.session.email);
      
   
      connectDB.query(data, (err, result) => {
         if (err) throw err;
         else {
          /* connectDB.query(data1, (err1, result) => {
               for (i in result) {
                  var a = result[i].date
                  a = a.toString()
                  result[i].date = a.slice(0, 15);
               }*/
            
               res.render('user/formservices', { user: "", err: "", data: result });
            //})
            }
        })
   }
   


//get request for service
exports.getService = (req, res, next) => {
   res.render('user/formservices', { user: req.session.email});
}

//get data from user for service
exports.postService = (req, res, next) => {

   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });

   connectDB.connect((err) => {
      if (err) {
         console.error('Error connecting to the database:', err);
      } else {
         console.log('Connected to the database');
      }
   });

  
    data = "INSERT INTO service " +
      " VALUES ( '" + req.session.serviceID + "','" + req.session.email + "','" + req.body.method + "','" + req.body.streetaddress + "','" + req.body.city + "','" + req.body.state_home + "','" + req.body.postcode_home + "', '" + req.body.address_pickup + "', '" + req.body.state_pickup + "', '" + req.body.postcode_pickup + "', '" + req.body.tracking + "','" + req.body.courier + "')";
   
      
      data1 = "SELECT * " +
      " FROM  user " +
      " WHERE email = " + mysql.escape(req.session.email);
      
   
      connectDB.query(data, (err, result) => {
         if (err) throw err;
         else {
            /*connectDB.query(data1, (err1, result) => {
               for (i in result) {
                  var a = result[i].date
                  a = a.toString()
                  result[i].date = a.slice(0, 15);
               }*/
               res.render('user/formpayment', { user: "", err: "", data: result });
            //})
         }
        })
      connectDB.query(data, (err, result) => {
         if (err) {
            console.error('Error inserting data into the database:', err);
            return res.render("user/formservices", { user: "", msg: [], err: ["Error inserting data into the database"] });
         } else {
            res.render('user/formpayment', { user: "", msg: ["Service data enter succesfully"], err: [] });
         }
      });
   
   
} 

//get request for payment
exports.getPayment = (req, res, next) => {
   res.render('user/formpayment', { user: req.session.email});
}

//get data from user for payment
exports.postPayment = (req, res, next) => {

   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });

   connectDB.connect((err) => {
      if (err) {
         console.error('Error connecting to the database:', err);
      } else {
         console.log('Connected to the database');
      }
   });

   var date = req.body.cardexpdate;
   //console.log(date)
   var data = "INSERT INTO payment " +
      " VALUES ('" + req.session.payID + "','" + req.session.email + "','" + req.body.payment + "','" + req.body.bankname + "','" + req.body.namecard + "','" + req.body.cardnumber + "','" + req.body.expireddate + "', '" + req.body.cvv + "')";
   
      
   
      connectDB.query(data, (err, result) => {
         if (err) {
            console.error('Error inserting data into the database:', err);
            return res.render("user/formpayment", { user: "", msg: [], err: ["Error inserting data into the database"] });
         } else {
            res.render('user/confirmbook', { user: "", msg: ["Payment data enter succesfully"], err: [] });
         }
      });
    
   
} 




// show the confirm page
exports.getConfirmBook = (req, res, next) => {

   if (req.session.email != undefined) {
     return res.render('user/confirmbook', { user: req.session.email });
    }
    else {
     return res.render('user/confirmbook', { user: "" });
   }
 }
// post confirm book

exports.postConfirmBook = (req, res, next) => {

   //console.log(req.body);
   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });
   //var date = req.body.date;
   //console.log(date)
   data = "INSERT INTO bookstatus " +
      " VALUES ('" + req.session.statusID + "','" + req.session.deviceID + "','" + req.session.serviceID + "','" + req.session.payID + "')";
//,'" + date + "'
   /*data1 = "SELECT * " +
      " FROM  bookstatus " +
      " WHERE email = " + mysql.escape(req.session.email);*/
   data2 = "SELECT * " +
      " FROM  device " +
      " WHERE deviceID = " + mysql.escape(req.session.deviceID);
   data3 = "SELECT * " +
      " FROM  service " +
      " WHERE serviceID = " + mysql.escape(req.session.serviceID);
   data3 = "SELECT * " +
      " FROM  payment " +
      " WHERE payID = " + mysql.escape(req.session.payID);
      
   connectDB.query(data, (err, reslt) => {
      if (err) throw err;
      else {
         /*connectDB.query(data1, (err1, result) => {
            for (i in result) {
               var a = result[i].date
               a = a.toString()
               result[i].date = a.slice(0, 15);
            }*/
            res.render('user/status' ,{ user: "", msg: [], err: ["Error"] });
         //})
      }
   })
}


//get status
/*exports.getStatus = (req, res, next) => {

   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });

   data = "SELECT * " +
      " FROM  bookstatus " +
      " WHERE email = " + mysql.escape(req.session.email);


   connectDB.query(data, (err, result) => {

      if (err) throw err;
      else {
         for (i in result) {
            var a = result[i].date
            a = a.toString()
            result[i].date = a.slice(0, 15);
         }
         if (result.length < 1) {
            res.render('user/status', { user: req.session.email, msg: "", err: "You dont have any data", data: result });
         }
         else {
            res.render('user/status', { user: req.session.email, msg: "", err: "", data: result });
         }
      }
   })
}*/


//delete booking request
exports.deleteBooking =(req,res,next)=>{
   //console.log(req.body);
   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });

   data = "DELETE FROM bookingstatus " +
   " WHERE email = " + mysql.escape(req.body.email) +
   " AND type = " + mysql.escape(req.body.type) +
   " AND category = " + mysql.escape(req.body.cat)+
   " AND roomWant = "+mysql.escape(req.body.want)
  
   connectDB.query(data,(err,result)=>{
      if(err) throw err;
      else{
         next();
      }
   })

}


//show contact page
exports.getContact =(req,res,next)=>{
   if(req.session.email== undefined){
      res.render('user/contact', { user: "" });
   }
   else{
      res.render('user/contact', { user: req.session.email });
   }
   
}



//logout
exports.logout = (req, res, next) => {
   req.session.destroy();
   res.render('user/home', { user: "" });

}