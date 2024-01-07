var mysql = require('mysql');
var formidable = require('formidable');
const path = require('path');

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10,  // Set the connection limit as per your requirements
    host: "localhost",
    user: "root",
    password: "",
    database: "haikyu"
});

// login get request
exports.getLogin = (req, res, next) => {
    res.render('admin/login', { user: "", msg: [], err: [] });
 }

// login post request
exports.postLogin = (req, res, next) => {

    var connectDB = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "",
       database: "haikyu"
    });
 
    data = "SELECT * " +
       "FROM  admin " +
       "WHERE name = " + mysql.escape(req.body.name) +
       " AND pass = " + mysql.escape(req.body.pass);
 
 
    connectDB.query(data, (err, result) => {
       if (err) throw err; // show if any error have
          
          else {
             res.render('admin/index', { user: "", msg: [], err: ["Please Check Your information again"] });
          }
 
       
    })
 
 };
 
// Change booking status
//show the satus page
exports.getChangeStatus = (req, res) => {
    // Fetch data from the database
 
    var connectDB = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "",
       database: "haikyu"
    });
    
    const query = 'SELECT * FROM bookstatus '; // Update based on your actual table and column names
 
   connectDB.query(query, (err, results) => {
     if (err) {
       console.error('Error fetching data from the database: ', err);
       // Handle the error appropriately, e.g., res.status(500).send('Internal Server Error');
     } else {
       // Render your 'user/status' page with the fetched data
       res.render('admin/index', { user: req.session.email, data: results });
       // Update 'user/status' with your actual page name
     }
   });
 };
  
 
/*exports.postChangeStatus = (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        let statusValue = 0; // Default value, assuming 0 represents an initial status

        const statusOptions = {
            "Approve": 1,
            "In Progress": 2,
            "Repaired": 3,
            "Cancel": 4
        };

        if (req.body.status && statusOptions.hasOwnProperty(req.body.status)) {
            statusValue = statusOptions[req.body.status];
        }

        const data = "UPDATE bookstatus SET  status = ? WHERE email = ? AND serialnumber = ? AND device_type = ? AND method = ? AND payment = ?";
        const data1 = "SELECT * FROM  bookstatus WHERE status IN (0, 1, 2, 3) ";

        connection.query(data, [statusValue, req.body.email, req.body.serialnumber, req.body.device_type, req.body.method, req.body.payment], (err, result) => {
            if (err) {
                connection.release();
                throw err;
            }

            connection.query(data1, (err1, result1) => {
                connection.release(); // Release the connection to the pool

                if (err1) throw err1;

                for (const i in result1) {
                    const a = result1[i].date;
                    result1[i].date = a.toString().slice(0, 15);
                }
                return res.render('admin/index', { msg: "", err: "", data: result1 });
            });
        });
    });
};*/

// logout
exports.adminlogout = (req, res, next) => {
    req.session.destroy();
    res.render('admin/login', { msg: "", err: "" });
};
