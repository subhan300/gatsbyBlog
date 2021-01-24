import React from 'react'
import {Navbar,NavDropdown,Form,Button,Nav,FormControl} from "react-bootstrap"
function nav() {
    return (
        <div>
            <Navbar style={{backgroundColor:"black",color:"red"}}  expand="lg">
  <Navbar.Brand href="#home" style={{color:"red",fontSize:"30px",fontWeight:"bold"}}>FOOD TARKA </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse style={{display:"flex",justifyContent:"flex-end"}} id="basic-navbar-nav">
    {/* <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}
  
     <div style={{color:"red",fontSize:"28px",fontWeight:"bold",
    }}>Website For Food LOvers</div>
     
 
   
  </Navbar.Collapse>
</Navbar>
            
        </div>
    )
}

export default nav
