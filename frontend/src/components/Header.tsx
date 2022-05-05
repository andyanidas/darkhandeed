import "../style/Header.css";
import "../style/style.css";
import mainLogo from "../images/icons/main_logo.png";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home">
          <a href="/" id="logo">
            <img src={mainLogo} alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Brand href="/">Дархан Дээд Сургууль</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/news">МЭДЭЭ</Nav.Link>
          <Nav.Link href="#link">БАГШ НАР</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Бидний тухай</Nav.Link>
          <Nav.Link href="#link">Элсэлт</Nav.Link>
          <Nav.Link href="#link">Эрдэм шинжилгээ</Nav.Link>
          <Nav.Link href="#link">Төгсөгчид</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
