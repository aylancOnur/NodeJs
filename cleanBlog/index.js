const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const Post = require("./models/Post");

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
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
});

app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
