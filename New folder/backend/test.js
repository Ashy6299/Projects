import express from "express";
import morgan from "morgan";

const test = express();
test.use(morgan("dev"));
test.use(express.json());

const staff = [
  {
    name: "bola",
    class: "primary 5",
    level: "12",
    idNo: "220t",
  },
  {
    name: "tola",
    class: "primary 3",
    level: "10",
    idNo: "221u",
  },
  {
    name: "kola",
    class: "primary 6",
    level: "11",
    idNo: "222e",
  },
];

test.get("/", (req, res) => {
  res.send("hello from test server");
});

test.get("/staffList", (req, res) => {
  res.send(staff);
});

test.post("/addStaff", (req, res) => {
  staff.push(req.body);
  res.send("staff added");
});

test.get("/staffList/:idNo", (req, res) => {
  const staffs = staff.find(
    (a) => a.idNo.toUpperCase() === req.params.idNo.toUpperCase()
  );
  if (staffs) res.send(staffs);
  else res.send("no staff found");
});
test.use("*", (req, res) => {
  res.status(404).send("The route you're looking for does not exist");
});

test.listen(5000, () => {
  console.log("server up and running at 5000");
});
