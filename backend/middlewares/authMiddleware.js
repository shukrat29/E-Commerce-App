import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// protect routes
const userAuth = asyncHandler(async (req, res, next) => {
  // Read the JWT from the cookie
  const token = req.cookies.jwt;

  if (token) {
    try {
      // extracting userId from token payload
      const decoded = jwt.verify(token, process.env.JWT_SECRETE);
      const user = await User.findById(decoded.userId).select("-password");
      req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, Invalid token");
  }
});

// Admin middleware
const adminAuth = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as admin");
  }
};

export { userAuth, adminAuth };
