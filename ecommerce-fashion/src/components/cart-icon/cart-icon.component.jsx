import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const quantityArray = cartItems.map((item) => item.quantity);
  const totalQuantity = quantityArray.reduce(
    (previous, current) => previous + current,
    0
  );

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
