import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts, selectProducts } from "./productsSlice"
import { selectCart, addItem, deleteItem } from "../cart/cartSlice.js"



export function Products() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const cart = useSelector(selectCart)
  const [cartHidden, setCartHidden] = useState(true)
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  function handleClick() {
    setCartHidden(false)
    if (!cartHidden) {
      setCartHidden(true)
    }
  }

  return (
    <div className="main-container">
      <div className="filter-sidebar">
        <h4 className="sizes-heading">Sizes:</h4>
        <div className="buttons-top-row">
          <button className="size-buttons">XS</button>
          <button className="size-buttons">S</button>
          <button className="size-buttons">M</button>
          <button className="size-buttons">ML</button>
        </div>
        <button className="size-buttons">XL</button>
        <button className="size-buttons">XXL</button>
        <button className="size-buttons">XXL</button>
        <div className="star-review-container">
          <p className="star-review">
            Leave a star on Github if this repository was useful :)
          </p>
          <div className="star-btn">
            <a className="star-widget" href="#">
              <i class="far fa-star"></i> Star
            </a>
            <a className="likes-widget" href="#">
              1,513
            </a>
          </div>
        </div>
      </div>

      <div className="products-list-container">
        <div className="products-list-heading">
          <span className="products-count">
            {products.length} Product(s) found.
          </span>
          <div className="selectBy">
            Order by{" "}
            <select className="selectDown" id="cars" form="carform">
              <option value="select">Select</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>
            </select>
          </div>
        </div>
        <ul className="product-list">
          {products.map((item) => (
            <li
              onClick={() => dispatch(addItem(item))}
              style={{ backgroundImage: `url(${item.img.normal})` }}
              className="product-list-item"
            >
              <div>
                {item.isFreeShipping ? (
                  <div className="free-shipping">Free Shipping</div>
                ) : null}
              </div>
              <div className="item-title">{item.title}</div>
              <div className="item-price">
                <div>
                  <span className="dollar-sign">{item.currencyFormat}</span>
                  <span className="first-price">
                    {Math.floor(item.price.toFixed(2))}
                  </span>
                  {item.price
                    .toFixed(2)
                    .toString()
                    .slice(item.price.toFixed(2).toString().indexOf("."))}
                </div>
                <div className="installments">
                  <span>Or {item.installments} x </span>
                  <span className="installments-price">
                    ${(item.price / item.installments).toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="cart-btn">Add to cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={!cartHidden ? "show-cart" : "hidden-cart"}>
        <div className="float-cart"
              onClick={handleClick}>
          <button>
            {/* // onClick={(<div className="hidden-cart"></div>) ? (<div className="show-cart"></div>) : null }> */}
            <i class="far fa-shopping-cart fa-2x"></i>
          </button>
        </div>
        <div className="cart-content">
          <div className="cart-content-header">Cart</div>
          <div className="cart-items-container">
            <div className="cart-items-div">
              {cart.map((item) => {
                return (
                <div className="cart-items">
                    
                      <img className="item-image" src={item.img.thumb}></img>
                  <div className="cart-item-delete"
                        key={item.id}
                        onClick={() => dispatch(deleteItem(item.id))}></div>
                  <div className="item-description">
                    <p>{item.title}</p>
                    <p className="item-style">{item.style}</p>
                  </div>
                  <div className="cart-item-price">
                    <p>{item.currencyFormat}{Math.floor(item.price.toFixed(2))}{item.price
                    .toFixed(2)
                    .toString()
                    .slice(item.price.toFixed(2).toString().indexOf("."))}
                    </p>
                    <div>
                      <button className="item-quantity-btn disabled">-</button>
                      <button className="item-quantity-btn">+</button>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
            <p className="cart-empty">
              Add some products in the cart<br></br>
              <br></br>:)
            </p>
          </div>
          <div className="cart-total-container">
            <div className="subtotal">SUBTOTAL</div>
            <div className="subtotal-price">
              <p>$ 0.00</p>
            </div>
            <div className="checkout-btn">CHECKOUT</div>
          </div>
        </div>
      </div>
    </div>
  )
}
