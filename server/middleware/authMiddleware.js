// server/middleware/authmiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "Utilisateur non trouvé" });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      return next(new Error("Accès non autorisé"));
    }
  } else {
    console.error("No token found");
    return res.status(401).json({ message: "Accès non autorisé" });
  }
};

export { protect };
