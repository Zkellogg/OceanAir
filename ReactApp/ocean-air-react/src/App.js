import "./CSS/App.css";
import "../src/CSS/Home.css";
import Navbar from "../src/component/Navbar/Navbar";
import Home from "./component/Home";
import Aboutus from "./component/Aboutus";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutus />
    </div>
  );
}

export default App;
