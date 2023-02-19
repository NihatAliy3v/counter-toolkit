import { useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./page/Home";
import "./app.scss"
function App() {
  const theme = useSelector((state) => state.themeData.theme);
  return (
    <div className={`App ${theme ? "dark" : ""}`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
