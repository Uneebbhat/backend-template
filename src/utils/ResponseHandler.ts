import { Response } from "express";

class ResponseHandler {
  static send(
    res: Response,
    statusCode: number,
    message: string,
    data?: {},
    token?: string
  ) {
    return res.status(statusCode).json({
      success: true,
      statusCode,
      message,
      data,
      token,
    });
  }
}

export default ResponseHandler;
