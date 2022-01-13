const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const fileUpload = require("express-fileupload");

const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController");

const app = express();

mongoose.connect("mongodb://localhost/cleanBlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // url deki datayı okumamızı sağlıyor.
app.use(express.json()); // datayı json a çevirmek için
app.use(fileUpload());

const port = 5000;

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//ROUTES
//POST CONTROLLERS
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);

//PAGE CONTROLLERS
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
