import express from "express";
import logger from "morgan";
import Helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRouter from "../routers/userRouter";
import globalRouter from "../routers/globalRouter";
import videoRouter from "../routers/videoRouter";
import routes from "../routes";
import { localMiddleware } from "../middlewares";

const app = express();

app.use(Helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
