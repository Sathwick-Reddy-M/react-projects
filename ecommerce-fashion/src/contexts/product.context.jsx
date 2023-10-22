import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [currentProducts, setProducts] = useState(SHOP_DATA);
  const value = { currentProducts, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
