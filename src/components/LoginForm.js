import React, { Component, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

export default class extends Component {
    render() {
        return (
            <Container>
                <h1>Login</h1>
                <Form className="LoginForm">
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}