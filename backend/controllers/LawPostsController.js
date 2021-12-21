import LawPosts from "../models/lawPostsModel.js";
import { LawValidation } from "../utils/validation/LawValidation.js";

// @desc Create new post
// @route Post api/posts
// @access Private admin/author
const createPost = async (req, res) => {
  const { valid, errors } = LawValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { title, describtion, image, pictures, tags, type } = req.body;

  try {
    const LawPost = new LawPosts({
      title,
      describtion,
      image,
      pictures,
      tags,
      type,
      user: req.user._id,
    });

    const LawPostt = await LawPost.save();

    if (LawPostt) {
      res.status(201).json({
        LawPostt,
        message: "Post have been made successfully",
      });
    } else {
      res.status(400);
      res.json({ general: "Invalid post data" });
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};

// @desc Edit a post by id
// @route Post api/posts/:id
// @access Private admin/owner
const updatePost = async (req, res) => {
  const { valid, errors } = LawValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { title, describtion, image, pictures, tags, type } = req.body;

  try {
    const post = await LawPosts.findById(req.params.id);

    if (req.user.isAdmin || post.user.valueOf() === req.user.id) {
      if (post) {
        post.title = title;
        post.describtion = describtion;
        post.image = image;
        post.pictures = pictures;
        post.tags = tags;
        post.type = type;

        const updatedPost = await post.save();
        res.json(updatedPost);
      } else {
        res.status(400);
        res.json({ general: "There is an error" });
      }
    } else {
      res.status(400);
      res.json({ general: "You can't change other users' posts" });
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({
      general: "Some times errors happen and we can do nothing about it",
    });
  }
};

// @desc Delete a post by id
// @route DELETE api/posts/:id
// @access Private admin/owner
const deletePostById = async (req, res) => {
  try {
    const post = await LawPosts.findById(req.params.id);

    if (req.user.isAdmin || post.user.valueOf() === req.user.id) {
      await post.deleteOne();
      res.json({ message: "post removed" });
    } else {
      res.status(400);
      res.json({ general: "You can't change other users' posts" });
    }
  } catch (err) {}
};

export { createPost, updatePost, deletePostById };
