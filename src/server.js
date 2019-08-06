require("dotenv").config();
import express from "express";

const PORT = process.env.PORT || 4000;

const app = express();

const handleListening = () =>
  console.log(`Listening on: ✅  http://localhost:${PORT}`);

const handleHome = (req, res) => {
  console.log(req);
  res.send("Home");
};
const handleProfile = (req, res) => res.send("Profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
