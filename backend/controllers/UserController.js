import generateToken from "../utils/GenerateToken.js";
import {
  registerValidator,
  loginValidator,
} from "../utils/validation/UserValidator.js";
import User from "../models/userModel.js";

// @desc    register a new user
// @route   POST api/users/
// @access  Private
const registerUser = async (req, res) => {
  const { valid, errors } = registerValidator(req.body);

  if (!valid) return res.status(400).json(errors);

  const { name, email, password } = req.body;

  const error = [];

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      error.push({
        messageEn: "This email is already in use",
        messageAr: "هذا البريد الإلكتروني قيد الاستخدام بالفعل",
        field: "general",
      });
      res.json(error);
      return;
    }

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isAuthor: user.isAuthor,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      error.push({
        messageEn: "Invalid user data",
        messageAr: "بيانات مستخدم غير صالحة",
        field: "general",
      });
      res.json(error);
    }
  } catch (err) {
    console.log(err);
    error.push({
      messageEn: "An error occurred",
      messageAr: "حدث خطأ",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    auth user and get token
// @route   GET api/users/login
// @access  public
const authUser = async (req, res) => {
  const { valid, errors } = loginValidator(req.body);

  if (!valid) return res.status(400).json(errors);

  const { email, password } = req.body;
  let error = [];
  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isAuthor: user.isAuthor,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      error.push({
        messageEn: "Incorrect email or password",
        messageAr: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
        field: "general",
      });
      res.json(error);
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    auth user and get token
// @route   GET api/users
// @access  Private admin
const allUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    remove a user
// @route   DELETE api/users/:id
// @access  private/admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      await user.deleteOne();
      res.json({ message: "user removed", user });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  } catch (err) {
    console.log(err);
  }
};

export { registerUser, authUser, allUsers, deleteUser };
