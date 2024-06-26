// server/controllers/user.controller.js
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register a new user
// @route   POST /api/v1/users
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: "Invalid data" });
      return; // Exit the function early
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      generateToken(res, user._id);
      console.info("User created successfully");
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: "Invalid data" });
    }
  } catch (error) {
    console.error(error);
  }
};

// @desc    Logout user / clear cookie
// @route   POST /api/v1/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export { registerUser, logoutUser };
