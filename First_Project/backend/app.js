import express from "express";
import morgan from "morgan";
import databaseConfig from "./Database.js";
import router from "./Routes/Router.js";
import Cors from "cors";

const app = express();

databaseConfig();
app.use(Cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.use("*", (req, res) => {
  res.status(404).send({ error: "Not Found" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
