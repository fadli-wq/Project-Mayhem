import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#"><b>Project <span style={{ color: 'orange' }}>Mayhem</span></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Popular</Nav.Link>
            <NavDropdown title="Genre" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Psychology</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Shonen</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Seinen</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Thriller</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action10">Mystery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Netorare
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Manga List
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-orange"><b>Search</b></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent
