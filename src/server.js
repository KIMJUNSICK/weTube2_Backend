require("dotenv").config();
import express from "express";

const PORT = process.env.PORT || 4000;

const app = express();

const handleListening = () =>
  console.log(`Listening on: ✅  http://localhost:${PORT}`);

app.get("/", (req, res) => {
  res.send("junsik");
});

app.listen(PORT, handleListening);
