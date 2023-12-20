const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middlewere => res
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  console.log(user)
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
