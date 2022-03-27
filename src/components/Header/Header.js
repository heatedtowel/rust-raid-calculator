import { Nav, Navbar, Container } from 'react-bootstrap'
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
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header