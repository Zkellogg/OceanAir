import "./CSS/App.css";
import "../src/CSS/Home.css";
import Navbar from "../src/component/Navbar/Navbar";
import Home from "./component/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
