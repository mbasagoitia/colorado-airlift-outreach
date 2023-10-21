import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation () {
    return (
        <Navbar expand="md" data-bs-theme="dark">
        <Container className="nav-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#mission">Mission</Nav.Link>
              <Nav.Link href="#what-we-do">What We Do</Nav.Link>
              <Nav.Link href="#clinic-schedule">Clinic Schedule</Nav.Link>
              <NavDropdown title="Resources" id="resources-dropdown">
                <NavDropdown.Item href="#action/3.1">Clinic Trip Checklist</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Emergency Contacts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Videos and Photos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Links</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pilot-info">Pilot Info</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation;