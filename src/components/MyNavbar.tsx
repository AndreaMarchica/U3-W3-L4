import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Houston, we have a problem</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Partners</Nav.Link>
          <Nav.Link href="#pricing">Satellites</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
