import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts, selectProducts } from "./productsSlice"

export function Products() {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className="main-container">
    <div className="container">
      <ul className="product-list">
        {products.map((item) => (
          <li
            style={{ backgroundImage: `url(${item.img.normal})` }}
            className="product-list-item"
          >
            <div className="item-title">{item.title}</div>
            <div className="item-price">{item.price}</div>
            <button className="cart-btn">Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
