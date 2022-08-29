import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Pixelated</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#not-implemented">Rules</Nav.Link>
            <Nav.Link href="/#not-implemented">Community</Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sign-up">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/log-in">Log In</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#not-implemented">Learn More</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
