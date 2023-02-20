import React from "react";

const Card = (productImage, name, price, details, onClick) => {
  return (
    <div className="card">
      <div className="img">
        <img src={productImage} alt="" />
      </div>
      <div className="content">
        <h3 className="title">{name}</h3>
        <p className="details">{details}</p>
        <span className="price">{price}</span>
      </div>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default Card;
