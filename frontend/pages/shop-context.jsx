import { useState, useEffect } from "react";
import { fetchData } from "./productapi";

const ProductProvider = () => {
  const [ setProductData] = useState(null);

  useEffect(() => {
    // Fetch data using fetchData and set it to productData
    const data = fetchData();
    setProductData(data);
    
    if (!setProductData) {
      return console.log(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

};

export default ProductProvider;
