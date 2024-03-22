class Android {
  Inventory = [];
  constructor(name, model, color, price) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.model = model;
  }
  AddProducts() {
    return this.Inventory.push({
      name: this.name,
      price: this.price,
      color: this.color,
      model: this.model,
    });
  }
  viewProducts() {
    console.log(this.Inventory);
    return this.Inventory;
  }
}

export default Android;
