import React, { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from 'reactstrap';
import TodoTable from './table';
import { getAllTodos, createTodo } from './todoservice';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [apiTodos, setApiTodos] = useState([])

    const fetchTodos = () => {
      getAllTodos().then((todos) => {
          console.log('todos => ', todos);
          setApiTodos(todos)
      });
    };

    useEffect(() => {
      fetchTodos();
    }, [])

    return (
        <div>
            <Navbar color='light' expand='md'>
                <NavbarBrand href='/'>Todo Example</NavbarBrand>
                <NavbarToggler onClick={() => {}} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink href='/list/'>Todo List</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <TodoTable todos={apiTodos} />
        </div>
    );
}

export default App;
