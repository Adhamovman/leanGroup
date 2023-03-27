import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../global.scss";
import "./product.scss";
import product1 from "../images/product11.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";

function Product() {
  return (
    <>
      <section id="product">
        <div className="container">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Ламинатные тубы">
              <div className="imgRow d-grid justify-content-between mt-4">
                {" "}
                <img className="w-100" src={product1} alt="" />{" "}
                <img className="w-100" src={product2} alt="" />{" "}
                <img className="w-100" src={product3} alt="" />{" "}
                <img className="w-100" src={product4} alt="" />{" "}
              </div>
            </Tab>
            <Tab eventKey="profile" title="Экструзионные тубы">
              <div className="imgRow d-grid justify-content-between mt-4">
                {" "}
                <img className="w-100" src={product1} alt="" />{" "}
                <img className="w-100" src={product5} alt="" />{" "}
                <img className="w-100" src={product4} alt="" />{" "}
                <img className="w-100" src={product2} alt="" />{" "}
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Другая упаковка">
              <div className="imgRow d-grid justify-content-between mt-4">
                {" "}
                <img className="w-100" src={product5} alt="" />{" "}
                <img className="w-100" src={product2} alt="" />{" "}
                <img className="w-100" src={product4} alt="" />{" "}
                <img className="w-100" src={product3} alt="" />{" "}
              </div>
            </Tab>
          </Tabs>
          <div className="more-btn text-center mt-5">
            {" "}
            <a href="#" className="btn-secendary">Перейти в каталог</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
