import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} from 'reactstrap';

const BasePage = ({ children, isOpen }) => {
    return (
        <Container>
            <Navbar color='light' expand='md' className='mb-3'>
                <NavbarBrand href='/'>Todo Example</NavbarBrand>
                <NavbarToggler onClick={() => {}} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink to='/'>Todo List</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            {children}
        </Container>
    );
};

export default BasePage;
