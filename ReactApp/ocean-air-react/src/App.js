import "./CSS/App.css";
import "../src/CSS/Home.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Navbar from "../src/component/Navbar/Navbar";
function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
