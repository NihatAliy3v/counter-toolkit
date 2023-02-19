import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { amountIn, decrement, increment } from "../../redux/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(amountIn(5))}>amount</button>
    </div>
  );
};

export default Home;
