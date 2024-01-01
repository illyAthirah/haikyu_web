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

/ show the home page
exports.getHomebefore = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/Homebefore', { user: req.session.email });
   }
   else {
      return res.render('user/Homebefore', { user: "" });
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

// show the home page
exports.getServ = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/service', { user: req.session.email });
   }
   else {
      return res.render('user/service', { user: "" });
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
exports.getPhone = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/phone', { user: req.session.email });
   }
   else {
      return res.render('user/phone', { user: "" });
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

// show the home page
exports.getAbout = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/about', { user: req.session.email });
   }
   else {
      return res.render('user/about', { user: "" });
   }
}
//show FAQ
exports.getFAQ = (req, res, next) => {

   if (req.session.email != undefined) {
      return res.render('user/faq', { user: req.session.email });
   }
   else {
      return res.render('user/faq', { user: "" });
   }
}

//show the login page
exports.getLogin = (req, res, next) => {
   res.render('user/loginAccount', { user: "", msg: [], err: [] });
}

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
            res.render('user/home', {user: result[0].email});
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

/*//get data from user for create account
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
    
   
} */


//get request for devices
exports.getDevice = (req, res, next) => {
   res.render('user/formdevices', { user: req.session.email});
}

/*//get data from user for devices
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
      " VALUES ( '" + req.session.email + "','" + date + "','" + req.body.serialnumber + "','" + req.body.device_type + "','" + req.body.problem + "')";
   
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
               //res.render('user/formservices', { user: "", err: "", data: result });
            //})
            /*}
        })
   }*/
   


//get request for service
exports.getService = (req, res, next) => {
   res.render('user/formservices', { user: req.session.email});
}

/*//get data from user for service
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
      " VALUES ( '" + req.session.serviceID + "','" + req.session.email + "','" + req.body.method + "','" + req.body.address + "','" + req.body.state + "','" + req.body.postcode + "','" + req.body.tracking + "', '" + req.body.courier + "')";
   
      
      /*data1 = "SELECT * " +
      " FROM  user " +
      " WHERE email = " + mysql.escape(req.session.email);*/
      
   
      /*connectDB.query(data, (err, result) => {
         if (err) throw err;
         else {
            /*connectDB.query(data1, (err1, result) => {
               for (i in result) {
                  var a = result[i].date
                  a = a.toString()
                  result[i].date = a.slice(0, 15);
               }*/
               //res.render('user/formpayment', { user: "", err: "", data: result });
            //})*/
       /*  }
        })
      /*connectDB.query(data, (err, result) => {
         if (err) {
            console.error('Error inserting data into the database:', err);
            return res.render("user/formservices", { user: "", msg: [], err: ["Error inserting data into the database"] });
         } else {
            res.render('user/formpayment', { user: "", msg: ["Service data enter succesfully"], err: [] });
         }
      });*/
 /*   
   
} */

//get request for payment
exports.getPayment = (req, res, next) => {
   res.render('user/formpayment', { user: req.session.email});
}

/*//get data from user for payment
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
      " VALUES ( '" + req.session.payID + "','" + req.session.email + "','" + req.body.paymentOption + "','" + req.body.bankname + "','" + req.body.namecard + "','" + req.body.cardnumber + "','" + date + "', '" + req.body.cvv + "')";
   
      
   
      connectDB.query(data, (err, result) => {
         if (err) {
            console.error('Error inserting data into the database:', err);
            return res.render("user/formpayment", { user: "", msg: [], err: ["Error inserting data into the database"] });
         } else {
            res.render('user/home', { user: "", msg: ["Payment data enter succesfully"], err: [] });
         }
      });
    
   
} 
*/




//post status request

exports.postStatus = (req, res, next) => {

   //console.log(req.body);
   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });
   var date = req.body.date;
   //console.log(date)
   data = "INSERT INTO bookingstatus " +
      " VALUES ('" + req.session.email + "','" + req.body.name + "','" + req.body.type + "','" + req.body.roomWant + "','" + 0 + "','" + date + "')"

   data1 = "SELECT * " +
      " FROM  bookingstatus " +
      " WHERE email = " + mysql.escape(req.session.email);
      
   connectDB.query(data, (err, reslt) => {
      if (err) throw err;
      else {
         connectDB.query(data1, (err1, result) => {
            for (i in result) {
               var a = result[i].date
               a = a.toString()
               result[i].date = a.slice(0, 15);
            }
            res.render('user/statusShow', { user: req.session.email, msg: "Your booking is placed", err: "", data: result });
         })
      }
   })
}


//get status
exports.getShowStatus = (req, res, next) => {

   var connectDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "haikyu"
   });

   data = "SELECT * " +
      " FROM  bookingstatus " +
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
            res.render('user/statusShow', { user: req.session.email, msg: "", err: "You dont have any data", data: result });
         }
         else {
            res.render('user/statusShow', { user: req.session.email, msg: "", err: "", data: result });
         }
      }
   })
}


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