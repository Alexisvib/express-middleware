const routeTest = require("express").Router();

routeTest.use((req, res, next) => {
  console.log("Route-level Middleware");
  next();
});

routeTest.get("/", (req, res) => {
  res.status(200).json({ message: "Second middleware Here ! " });
});

module.exports = routeTest;
