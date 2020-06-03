import React, { Component, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';



function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className="NavBar">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">CodersX</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Books</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Transactions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Cart</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;