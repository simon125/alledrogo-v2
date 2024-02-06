import React, { useState } from "react";
import "./Product.scss";
import { addProductToCart } from "../../../redux/ProductsSlice";
import { useDispatch } from "react-redux";

export const Product = ({ product }) => {
  const [amount, setAmount] = useState("0");
  const dispatch = useDispatch();

  const handleAddProductClick = () => {
    dispatch(addProductToCart({ ...product, amount }));
    setAmount("0");
  };

  return (
    <div className="product-container">
      <p>
        Name: <b>{product.title}</b>
      </p>
      <p>
        Price: <b>{product.price}</b>
      </p>
      <div className="thumbnail-container">
        <img className="thumbnail" src={product.thumbnail} alt="" />
      </div>
      <div className="footer">
        <input
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          type="number"
          name=""
          id=""
        />
        <button onClick={handleAddProductClick}>Dodaj do koszyka</button>
      </div>
    </div>
  );
};
