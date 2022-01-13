const Post = require("../models/Post");

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getAddPage = (req, res) => {
  res.render("add_post");
};

exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render("edit", {
    photo,
  });
};
