import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

function Shop() {
  const { currentProducts } = useContext(ProductContext);

  return (
    <div className="products-container">
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}

export default Shop;
