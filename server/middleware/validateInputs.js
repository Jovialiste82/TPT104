import { body, validationResult } from "express-validator";

const validatePassword = [
  body("password")
    .isLength({ min: 8, max: 30 })
    .withMessage("Password must be between 8 and 30 characters long")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/\d/)
    .withMessage("Password must contain at least one number")
    // .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .matches(/[!@#$&?]/)
    .withMessage(
      "Password must contain at least one special character from this set: !@#$&?"
    )
    .custom((value) => !/\s/.test(value))
    .withMessage("Password must not contain spaces"),

  (req, res, next) => {
    console.log("Validating password...");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Password not valid");
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Password validated!");
    next();
  },
];

export { validatePassword };
