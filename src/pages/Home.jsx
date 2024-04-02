import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/ourmenu">OurMenu</Link>
        </li>
        <li>
          <Link to="/yourorders">YourOrders</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
        <li>
          <Link to="/shoppingcart">ShoppingCart</Link>
        </li>
        <li>
          <Link to="/myprofile">MyProfile</Link>
        </li>
        <li>
          <Link to="/checkout">CheCkout</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/youraddress">YourAddress</Link>
        </li>
        <li>
          <Link to="/updateprofile">UpdateProfile</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
