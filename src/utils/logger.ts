import winston from "winston";
import { StreamOptions } from "morgan";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

// 👇 Morgan-compatible stream object for logging HTTP requests via Winston
export const morganStream: StreamOptions = {
  write: (message: string) => {
    logger.info(message.trim());
  },
};

export default logger;
