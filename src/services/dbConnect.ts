import mongoose from "mongoose";
import { MONGODB_URI } from "../config/constants";
import logger from "../utils/logger";

const dbConnect = async () => {
  try {
    if (!MONGODB_URI) {
      logger.error(
        "❌ MongoDB URI is not defined in the environment variables."
      );
      process.exit(1);
    }
    const conn = await mongoose.connect(MONGODB_URI as string);
    logger.info(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    logger.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;
