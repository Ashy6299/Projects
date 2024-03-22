import mongoose from "mongoose";
const databaselink = "mongodb://127.0.0.1:27017/USER_ACCOUNTS";

const databaseConfig = () =>
  mongoose
    .connect(databaselink, {
      connectTimeoutMS: 60000,
      serverSelectionTimeoutMS: 60000,
    })
    .then(() => console.log("Connected to the Database Successfully"))
    .catch((e) => {
      console.log(new Error(e).message);
      console.log("cannot connect to the database at this time");
    });

export default databaseConfig;
