import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts, selectProducts } from "./productsSlice"

export function Products() {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const installments = (a,b) => a / b

  return (
    <div className="main-container">
      <div className="filter-sidebar">
        {/* {products.map((item) => (
          <div>
            {item.availableSizes}
          </div>
        ))} */}
      </div>
    <div className="container">
      <ul className="product-list">
        {products.map((item) => (
          
          <li
            style={{ backgroundImage: `url(${item.img.normal})` }}
            className="product-list-item"
          >
            <div className="free-shipping">{item.isFreeShipping}Free Shipping</div>
            <div className="item-title">{item.title}</div>
            <div className="item-price">
            <div><span className="dollar-sign">{item.currencyFormat}</span>{item.price}</div>
              <div className="installments">
                <span>Or {item.installments} x</span>
                <span className="installments-price">
                  {/* {installments({item.installments}, {item.price})} */}
                </span>
              </div>
            </div>
            <button className="cart-btn">Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
