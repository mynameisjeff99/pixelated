import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = props => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Pixelated</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#not-implemented">Instruction</Nav.Link>
            <Nav.Link href="/#not-implemented">Community</Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#not-implemented">Learn More</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Collapse className="justify-content-right">
              <Navbar.Text>
                Signed in as: {props.user? props.user.local.username: "Not logged In Yet"}
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
