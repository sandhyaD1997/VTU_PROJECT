import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import{LinkContainer} from 'react-router-bootstrap';

const Header = () =>{
    return(
        <header> 
            <Navbar className="navbar-style" expand="lg">
                <Container>
              <LinkContainer to='/'>
              <Navbar.Brand href="/">
            <Image className='logo-img-style'
             src='images/logo.jpg' alt="VTU" roundedCircle />
             <h6 className="logo-text-style">Visvervaya Technological University, Belagavi</h6>
            </Navbar.Brand></LinkContainer>

            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
    <LinkContainer to ='/'>
    <Nav.Link href="#">Home</Nav.Link>
    </LinkContainer>
     <LinkContainer to='/about'>
     <Nav.Link href="#link">About us</Nav.Link>
     </LinkContainer>
     
      <NavDropdown title="Academic" id="basic-nav-dropdown">
        <LinkContainer to='/Admission'>
        <NavDropdown.Item href="#link">Admission</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to ='/Circulars'>
        <NavDropdown.Item href="#link">Circulars </NavDropdown.Item></LinkContainer>
       <LinkContainer to ='/certificate issused'>
       <NavDropdown.Item href="#">Certificate Issused</NavDropdown.Item>
       </LinkContainer>
        
      </NavDropdown>
      <NavDropdown title="Examinations" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
        <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
        <LinkContainer to='/result/loginpage'>
        <NavDropdown.Item href="#">Results</NavDropdown.Item></LinkContainer>
       
      </NavDropdown>
      <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
        <NavDropdown.Item href="#">Computer Science Engg</NavDropdown.Item>
        <NavDropdown.Item href="#">Electronics & Communication Engg</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Staff Login" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
       
      </NavDropdown>
    </Nav>


    </Navbar.Collapse>
            </Container>
            
                </Navbar> 
                </header>
    )
}
export default Header