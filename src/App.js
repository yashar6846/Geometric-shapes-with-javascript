import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const _LOCAL_STORAGE_SHOPPING_CART = "_LOCAL_STORAGE_SHOPPING_CART";

function App() {
  const [cart, setCart] = useState([]);

  // always -> componentDidMount
  // dependencies -> componetDidUpdate
  useEffect(() => {
    if (cart === undefined) {
      const lsCart = window.localStorage.getItem(_LOCAL_STORAGE_SHOPPING_CART);
      if (lsCart) {
        setCart(JSON.parse(lsCart));
      }
    } else {
      window.localStorage.setItem(
        _LOCAL_STORAGE_SHOPPING_CART,
        JSON.stringify(cart)
      );
    }

    // effect
    // if Cart is undefined:
    // 1. check local storage(LS), if there is any information for cart
    // 2. load cart data from LS
    // 3. save loaded data to cart(state)
    //else
    // 1. save cart to LS
  }, [cart]);
  const addToCart = (product) => {
    let isNew = true;

    const newCart = cart
      ? cart.map((item) => {
          if (item.id === product.id) {
            item.count++;
            isNew = false;
          }
          return item;
        })
      : [];
    if (isNew) {
      newCart.push({ ...product, count: 1 });
    }
    setCart(newCart);
  };

  const decreaseQuantity = (product) => {
    const quantityCart = cart.map((item) => {
      if (item.id === product.id) {
        item.count--;
      }
      return item;
    });
    setCart(quantityCart.filter((item) => item.count > 0));
  };
  const increaseQuantity = (product) => {
    const quantityCart = cart.map((item) => {
      if (item.id === product.id) {
        item.count++;
      }
      return item;
    });
    setCart(quantityCart);
  };

  const removeFromCart = (product) => {
    const cartRemove = cart.filter((item) => item.id !== product.id);
    setCart(cartRemove);
  };

  const removeAll = () => {
    setCart([]);
  };

  return (
    <Router>
      <Menu
        cartCount={
          cart
            ? cart.reduce((total, item) => {
                return total + item.count;
              }, 0)
            : 0
        }
      />
      <Switch>
        <Route path="/" exact>
          <Products addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            removeAll={removeAll}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
