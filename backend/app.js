var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const sgMail = require('@sendgrid/mail')
const port = 5000;
const emailKey ="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"

var app = express();
const cors = require("cors");
app.use(cors({ credentials:true,origin:'http://localhost:3000'}))

sgMail.setApiKey(emailKey)
const emailMSG = {
  to: 'dada7117+1@gmail.com',
  from: 'dada7117@gmail.com',
  subject:`GymBug order confirmation`,
  text:'hello',
  html:'<h1>Hello</h1>'
}

sgMail.send(emailMSG)
.then(response => console.log(response))
.catch(err => console.log(err))



const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
