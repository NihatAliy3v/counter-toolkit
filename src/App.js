import { useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./page/Home";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Shop from "./page/Shop";
function App() {
  const theme = useSelector((state) => state.themeData.theme);
  return (
    <div className={`App ${theme ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
