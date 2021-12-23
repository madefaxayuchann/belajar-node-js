const express = require("express");
const app = express();

app.get("/search", function (req, res, next) {
  var name = req.query.nama;
  console.log(`nama : ${name}`);
  var age = req.query.umur;
  console.log(`umur : ${age}`);
  res.send("Request has parsed see console");
});

/*
app
  .route("/book/:name")
  .get(function (req, res) {
    console.log(req.params.name);
    res.send("Get a random book");
  })
  .post(function (req, res) {
    res.send("Add a book");
  })
  .put(function (req, res) {
    res.send("Update the book");
  });
/*
var cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

var cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

var cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);
/*
let a = 8;
let b = 7;
let c = a + b;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send(JSON.stringify(c));
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  res.send({ userId, bookId });
});

app.get("/user.tokens", (req, res) => {
  res.send("Medya <3 Kanako Yui");
});
*/

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
