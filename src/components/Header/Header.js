import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import './header.css'

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='nav_title'>
        <Container>
          <Navbar.Brand href="/">RRC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/calculator">Calculator</Nav.Link>
              <Nav.Link href="#pricing">Craft Duration</Nav.Link>
              <NavDropdown title="" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Something else</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Fuck Shit
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header