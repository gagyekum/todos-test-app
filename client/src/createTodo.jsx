import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createTodo } from './todoservice';
import BasePage from './BasePage';

const CreateTodo = () => {
    const [formData, setFormData] = useState({});
    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: formData.title,
            completed: formData.completed === 'on' ? true : false,
        };
        createTodo(data).then((resp) => {
            if (resp) {
                history.push('/');
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const data = {
            [name]: value,
        };
        setFormData((prevState) => ({ ...prevState, ...data }));
    };

    return (
        <BasePage>
            <Form onSubmit={onFormSubmit}>
                <FormGroup>
                    <Label for='title'>Title</Label>
                    <Input
                        onChange={handleInputChange}
                        type='text'
                        name='title'
                        id='title'
                        placeholder='Enter title'
                    />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input
                            onChange={handleInputChange}
                            name='completed'
                            type='checkbox'
                        />{' '}
                        {''}
                        Completed
                    </Label>
                </FormGroup>
                <Button className='mt-3'>Submit</Button>
            </Form>
        </BasePage>
    );
};

export default CreateTodo;
