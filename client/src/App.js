import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
} from 'reactstrap';
import TodoTable from './table';
import BasePage from './BasePage';
import { getAllTodos } from './todoservice';

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
        <BasePage>
            <Link to="/create"><Button>Add Todo</Button></Link>
            <TodoTable todos={apiTodos} />
        </BasePage>
    );
}

export default App;
