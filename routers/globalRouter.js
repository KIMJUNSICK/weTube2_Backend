import express from "express";
import routes from "../routes";
import { join, logIn, logOut } from "../controllers/userController";
import { home, search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.logIn, logIn);
globalRouter.get(routes.logOut, logOut);
globalRouter.get(routes.join, join);
globalRouter.get(routes.search, search);

export default globalRouter;
