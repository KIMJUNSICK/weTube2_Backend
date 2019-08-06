require("dotenv").config();
import express from "express";

const PORT = process.env.PORT || 4000;

const app = express();

const handleListening = () =>
  console.log(`Listening on: ✅  http://localhost:${PORT}`);

const handleHome = (req, res) => {
  res.send("Home");
};
const handleProfile = (req, res) => res.send("Profile");

const betweenHome = (req, res, next) => {
  console.log("Vtween");
  next();
};

app.get("/", handleHome);

app.use(betweenHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
