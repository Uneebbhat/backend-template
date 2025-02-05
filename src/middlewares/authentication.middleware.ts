import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";

interface JwtPayload {
  userId: string;
  role: string;
}

const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Extract token from headers or cookies
    const token = req.headers.authorization || req.cookies.token;

    if (!token) {
      ErrorHandler.send(res, 401, "Unauthorized: No token provided");
    }

    if (!JWT_SECRET) {
      ErrorHandler.send(res, 500, "Server error: JWT_SECRET not found");
    }

    // Verify token with type assertion
    const decoded = jwt.verify(token, JWT_SECRET as string) as JwtPayload;

    if (!decoded?.userId || !decoded?.role) {
      ErrorHandler.send(res, 401, "Unauthorized: Invalid token");
    }

    // Attach userId and role to the request object
    (req as any).userId = decoded.userId;
    (req as any).userRole = decoded.role; // Ensure role is attached

    next(); // Move to the next middleware
  } catch (error: any) {
    ErrorHandler.send(res, 500, `Internal Server Error: ${error.message}`);
  }
};

export default authentication;
