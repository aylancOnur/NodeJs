const express = require("express");
const app = express();

app.use(express.static('public'))

app.get("/", function (req, res) {
  res.status(200).send("INDEX PAGE");
});

app.get("/about", function (req, res) {
  res.status(200).send("ABOUT PAGE");
});

app.get("/contact", function (req, res) {
  res.status(200).send("CONTACT PAGE");
});

app.get("*", function (req, res) {
  res.status(404).send("404");
});

const PORT = 3000;

app.listen(PORT || 3000, () => {
  console.log(`Server is running on PORT => ${PORT}`);
});
