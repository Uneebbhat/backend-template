import Joi from "joi";

const UserSignupSchema = Joi.object({
  name: Joi.string().required().min(2).max(50).trim().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name cannot exceed 50 characters",
  }),

  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .lowercase()
    .trim()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
      "string.base": "Email must be a string",
    }),

  password: Joi.string()
    .required()
    .min(8)
    .max(100)
    // .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters long",
      "string.max": "Password cannot exceed 100 characters",
      // "string.pattern.base":
      //   "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
});

export default UserSignupSchema;
