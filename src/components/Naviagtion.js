import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Image from "next/image";

const Navigation = ({ navbar }) => {

  const logo = navbar.fields.logo;
  const menu = navbar.fields.menu;


  return (
    <Navbar bg='dark'>
    <Container className="justify-content-end ">
      <Navbar.Brand as={Link} href="/" className="nav-brand col-9 col-md-6 ">
        <Image
          className="brand-title"
          src={"https:" + logo.fields.image.fields.file.url}
          alt={logo.fields.altTest}
          width={30}
          height={30}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-links">
        <Nav className="ms-auto align-items-end">
              {
                menu.length ? menu.map((link) => (
                  <Nav.Link key={link.sys.id} href={link.fields.url}>{link.fields.title}</Nav.Link>
                )) : null
              }
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default Navigation;
