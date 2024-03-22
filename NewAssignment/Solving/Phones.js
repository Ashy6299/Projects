import Android from "./NewPhone.js";

const newPhone = new Android();
export const addproduct = (req, res) => {
  newPhone.name = req.body.name;
  newPhone.color = req.body.color;
  newPhone.model = req.body.model;
  newPhone.price = req.body.price;
  newPhone.AddProducts(req.body);
  res.send("new phone added");
};

export const viewphones = (req, res) => {
  const viewphones = newPhone.viewProducts();
  res.send(viewphones);
};
