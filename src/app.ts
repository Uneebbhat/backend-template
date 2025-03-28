import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import dbConnect from "./config/dbConnect";
import ErrorHandler from "./utils/ErrorHandler";
import userRoutes from "./routes/userRoutes.routes";

const app: Application = express();

dbConnect();

// Helmet middleware for adding security headers to all responses
app.use(helmet());

// Rate limiting middleware to protect the API from brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["*"], // TODO: Replace '*' with your frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

// Routes
app.use("/api", userRoutes);

app.use("*", (req: Request, res: Response) => {
  ErrorHandler.send(res, 404, "Page not found");
});

export default app;
