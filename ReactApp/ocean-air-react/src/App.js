import "./CSS/App.css";
import "../src/CSS/Home.css";
import Navbar from "../src/component/Navbar/Navbar";
import Home from "./component/Home";
import Aboutus from "./component/Aboutus";
import Contact from "./component/Contact";
import PropertyCards from "./component/PropertyCards";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <PropertyCards />
      {/* <Aboutus /> */}
      <Contact />
    </div>
  );
}

export default App;
