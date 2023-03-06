import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

const Header = () => {
  const { cartItems } = useContext(Context);
  return (
    <header>
      <h2>
        <Link to="/Photos">Pic Some</Link>
      </h2>
      <Link to="/Cart">
        {cartItems.length > 0 ? (
          <i className="ri-shopping-cart-fill ri-fw ri-2x" />
        ) : (
          <i className="ri-shopping-cart-line ri-fw ri-2x" />
        )}
      </Link>
    </header>
  );
};

export default Header;
