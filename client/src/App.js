import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import TodoTable from './table';
import BasePage from './BasePage';
import { getAllTodos } from './todoservice';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [apiTodos, setApiTodos] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchTodos = () => {
        setLoading(true);
        getAllTodos()
            .then((todos) => {
                setApiTodos(todos);
            })
            .then(() => setLoading(false))
            .catch(() => {
                setLoading(false);
                setApiTodos([]);
            });
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <BasePage>
            <div>
                <Link to='/create'>
                    <Button>Add Todo</Button>
                </Link>
                {loading && <Spinner color='dark' className="position-absolute" />}
            </div>

            <TodoTable todos={apiTodos} />
        </BasePage>
    );
}

export default App;
