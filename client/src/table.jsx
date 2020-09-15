import React from 'react';
import { Table } from 'reactstrap';

const TodoTable = ({todos}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => {
                    return (
                        <tr key={todo.id}>
                            <th>{todo.id}</th>
                            <th>{todo.title}</th>
                            <th>{todo.completed ? 'Done' : 'Undone'}</th>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default TodoTable;
