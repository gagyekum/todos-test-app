import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CreateTodo = () => {
    const [formData, setFormData] = useState({})

    const onFormSubmit = (e)  => {
        console.log('f',formData)
        // submit formData to server
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        const data = {
            [name]: value
        }
        console.log('data =>',data)
        setFormData(prevState => ({ ...prevState, ...data}))
    }

    return (
        <Container>
            <Form onSubmit={onFormSubmit} >
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input onChange={handleInputChange} type="text" name="title" id="title" placeholder="Enter title" />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input onChange={handleInputChange} name="completed" type="checkbox" /> {''}
                        Completed
                    </Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default CreateTodo;