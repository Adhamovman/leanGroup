import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../global.scss";
import "./navbar.scss";
import logo from "../images/header-logo.png";
function OffcanvasExample() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          className="navbar"
          sticky="top"
          key={expand}
          bg="white"
          expand={expand}
        >
          <Container className="justify-content-between">
            <Navbar.Brand href="#">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Adhamov's Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 nav-text">
                  <NavDropdown
                    className="side-border nav-text"
                    title="Продукция"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="nav-text" href="#action3">
                      Ламинатные тубы
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-text" href="#action4">
                      Экструзионные тубы
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-text" href="#action5">
                      Другая упаковка
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    className="side-border nav-text"
                    href="#certificate"
                  >
                    Сертификаты
                  </Nav.Link>
                  <Nav.Link className="side-border nav-text" href="#ourCommand">
                    Наша команда
                  </Nav.Link>
                  <Nav.Link className="side-border nav-text" href="#about">
                    О нас
                  </Nav.Link>
                  <Nav.Link className="side-border nav-text" href="#news">
                    Новости
                  </Nav.Link>
                  <Nav.Link className="nav-text" href="#more">
                    Контакты
                  </Nav.Link>
                  <div className="align-items-center d-lg-none position-absolute lang-menu">
                    <a
                      href="#"
                      className="laguage active-language side-separator"
                    >
                      RU
                    </a>
                    <a href="#" className="ps-2 language">
                      ENG
                    </a>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="align-items-center d-none d-lg-flex">
              <a href="#" className="laguage active-language side-separator">
                RU
              </a>
              <a href="#" className="ps-2 language">
                ENG
              </a>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
