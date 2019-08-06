require("dotenv").config();
import app from "./src/app";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Listening on: ✅  http://localhost:${PORT}`);

app.listen(PORT, handleListening);
