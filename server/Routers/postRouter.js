import express from "express";
import postcontroller from "../Controllers/postController.js"
import postservices from "../services/postService.js";
const router = express.Router();


/* Add Post */
router.post("/addpost", postcontroller.addPost);

/* Get One Post */
router.get("/getonepost/:id", postcontroller.getOnePost);

/* List Post */
router.get("/", postcontroller.listPost);

/* Update Post */
router.put("/updatepost/:id", postcontroller.updatePost);

 /* Delete a Post with id */
router.delete("/deleteonepost/:id", postcontroller.deleteOnePost);


  /* Delete All Post */
router.delete("/", postcontroller.deleteAllPost);

export default router;
