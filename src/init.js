import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import "../db";
import "../models/Video";
import "../models/Comment";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Listening on: ✅  http://localhost:${PORT}`);

app.listen(PORT, handleListening);
