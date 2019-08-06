import express from "express";
import logger from "morgan";
import Helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRouter from "../routers/userRouter";
import globalRouter from "../routers/globalRouter";
import videoRouter from "../routers/videoRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Helmet());
app.use(logger("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;
