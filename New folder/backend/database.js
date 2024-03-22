import mongoose from "mongoose";
const databaselink = "mongodb://127.0.0.1:27017/ASHDEV";

const databaseConfiguration = () =>
  mongoose
    .connect(databaselink, {
      connectTimeoutMS: 60000,
      serverSelectionTimeoutMS: 60000,
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => {
      console.log(new Error(e).message);
      console.log("Cannot connect to the database at this time");
    });

export default databaseConfiguration;
