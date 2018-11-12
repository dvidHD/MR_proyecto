import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';



class NavBar extends Component {
    state = {  }
    render() { 
        return (  
            
            <Navbar  color="info" light expand="md" >
            <NavbarBrand href="/">MadRobot Admin</NavbarBrand>
            <NavbarToggler />
            <Collapse  navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink >LINK1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/"> INSTRUCTORES  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar color="info" light expand="md" >
                  <DropdownToggle nav caret>
                    OPCIONES
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      OPCION 1
                    </DropdownItem>
                    <DropdownItem>
                      OPCION 2
                    </DropdownItem>
                    <DropdownItem color="info" light expand="md"  divider />
                    <DropdownItem >
                      HOME
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
      
        );
    }
}
 
export default NavBar;