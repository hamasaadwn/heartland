import LawPosts from "../models/lawPostsModel.js";
import {
  LawValidation,
  searchValidation,
} from "../utils/validation/LawValidation.js";

// @desc Create new post
// @route Post api/posts
// @access Private admin/author
const createPost = async (req, res) => {
  const { valid, errors } = LawValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { title, describtion, image, pictures, tags, type, language, pdf } =
    req.body;

  try {
    const LawPost = new LawPosts({
      title,
      describtion,
      image,
      pictures,
      tags,
      type,
      user: req.user._id,
      language,
      pdf,
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
// @route Post api/put/:id
// @access Private admin/owner
const updatePost = async (req, res) => {
  const { valid, errors } = LawValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { title, describtion, image, pictures, tags, type, language, pdf } =
    req.body;

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
        post.language = language;
        post.pdf = pdf;

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

// @desc    fetch all posts
// @route   GET api/posts
// @access  public
const getAllPosts = async (req, res) => {
  const pageSize = 43;
  const page = Number(req.query.pageNumber) || 1;
  try {
    const count = await LawPosts.countDocuments({});

    const posts = await LawPosts.find({})
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({ posts, pages: Math.ceil(count / pageSize), page });
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "an error happened while fetching data" });
  }
};

// @desc    fetch all posts
// @route   GET api/posts/:language/:category
// @access  public
const getPostsByCategoryAndLanguage = async (req, res) => {
  const pageSize = 15;
  const page = Number(req.query.pageNumber) || 1;
  try {
    const count = await LawPosts.countDocuments({
      language: req.params.language,
      type: req.params.category,
    });

    const posts = await LawPosts.find({
      language: req.params.language,
      type: req.params.category,
    })
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({ posts, pages: Math.ceil(count / pageSize), page });
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "an error happened while fetching data" });
  }
};

// @desc    fetch posts by type
// @route   GET api/posts/t/:type
// @access  public
const getPostsByType = async (req, res) => {
  const pageSize = 15;
  const page = Number(req.query.pageNumber) || 1;
  try {
    const count = await LawPosts.countDocuments({});

    const posts = await LawPosts.find({ type: req.params.type })
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({ posts, pages: Math.ceil(count / pageSize), page });
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "an error happened while fetching data" });
  }
};

// @desc    fetch posts by type
// @route   GET api/posts/author
// @access  private author
const getPostsByAuthor = async (req, res) => {
  // const pageSize = 43;
  // const page = Number(req.query.pageNumber) || 1;
  const userId = req.user._id;

  try {
    // const count = await LawPosts.countDocuments({});

    if (req.user.isAdmin) {
      const posts = await LawPosts.find({}).sort({
        createdAt: -1,
      });

      res.json(posts);
    } else if (req.user.isAuthor) {
      const posts = await LawPosts.find({ user: userId }).sort({
        createdAt: -1,
      });

      res.json(posts);
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "an error happened while fetching data" });
  }
};

// @desc    fetch posts by id
// @route   GET api/posts/:id
// @access  public
const getPostsById = async (req, res) => {
  try {
    const post = await LawPosts.findById(req.params.id).populate("user");

    post.counter += 1;
    post.save();

    post.user ? (post.user.password = "") : "";

    if (post) {
      res.json(post);
    } else {
      res.status(404);
      res.json({ general: "this post is unavailable" });
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "an error happened while fetching data" });
  }
};

// @desc    fetch posts by keyword
// @route   GET api/posts/s
// @access  public
const postsSearch = async (req, res) => {
  const { valid, errors } = searchValidation(req.query.keyword);

  if (!valid) return res.status(400).json(errors);

  const keyword = req.query.keyword
    ? {
        $or: [
          {
            title: {
              $regex: req.query.keyword,
              $options: "i",
            },
          },
          {
            describtion: {
              $regex: req.query.keyword,
              $options: "i",
            },
          },
        ],
      }
    : {};

  const pageSize = 15;
  const page = Number(req.query.pageNumber) || 1;

  const count = await LawPosts.countDocuments({ ...keyword });

  const posts = await LawPosts.find({ ...keyword })
    .sort({
      createdAt: -1,
    })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ posts, page, pages: Math.ceil(count / pageSize) });
};

export {
  createPost,
  updatePost,
  deletePostById,
  getAllPosts,
  getPostsByType,
  getPostsById,
  postsSearch,
  getPostsByAuthor,
  getPostsByCategoryAndLanguage,
};
