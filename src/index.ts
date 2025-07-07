import app from "./app";
import { PORT } from "./config/constants";
import logger from "./utils/logger";

const port = PORT;

app.listen(port, () => {
  logger.info(`🚀 Server is running on http://localhost:${port} 🌍`);
});
