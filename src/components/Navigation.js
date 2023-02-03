import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Image from "next/image";

const Navigation = ({ navbar }) => {

  const logo = navbar.fields.logo;
  const menu = navbar.fields.menu;

  return (
    <Navbar bg='dark' data-sb-object-id={navbar.sys.id}>
    <Container className="justify-content-end ">
      <Navbar.Brand as={Link} href="/" className="nav-brand col-9 col-md-6 ">
        <Image data-sb-field-path='logo'
          className="brand-title"
          src={"https:" + logo.fields.image.fields.file.url}
          alt={logo.fields.altTest}
          width={100}
          height={100}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-links">
        <Nav className="ms-auto align-items-end" data-sb-field-path='menu'>
              {
                menu.length ? menu.map((link, index) => (
                  <Nav.Link data-sb-field-path={`.[${index}]`} className="text-white text-xl" key={link.sys.id} href={link.fields.url}>{link.fields.title}</Nav.Link>
                )) : null
              }
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default Navigation;
