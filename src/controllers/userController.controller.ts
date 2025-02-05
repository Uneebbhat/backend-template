import { Request, Response } from "express";
import UserSignupSchema from "../schemas/UserSignupSchema.schema";
import ErrorHandler from "../utils/ErrorHandler";
import User from "../models/UserModel.model";
import bcrypt from "bcrypt";
import generateToken from "../helpers/generateToken";
import setCookies from "../helpers/setCookies";
import ResponseHandler from "../utils/ResponseHandler";
import UserDTO from "../dto/UserDTO.dto";
import UserLoginSchema from "../schemas/UserLoginSchema.schema";
import sendEmail from "../services/sendEmail";
import { welcomeEmail } from "../templates/emails/welcomeEmail";

export const signup = async (req: Request, res: Response) => {
  const { error } = UserSignupSchema.validate(req.body);
  if (error) {
    ErrorHandler.send(res, 400, error.message);
  }

  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      ErrorHandler.send(res, 409, "User already exists");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      const token = generateToken(res, newUser);

      setCookies(res, token);

      const userDTO = new UserDTO(newUser);

      try {
        const emailTemplate = welcomeEmail(newUser.name);
        await sendEmail(
          newUser.email,
          emailTemplate.subject,
          emailTemplate.text
        );
      } catch (error: any) {
        console.error(`Failed to send welcome email: ${error.message}`);
      }

      ResponseHandler.send(
        res,
        201,
        "Account created successfully",
        userDTO,
        token
      );
    }
  } catch (error: any) {
    ErrorHandler.send(res, 500, `Internal Server Error: ${error.message}`);
  }
};

export const login = async (req: Request, res: Response) => {
  const { error } = UserLoginSchema.validate(req.body);
  if (error) {
    ErrorHandler.send(res, 400, error.message);
  }

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      ErrorHandler.send(res, 404, "User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user!.password);
    if (!isPasswordCorrect) {
      ErrorHandler.send(res, 400, "Invalid email or password");
    } else {
      const token = generateToken(res, user);

      setCookies(res, token);

      const userDTO = new UserDTO(user!);

      ResponseHandler.send(res, 200, "Login successful", userDTO, token);
    }
  } catch (error: any) {
    ErrorHandler.send(res, 500, `Internal Server Error: ${error.message}`);
  }
};
