import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    Button,
    Container
} from 'reactstrap';
import TodoTable from './table';
import { getAllTodos, createTodo } from './todoservice';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [apiTodos, setApiTodos] = useState([])

    const fetchTodos = () => {
      getAllTodos().then((todos) => {
          setApiTodos(todos)
      });
    };

    useEffect(() => {
      fetchTodos();
    }, [])

    return (
        <Container>
            <Navbar color='light' expand='md'>
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

            <Link to="/create"><Button>Add Todo</Button></Link>
            <TodoTable todos={apiTodos} />
        </Container>
    );
}

export default App;
