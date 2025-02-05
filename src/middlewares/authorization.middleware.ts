import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

const authorization = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get user role from request (attached by authentication middleware)
      const userRole = (req as any).userRole;

      if (!userRole) {
        ErrorHandler.send(res, 403, "Forbidden: User role not found");
      }

      // Check if user's role is included in the allowed roles
      if (!roles.includes(userRole)) {
        ErrorHandler.send(
          res,
          403,
          "Forbidden: You are not authorized to access this resource"
        );
      }

      next();
    } catch (error: any) {
      ErrorHandler.send(res, 500, `Internal Server Error: ${error.message}`);
    }
  };
};

export default authorization;
