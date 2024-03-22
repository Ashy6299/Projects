import express from "express";
import morgan from "morgan";
//import router from "./route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
//app.use(router);
class JambStaff {
  JambStaffList = [];
  constructor() {}

  newJambStaff(staffData) {
    this.JambStaffList.push(staffData);
  }
  viewJambStaff() {
    console.log(this.JambStaffList);
    return this.JambStaffList;
  }
}

const addstaff = new JambStaff();

app.post("/addstaff", (req, res) => {
  const { name, department, idCard } = req.body;
  addstaff.newJambStaff(name, idCard, department);

  res.send("staff created");
});
app.get("/viewstaff", (req, res) => {
  const viewStaff = addstaff.viewJambStaff();
  res.send(viewStaff);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
