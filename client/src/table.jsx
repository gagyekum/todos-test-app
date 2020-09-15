import React from 'react';
import { Table } from 'reactstrap';

const TodoTable = ({ todos }) => {
    const todoList =
        todos &&
        todos.map((todo) => {
            return (
                <tr key={todo.id}>
                    <th>{todo.id}</th>
                    <th>{todo.title}</th>
                    <th>{todo.completed ? 'Done' : 'Undone'}</th>
                </tr>
            );
        });

    const noData = <small>No todos found</small>;

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>{todos && todos.length > 0 ? todoList : noData}</tbody>
        </Table>
    );
};

export default TodoTable;
