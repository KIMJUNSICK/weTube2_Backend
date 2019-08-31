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
import { onlyPrivate, onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogIn);

globalRouter.get(routes.logIn, onlyPublic, getLogIn);
globalRouter.post(routes.logIn, onlyPublic, postLogIn);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logOut, onlyPrivate, logOut);
globalRouter.get(routes.search, search);

export default globalRouter;
