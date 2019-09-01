import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  getJoin,
  postJoin,
  getLogIn,
  postLogIn,
  logOut,
  githubLogin,
  postGithubLogIn
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

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.logIn }),
  postGithubLogIn
);

export default globalRouter;
