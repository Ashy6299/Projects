import express from "express";
import morgan from "morgan";
import databaseconfig from "./database.js";
import router from "./routes/router.js";
import cors from "cors";
import fs from "fs/promises"

const app = express();

databaseconfig();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.use("*", (req, res) => {
  res.status(404).send("Route not found");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
