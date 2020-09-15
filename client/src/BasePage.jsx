import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const BasePage = ({ children, isOpen }) => {
    return (
        <Container>
            <Navbar color='light' expand='md' className="mb-3">
                <NavbarBrand href='/'>Todo Example</NavbarBrand>
                <NavbarToggler onClick={() => {}} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <Link><NavLink href='/'>Todo List</NavLink></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            {children}
        </Container>
    )
}

export default BasePage;