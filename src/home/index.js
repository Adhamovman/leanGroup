import React, { Component } from "react";
import "./home.scss";
import "../global.scss";
import vkIcon from "../images/vk.png";
import facebookIcon from "../images/fb.png";
import inIcon from "../images/linkedin.png";
export default class Home extends Component {
  render() {
    return (
      <>
        <section id="home">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="home-main">
              <p className="little-p">LEANGROUP - тубы и этикетки</p>
              <h2 className="main-h">Ламинатные тубы</h2>
              <p className="main-p max-width">
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button className="btn-main">Каталог</button>
            </div>
            <div className="socials d-flex flex-column gap-3">
              <a href="#">
                {" "}
                <img src={vkIcon} alt="vk" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src={facebookIcon} alt="facebook" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src={inIcon} alt="linkedIn" />{" "}
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}
