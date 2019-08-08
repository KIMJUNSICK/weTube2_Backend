import express from "express";
import routes from "../routes";
import {
  getJoin,
  postJoin,
  getLogIn,
  postLogIn,
  logOut
} from "../controllers/userController";
import { home, search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.logIn, getLogIn);
globalRouter.post(routes.logIn, postLogIn);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logOut, logOut);
globalRouter.get(routes.search, search);

export default globalRouter;
