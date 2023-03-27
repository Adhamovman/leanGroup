import React, { Component } from "react";
import "../global.scss";
import "./about.scss";
import aboutImg from "../images/about-video.png";
import aboutPlay from "../images/about-play.png";

export default class About extends Component {
  render() {
    return (
      <>
        <section id="about">
          <div className="container">
            <h2 className="main-h text-center mb-5">
              О компании <span className="text-gold"> LEANGROUP </span>
            </h2>
            <div className="about d-grid">
              <div className="about-img">
                <img className="w-100 h-100 object-fit-cover" src={aboutImg} alt="" />
                <button className="play-btn">
                  <img src={aboutPlay} alt="" />
                </button>
              </div>
              <div className="about-desc d-flex align-items-center">
                <p className="main-p m-0">
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб. Имея две
                  технологии – для производства ламинатных и экструзионных туб,
                  мы предлагаем вам широкий спектр возможностей. Большим
                  преимуществом является собственный печатный цех в ламинате и
                  in-line печать в экструзии с возможностью различных
                  дополнительных опций декора. Особое внимание уделяется работе
                  с поставщиками для контроля и поддержания качества
                  производимой нами продукции. С января 2018 года компания стала
                  членом Европейской Ассоциации производителей туб (ETMA), что
                  подтверждает сильную позицию бренда и на рынке Европы.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
