import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Certificate from "./certificate";
import Product from "./product";
import OurCommand from "./ourCommand";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Certificate />
        <Product />
        <OurCommand />
      </main>
    </div>
  );
}

export default App;
