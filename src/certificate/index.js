import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import certificate1 from "../images/certificate1.png";
import certificate2 from "../images/certificate2.png";
import certificate3 from "../images/certificate3.png";
import certificate4 from "../images/certificate4.png";
import certificate5 from "../images/certificate5.png";
import prev from "../images/prev.png";
import next from "../images/next.png";
import "./certificate.scss"
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  navText: [`<img src=${prev} alt="prev"/>`, `<img src=${next} alt="next"/>`],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

class Certificate extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="main-h mb-5 text-center">
          Качество продукции подтверждают{" "}
          <span className="text-gold">сертификаты</span>{" "}
        </h2>{" "}
        <OwlCarousel className="slider-items owl-carousel " {...options}>
          <div className="item">
            <img src={certificate1} alt="" />
          </div>
          <div className="item">
            <img src={certificate2} alt="" />
          </div>
          <div className="item">
            <img src={certificate3} alt="" />
          </div>
          <div className="item">
            <img src={certificate4} alt="" />
          </div>
          <div className="item">
            <img src={certificate5} alt="" />
          </div>
          <div className="item">
            <img src={certificate1} alt="" />
          </div>
          <div className="item">
            <img src={certificate2} alt="" />
          </div>
          <div className="item">
            <img src={certificate3} alt="" />
          </div>
          <div className="item">
            <img src={certificate4} alt="" />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Certificate;
