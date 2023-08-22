import { useContext } from "react";
import ProductProvider from './shop-context';


export const Cartpage = () => {
  
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
    </div>
  );
}
  
  export const Items = () => {
    const contextData = useContext(ProductProvider);

    if (contextData === null) {
      return <h2>No items in cart !</h2>;
    }

    const { productName, price, productImage } = useContext.data;
    
    return (
      <div>
        <img src={productImage}/>
        <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        </div>
      </div>
    );
  };
  