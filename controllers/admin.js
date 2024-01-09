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
/*exports.getChangeStatus = (req, res) => {
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
 };*/
  
 
 exports.postChangeStatus = (req, res, next) => {
    var connectDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "haikyu"
    });
    var value = 0;
    if (req.body.click === "Repaired") {
        // Approve logic
        const value = 1;
        const data = `UPDATE bookstatus 
                      SET status = ${mysql.escape(value)}
                      WHERE statusID = ${mysql.escape(req.body.statusID)}
                      AND email = ${mysql.escape(req.body.email)}
                        AND serialnumber = ${mysql.escape(req.body.serialnumber)}
                        AND device_type = ${mysql.escape(req.body.device_type)}
                        AND method = ${mysql.escape(req.body.method)}
                        AND payment = ${mysql.escape(req.body.payment)}`;
        
        const data1 = `SELECT * 
                       FROM bookstatus 
                       WHERE status = 0`;

        connectDB.query(data, (err, result) => {
            if (err) throw err;
            else {
                connectDB.query(data1, (err1, result1) => {
                    if (err1) throw err1;
                    else {
                        return res.render('admin/index', { msg: "", err: "", data: result1 });
                    }
                });
            }
        });
    } else if (req.body.click === "Cancel") {
        // Cancel logic
        const data = `UPDATE bookstatus 
                      SET status = 2
                      WHERE statusID = ${mysql.escape(req.body.statusID)}
                       AND email = ${mysql.escape(req.body.email)}
                        AND serialnumber = ${mysql.escape(req.body.serialnumber)}
                        AND device_type = ${mysql.escape(req.body.device_type)}
                        AND method = ${mysql.escape(req.body.method)}
                        AND payment = ${mysql.escape(req.body.payment)}`;

        const data1 = `SELECT * 
                       FROM bookstatus 
                       WHERE status = 0`;

        connectDB.query(data, (err, result) => {
            if (err) throw err;
            else {
                connectDB.query(data1, (err1, result1) => {
                    if (err1) throw err1;
                    else {
                        return res.render('admin/index', { msg: "", err: "", data: result1 });
                    }
                });
            }
        });
    }
};

/*exports.postChangeStatus = (req, res, next) => {
    // console.log(req.body);

    const connectDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "haikyu"
    });

    let value = 0;

    // Use a switch statement for better readability
    switch (req.body.click) {
        case "Approve":
            value = 1;
            break;
        case "Repaired":
            value = 2;
            break;
        case "In Progress":
            value = 3;
            break;
        case "Cancel":
            value = 4;
            break;
        default:
            value = 0;
            break;
    }

    const data = `UPDATE bookstatus 
                  SET status = ${mysql.escape(value)}
                  WHERE email = ${mysql.escape(req.body.mail)}
                    AND serialnumber = ${mysql.escape(req.body.serialnumber)}
                    AND device_type = ${mysql.escape(req.body.device_type)}
                    AND method = ${mysql.escape(req.body.method)}
                    AND payment = ${mysql.escape(req.body.payment)}`;

    const data1 = `SELECT * 
                   FROM bookstatus 
                   WHERE status = 0`;

    connectDB.query(data, (err, result) => {
        if (err) throw err;
        else {
            connectDB.query(data1, (err1, result1) => {
                if (err1) throw err1;
                else {
                   
                    return res.render('admin/index', { msg: "", err: "", data: result1 });
                }
            });
        }
    });
};
*/

exports.postChangeStatus = (req, res, next) => {
    console.log(req.body); // Log the request body to check its values

    const connectDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "haikyu"
    });

    connectDB.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return res.status(500).send('Internal Server Error');
        }

        let value = 0;

        switch (req.body.click) {
            case "Approve":
                value = 1;
                break;
            case "Repaired":
                value = 2;
                break;
            case "In Progress":
                value = 3;
                break;
            case "Cancel":
                value = 4;
                break;
            default:
                value = 0;
                break;
        }

        const updateQuery = `
            UPDATE bookstatus 
            SET status = ${mysql.escape(value)}
            WHERE email = ${mysql.escape(req.body.mail)}
            AND serialnumber = ${mysql.escape(req.body.serialnumber)}
            AND device_type = ${mysql.escape(req.body.device_type)}
            AND method = ${mysql.escape(req.body.method)}
            AND payment = ${mysql.escape(req.body.payment)}
        `;

        console.log(updateQuery); // Log the SQL query before executing

        connectDB.query(updateQuery, (err, result) => {
            if (err) {
                console.error('Error updating status:', err);
                connectDB.end(); // Close the database connection
                return res.status(500).send('Internal Server Error');
            }

            const selectQuery = `
                SELECT * 
                FROM bookstatus 
                WHERE status = 0
            `;

            connectDB.query(selectQuery, (err1, result1) => {
                if (err1) {
                    console.error('Error selecting data:', err1);
                    connectDB.end(); // Close the database connection
                    return res.status(500).send('Internal Server Error');
                }

                connectDB.end(); // Close the database connection

                console.log('Status updated successfully');
                return res.render('admin/index', { msg: "", err: "", data: result1 });
            });
        });
    });
};



// logout
exports.adminlogout = (req, res, next) => {
    req.session.destroy();
    res.render('admin/login', { msg: "", err: "" });
};
