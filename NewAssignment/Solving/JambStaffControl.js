import JambStaff from "./JambStaff.js";

const addJambStaff = new JambStaff();

export const createJambStaff = (req, res) => {
  const { name, idCard, department } = req.body;

  addJambStaff.newJambStaff(name, idCard, department);
  res.send("Jamb Staff Created Successfully");
};

export const viewAllJambStaff = (req, res) => {
  const viewjambstaff = addJambStaff.viewJambStaff();
  res.send(viewjambstaff);
};
