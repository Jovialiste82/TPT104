import express from "express";
import { registerUser, logoutUser } from "../controllers/user.controller.js";
// import { protect } from "../middleware/authMiddleware.js";
// import { validatePassword } from "../middleware/validateInputs.js";

const router = express.Router();

// base endpoint: "/api/v1/users"
router.post("/register", registerUser);
router.post("/logout", logoutUser);

export default router;
