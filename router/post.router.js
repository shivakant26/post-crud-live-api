const router = require("express").Router();
const postController = require("../controller/post.controller");
router.post("/post", postController.addPost);
router.get("/post", postController.getAllPost);
router.get("/post/:_id", postController.singlePost);
router.delete("/post/:_id", postController.deletePost);
router.put("/post/:_id", postController.updatePost);


module.exports = router;
