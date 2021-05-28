import { useState } from "react";
import CartItem from "./CartItem";
import CartModal from "../Modals/CartModal";
import {
  EmptyCart,
  Container,
  CartItems,
  TotalPrice,
  BottomRow,
  ClearCart,
  CartImage,
} from "./styled";
import headerImage from "../../resources/images/headerImage.jpg";

const Cart = ({
  cart,
  removeFromCart,
  removeAll,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [showModal, setShowModal] = useState(false);
  const cartItems = cart.map((item) => (
    <CartItem
      key={item.id}
      product={item}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  ));

  return (
    <div>
      <CartImage src={headerImage} alt="headerCartImage" />
      <hr />
      {!cart || !cart.length ? (
        <EmptyCart>No item in the cart</EmptyCart>
      ) : (
        <Container>
          <CartItems>{cartItems}</CartItems>
          <BottomRow>
            <TotalPrice>
              Total Price: $
              {cart
                ? cart
                    .reduce((total, item) => total + item.price * item.count, 0)
                    .toFixed(2)
                : 0}
            </TotalPrice>
            <ClearCart disabled={showModal} onClick={() => setShowModal(true)}>
              Delete All
            </ClearCart>
          </BottomRow>
          <CartModal
            showModal={showModal}
            deleteAll={removeAll}
            noChange={() => setShowModal()}
          />
        </Container>
      )}
    </div>
  );
};

export default Cart;
