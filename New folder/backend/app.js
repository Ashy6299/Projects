import express from "express";
import morgan from "morgan";
import router from "./router.js";
import databaseConfiguration from "./database.js";
import Cors from "cors";

const app = express();

databaseConfiguration();

app.use(morgan("dev"));
app.use(express.json());
app.use(Cors());

app.use(router);

//verify the account

app.use("*", (req, res) => {
  res.status(404).send("Route not found");
});
app.listen(4000, () => {
  console.log("my app is listening on port 4000");
});
