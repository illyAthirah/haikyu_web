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

app.listen(3000, () => console.log("Server is Running..."));