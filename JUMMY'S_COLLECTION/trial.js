const items = [{ price: 29 }, { price: 34 }, { price: 35 }];

let totalPrice = 0;

// for (let i = 0; i < items.length; i++) {
//   totalPrice += items[i].price;
// }

items.forEach((item) => (totalPrice += item.price));
console.log({ totalPrice });
