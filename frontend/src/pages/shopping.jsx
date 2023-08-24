// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// useEffect(() => {
//   async function fetchProductImages(product) {
//       try {
//           const response = await axios.get(product.product_image, { responseType: 'arraybuffer' });
//           const blob = new Blob([response.data], { type: 'image/png' });
//           const imageSrc = URL.createObjectURL(blob);
//           product.cachedImage = imageSrc;
//           return product;
//       } catch (error) {
//           console.error("There was an error fetching the image:", error);
//       }
//   }

//   products.forEach(fetchProductImages);

// }, [products]);


// export const Product = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { product_name: name, product_price: price, product_description: description } =  props.data;
//   return (
//     <div className="product">
//       <img src={`/images/product17.png`} alt={`Image of ${name}`}/>
//       <div className="description">
//         <p>
//           <b>{name}</b><span>{description}</span>
//         </p>
//         <p> ${price}</p>
//       </div>
//     </div>
//   );
// };


// const Shopping = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error("There was an error fetching the products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="shopping-container">
//       {products.map(product => <Product key={product.product_id} data={product} />)}
//     </div>
//   );
// };

// export default Shopping;
