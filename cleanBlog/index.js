const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const Photo = require("./models/Photo");

const app = express();

mongoose.connect("mongodb://localhost/cleanBlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // url deki datayı okumamızı sağlıyor.
app.use(express.json()); // datayı json a çevirmek için

const port = 5000;

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//ROUTES
app.get("/", async (req, res) => {
  const photos = await Photo.find({});
  res.render("index", {
    photos,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
