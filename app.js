const createError = require("http-errors");
const express = require("express");
const path = require("path");

// body-parser is bundled with express now | Deprecated use case, express allows for similar/same functionality with built in options
// Possibly utilize cookie-parser if if utiling/merging to frontend demo project
// cookie-parser
// body-parser

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const { json, urlencoded } = express;

var app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/api", apiRouter);

// a) Implement if utiling/merging to frontend demo project
// app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", (req, res) => {
  console.log("app.get(/*) called!");
  // a)
  //   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
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
  res.json({ error: err });
});

module.exports = app;
