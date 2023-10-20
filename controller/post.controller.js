const Post = require("../model/post.model");
const addPost = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      res.status(400).json({
        message: "please fill this field",
      });
    } else {
      const post = await Post.create({
        title: title,
        description: description,
      });
      if (post) {
        res.status(200).json({
          message: "add Post succussfully",
          data: post,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getAllPost = async (req, res) => {
  try {
    const searchQuery = req.query.query;
    let posts;

    if (searchQuery) {
      posts = await Post.find({
        $or: [
          { title: { $regex: searchQuery, $options: "i" } },
          { description: { $regex: searchQuery, $options: "i" } },
        ],
      });
    } else {
      posts = await Post.find();
    }

    if (posts) {
      res.status(200).json({
        message: "Posts fetched successfully",
        data: posts,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const singlePost = async (req, res) => {
  try {
    const post = await Post.find({ _id: req.params });
    if (post) {
      res.status(200).json({
        message: "single record fetched",
        data: post,
      });
    } else {
      res.status(400).json({
        message: "particular record not Available !",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete({ _id: req.params._id });
    if (post) {
      res.status(200).json({
        message: "delete record succussfully",
      });
    } else {
      res.status(400).json({
        message: "No Record Found !",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (post) {
      res.status(200).json({
        message: "update record succussfully",
        data: post,
      });
    } else {
      res.status(400).json({
        message: "Post not found",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { addPost, getAllPost, singlePost, deletePost, updatePost };
