import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation () {
    return (
        <Navbar expand="md" data-bs-theme="dark" id="navigation-bar">
        <Container className="nav-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/mission">Mission</Nav.Link>
              <Nav.Link href="/what-we-do">What We Do</Nav.Link>
              <Nav.Link href="/clinic-schedule">Clinic Schedule</Nav.Link>
              <NavDropdown title="Resources" id="resources-dropdown">
                <NavDropdown.Item href="/resources/clinic-trip-checklist">Clinic Trip Checklist</NavDropdown.Item>
                <NavDropdown.Item href="/resources/emergency-contacts">Emergency Contacts</NavDropdown.Item>
                <NavDropdown.Item href="/resources/videos-and-photos">Videos and Photos</NavDropdown.Item>
                <NavDropdown.Item href="/resources/links">Links</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/pilot-information">Pilot Information</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation;