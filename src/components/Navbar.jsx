import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react"; 
import { CiMenuFries } from "react-icons/ci";
import { MdRestaurantMenu } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

function Navbar({ cartCount }) { // Accept cartCount as a prop
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [state, setState] = useState(false);

  const handleMenuToggle = () => {
    setState(!state);
  };

  const closeMenu = () => {
    setState(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="logo">
            <h2>My Portfolio</h2>
          </div>
          <div className={`nav-link ${state ? 'open' : ""}`}>
            <Link to="/" onClick={closeMenu}>HOME</Link>
            <Link to="/product" onClick={closeMenu}>PRODUCT</Link>
            <Link to="/service" onClick={closeMenu}>SERVICE</Link>
            <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
          </div>
          <div className="butt">
            {isAuthenticated ? (
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            ) : (
              <button onClick={loginWithRedirect}>Log In</button>
            )}
          </div>
          <div className="menu">
            <li onClick={handleMenuToggle}>{!state ? <CiMenuFries /> : <MdRestaurantMenu />}</li>
          </div>
          <div className="card">
            <Link to="/shopping-cart">
              <FiShoppingCart style={{ fontSize: "25px" }} />
            </Link>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
      {/* Second Navbar */}
      {state && (
        <div className="navbar2">
          <div className="nav2">
            <div className={`nav-link2 ${state ? 'open' : ""}`}>
              <Link to="/" onClick={closeMenu}>HOME</Link>
              <Link to="/product" onClick={closeMenu}>PRODUCT</Link>
              <Link to="/service" onClick={closeMenu}>SERVICE</Link>
              <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
            </div>
            <div className="butt2">
              {isAuthenticated ? (
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>
              ) : (
                <button onClick={loginWithRedirect}>Log In</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
