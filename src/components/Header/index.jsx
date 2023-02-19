import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeMode } from "../../redux/themeSlice";

const Header = () => {
  const counter = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.themeData.theme);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(themeMode())}>
        {theme ? "light" : "dark"}
      </button>

      <p>Counter header:{counter}</p>
    </div>
  );
};

export default Header;
