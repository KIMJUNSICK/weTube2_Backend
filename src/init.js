require("dotenv").config();
import app from "./app";
import "../db";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Listening on: ✅  http://localhost:${PORT}`);

app.listen(PORT, handleListening);
