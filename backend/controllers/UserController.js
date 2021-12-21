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

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      res.json({ general: "This email is already in use" });
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
      throw new Error("Invalid user data");
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};

// @desc    auth user and get token
// @route   GET api/users/login
// @access  public
const authUser = async (req, res) => {
  const { valid, errors } = loginValidator(req.body);

  if (!valid) return res.status(400).json(errors);

  const { email, password } = req.body;

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
      res.json({ general: "ئیمەیڵ یان وشەی تێپەرت هەڵەیە" });
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error" });
  }
};

export { registerUser, authUser };