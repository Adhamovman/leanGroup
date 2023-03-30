import React, { Component } from "react";
import "./ourCommand.scss";
import Card from "react-bootstrap/Card";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";
import person5 from "../images/person5.png";

export default class OurCommand extends Component {
  render() {
    return (
      <>
        <section id="ourCommand">
          <div className="container">
            <h2 className="main-h text-center mb-5">
              Наша <span className="text-gold">команда</span>{" "}
            </h2>
            <div className="colleagueRow d-grid">
              <Card>
                <Card.Img variant="top" src={person1} />
                <Card.Body className="mt-3">
                  <Card.Title className="card-h">Войнич Дарья</Card.Title>
                  <Card.Text className="card-p">
                    Заместитель директора по продажам
                  </Card.Text>
                  <Card.Title className="card-h">
                    +375 (17) 270-53-77 (317)
                  </Card.Title>
                  <Card.Title className="card-h">
                    +375 (17) 270-53-77 (317)
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={person2} />
                <Card.Body className="mt-3">
                  <Card.Title className="card-h">Мисько Екатерина</Card.Title>
                  <Card.Text className="card-p">
                    Начальник отдела сопровождения
                  </Card.Text>
                  <Card.Title className="card-h">
                    +375 (17) 270-53-77 (115)
                  </Card.Title>
                  <Card.Title className="card-h">
                    k.melnichenko@leangroup.by
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={person3} />
                <Card.Body className="mt-3">
                  <Card.Title className="card-h">
                    Дмитроченко Дмитрий
                  </Card.Title>
                  <Card.Text className="card-p">
                    Заместитель директора по продажам
                  </Card.Text>
                  <Card.Title className="card-h">
                    +375 (17) 270-53-77 (317)
                  </Card.Title>
                  <Card.Title className="card-h">
                    dmitrochenko@leangroup.by
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={person4} />
                <Card.Body className="mt-3">
                  <Card.Title className="card-h">Антух Евгений</Card.Title>
                  <Card.Text className="card-p">
                    Начальник отдела снабжения
                  </Card.Text>
                  <Card.Title className="card-h">
                    +375 (17) 270-53-77 (317)
                  </Card.Title>
                  <Card.Title className="card-h">
                    j.antuh@leangroup.by
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={person5} />
                <Card.Body className="mt-3">
                  <Card.Title className="card-h">Мисник Елена</Card.Title>
                  <Card.Text className="card-p">
                    Специалист по работе с клиентами
                  </Card.Text>
                  <Card.Title className="card-h">
                    +375 (17) 270-53-77 (317)
                  </Card.Title>
                  <Card.Title className="card-h">
                    e.misnik@leangroup.by
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="text-center mt-4">
              {" "}
              <button className="btn-secendary">Наша команда</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}


