import { Router } from "express";
import { login, signup } from "../controllers/userController.controller";
// import authentication from "../middlewares/authentication.middleware";
// import authorization from "../middlewares/authorization.middleware";

const router = Router();

router.post("/v1/signup", signup).post("/v1/login", login);

// Authentication routes examples
// router.post("/v1/signup", authentication,signup)
// router.post("/v1/signup", authorization(['admin', 'user']),signup)

export default router;
