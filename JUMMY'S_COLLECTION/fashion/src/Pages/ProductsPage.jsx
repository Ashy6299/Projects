import React, { useState } from "react";
import { products } from "../components/Products";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductsPage() {
  const [seletctedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (product) => {
    const exist = seletctedProducts.find((c) => c.id === product.id);

    if (!exist) {
      setTotalPrice(totalPrice + product.price);
      setSelectedProducts([...seletctedProducts, product]);
    }
  };
  return (
    <div>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          {products.map((c, i) => (
            <div key={i} className='col-lg-4 mb-3'>
              <Card>
                <CardMedia sx={{ height: 180 }} image={c.img} />
                <CardContent>
                  <Typography fontWeight={700}>{c.name}</Typography>
                  <Typography>${c.price}.00</Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handleClick(c)}>Purchase</Button>
                </CardActions>
              </Card>
            </div>
          ))}
          <div className='col-lg-4'>
            <Typography variant='h6' gutterBottom>
              Total Price
            </Typography>
            <Typography variant='h3'>${totalPrice}.00</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
