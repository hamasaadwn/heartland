import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      res.json({ error: "not authorized, token failed" });
    }
  }

  if (!token) {
    console.log("test");
    res.status(401);
    res.json({ error: "Not authorized" });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    res.json({ error: "Not authorized" });
  }
};

const author = (req, res, next) => {
  if (req.user && req.user.isAuthor) {
    next();
  } else {
    res.status(401);
    res.json({ error: "Not authorized" });
  }
};

export { protect, admin, author };
