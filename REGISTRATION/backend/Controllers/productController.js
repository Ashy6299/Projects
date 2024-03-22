import productModel from "../Models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    req.body.date = new Date();
    await productModel.create(req.body);
    res.send("Product created");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};
export const viewAllProduct = async (req, res) => {
  const products = await productModel.find();

  res.send({ NumberOfItems: products.length, AllProducts: products });
};

export const updateProduct = async (req, res) => {
  await productModel.findByIdAndUpdate(req.params.id, { ...req.body });
  res.send("product updated");
};

export const quantitySize = async (req, res) => {
  try {
    const query = { quantity: { $gte: 30 } };

    const productCount = await productModel.countDocuments(query);

    res.send({ TotalNumber: productCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
  // try {
  //   if (req.body.quantity <= 30) {
  //     const productCount = await productModel.countDocuments();
  //     return res.send(productCount);
  //   }
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Server error" });
  // }
};
