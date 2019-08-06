import express from "express";
import routes from "../routes";
import { join, login, logout } from "../controllers/userController";
import { home } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.join, join);
globalRouter.get(routes.home, join);

export default globalRouter;
