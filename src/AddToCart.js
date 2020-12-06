import React from "react";
import { Route, Link } from "react-router-dom";
import store from "./store.js";
import "./App.css";

class AddToCart extends React.Component {
  render() {
    const { items } = store;
    const item = items.find((p) => p.id === this.props.match.params.itemId);
    const cartItems = item;
    console.log(cartItems);
    const realPrice =
      parseFloat(item.price) + parseFloat(item.price) * 0.06 + 4.99;
    return (
      <div className="cart-page">
        <ul>
          <li className="lindsay">
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Lindsay's Closet
            </Link>
          </li>
          <Link className="checkout" to="AddToCart">
            <li className="tabs">Checkout</li>
          </Link>
        </ul>
        <h1>You are in the cart</h1>
        <div className="cart-item">
          <h2>{item.name}</h2>
          <p>${item.price} </p>
          <p>{item.description}</p>
          <img src={item.url1}></img>
        </div>
        <div className="checkout-cart">
          <h3>Checkout</h3>
          <h4>Shipping is $4.99</h4>
          <h4>
            Please send ${realPrice} to the paypal link below. This accounts for
            shipping and tax. I will notify you when I shipped your order:)
          </h4>
          <a
            target="_blank"
            href="https://www.paypal.com/paypalme/lindsayscloset"
          >
            Pay here
          </a>
        </div>
        <form>
          <input name="name" placeholder="Enter your name..."></input>
          <input
            name="address"
            type="address"
            placeholder="Enter your address..."
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddToCart;
