import "./CSS/App.css";
// import "../src/CSS/Home.css";
import Navbar from "../src/component/Navbar/Navbar";
import Home from "./component/Home";
import Aboutus from "./component/Aboutus";
import Contact from "./component/Contact";
import PropertyCards from "./component/PropertyCards";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="appDiv">
      <Navbar />
      <Home />
      <PropertyCards />
      {/* <Aboutus /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
