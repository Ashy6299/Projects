import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='/'>Centers</Navbar.Brand>
          <Nav className='me-auto'></Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
