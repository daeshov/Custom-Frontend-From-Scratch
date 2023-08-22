import React from 'react';

export const product = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { id, name, price, image } =  props.data;
  return (
    <div className="product">
      <img src={frontend/src/assets/product}/>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
    </div>
  );
};


const Shopping = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'path_to_image1.jpg' },
    { id: 2, name: 'Product 2', price: 15, image: 'path_to_image2.jpg' },
    // ... Add as many products as you want
  ];

  return (
    <div className="shopping-container">
      {products.map(product => <Product key={product.id} data={product} />)}
    </div>
  );
};

export default Shopping;
