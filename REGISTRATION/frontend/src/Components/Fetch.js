// import React, { useState, useEffect } from "react";
// //import { httpService } from "../httpService";
// import { TextField, Typography } from "@mui/material";
// import { Button, Table } from "react-bootstrap";
// //import { LoadingButton } from "@mui/lab";
// import Axios from "axios";

// export default function Fetched() {
//   const [productData, setProductData] = useState(null);

//   const [product, setProduct] = useState({});
//   const getProducts = async () => {
//     const { data } = await Axios.get("http://localhost:8000/viewregistered");
//     if (data) setProductData(data);
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const handleChange = (e) =>
//     setProduct({ ...product, [e.target.name]: e.target.value });

//   const createProduct = async (e) => {
//     e.preventDefault();

//     const { data, error } = await Axios.post("store/createproduct", product);

//     if (data) {
//       alert(data);
//       getProducts();
//     }
//   };
//   return (
//     <div>
//       <div className='mt-5 container'>
//         {productData && (
//           <div>
//             <div className='mb-4'>
//               <Typography>
//                 Number of products: {productData.numberOfProducts}
//               </Typography>
//             </div>
//             <div>
//               <div className='row'>
//                 <div className='col-lg-8'>
//                   <Table>
//                     <thead>
//                       <tr>
//                         <th>S/N</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Date Created</th>
//                         <th>Time Created</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {productData.products.map((product, index) => (
//                         <tr key={index}>
//                           <td>{index + 1}</td>
//                           <td>{product.name}</td>
//                           <td>{product.price}</td>
//                           <td>{product.quantity}</td>
//                           <td>
//                             {new Date(product.dateCreated).toDateString()}
//                           </td>
//                           <td>
//                             {new Date(product.dateCreated).toTimeString()}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </Table>
//                 </div>
//                 <div className='col-lg-4'>
//                   <h4>Create new product</h4>
//                   <form onSubmit={createProduct}>
//                     <div className='mt-3 mb-3'>
//                       <TextField
//                         label='Product Name'
//                         fullWidth
//                         name='name'
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className='mb-3'>
//                       <TextField
//                         label='Price'
//                         fullWidth
//                         type='number'
//                         name='price'
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className='mb-3'>
//                       <TextField
//                         label='Quantity'
//                         fullWidth
//                         type='number'
//                         name='quantity'
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <Button type='submit' variant='contained' fullWidth>
//                       Create new product
//                     </Button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
