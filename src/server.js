require("dotenv").config();
import express from "express";
import logger from "morgan";
import Helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 4000;

const app = express();

const handleListening = () =>
  console.log(`Listening on: ✅  http://localhost:${PORT}`);

const handleHome = (req, res) => {
  res.send("Home");
};
const handleProfile = (req, res) => res.send("Profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Helmet());
app.use(logger("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
