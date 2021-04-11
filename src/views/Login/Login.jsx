import React, { useState } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

import { default as api } from '../../api';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handleClick = () => {
    api.login(username, password);

    setTimeout(() => history.push('/'), 1000);
  };

  return (
    <article className="animated fadeIn">
      <Row>
        <Col className="mx-auto" xs="12" md="7" xl="4">
          <Card>
            <CardHeader>
              <h2 className="text-center">Login</h2>
            </CardHeader>
            <CardBody className="text-center">
              <Form action="" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row></FormGroup>
                <FormGroup row>
                  <Col sm="12">
                    <Label>Username</Label>
                  </Col>
                  <Col sm="12">
                    <Input
                      className="text-center"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={handleUsername}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="12">
                    <Label>Password</Label>
                  </Col>
                  <Col sm="12">
                    <Input
                      className="text-center"
                      type="password"
                      pattern="*"
                      placeholder="Password"
                      onChange={handlePassword}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button
                type="submit"
                data-dismiss="alert"
                size="sl"
                color="success"
                onClick={handleClick}>
                <FaSignInAlt />
                &ensp;Sign in
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </article>
  );
};

export default Login;
