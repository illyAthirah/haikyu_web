const express =  require('express');
const path    =  require('path');
const bodyParser = require('body-parser');
const session = require('express-session');


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

//own module
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: false
    })
  );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(userRouter);
app.use("/admin" ,adminRouter);

/*app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});*/

/*app.get("/fetch",(req,res) => {
  con.query("select * from device",function(err,result,fields){
    if(err)
  {
    console.log(err)
  }else{
    //res.send(result)
    
    var r=JSON.parse(JSON.stringify(result));
    console.log(r[0])
      console.log(r[1].name)
  }
  })
})*/

app.get('/status', (req, res) => {
  // Fetch data from the database
  const query = 'SELECT * FROM device'; // Replace with your actual table name

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from the database: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      // Render your status page with the fetched data
      res.render('/status', { data: results }); // Update 'status' with your actual page name
    }
  });
});


app.listen(3000, () => console.log("Server is Running..."));