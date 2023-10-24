import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const quantityArray = cartItems.map((item) => item.quantity);
  const totalQuantity = quantityArray.reduce(
    (previous, current) => previous + current,
    0
  );

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
}

export default CartIcon;
