import express from "express";
import logger from "morgan";
import Helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import userRouter from "../routers/userRouter";
import globalRouter from "../routers/globalRouter";
import videoRouter from "../routers/videoRouter";
import routes from "../routes";
import { localMiddleware } from "../middlewares";
import "../passport";

require("dotenv").config();

const app = express();

const CookieStore = MongoStore(session);

app.use(Helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000 * 30, // 24h x 30d = 1 month
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
