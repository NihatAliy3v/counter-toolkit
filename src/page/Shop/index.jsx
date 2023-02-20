import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { addToCart } from "../../redux/cartSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.data.data);
  console.log(productData);
  const [data, setData] = useState(["asf", "asfa", "asfaf"]);

  useEffect(() => {
    dispatch(addToCart(data));
  }, []);
  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          {[].map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              details={product.details}
              price={product.price}
              productImage={product.productImage}
              onClick={() => dispatch(addToCart())}
            />
          ))}
          <button onClick={() => dispatch(addToCart(data))}>Click</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
