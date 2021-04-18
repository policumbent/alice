import { useState } from 'react';
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

import { default as api } from 'api';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    const loginSuccess = await api.login({ username, password });

    if (loginSuccess) {
      setTimeout(() => history.push('/'), 1000);
    }
    // @todo Handle failed login
    else {
    }
  };

  return (
    <article className="animated fadeIn">
      <Row>
        <Col className="mx-auto" xs="12" md="7" xl="4">
          <Card>
            <CardHeader>
              <h2 className="text-center">Login</h2>
            </CardHeader>
            <Form encType="multipart/form-data" className="form-horizontal">
              <CardBody className="text-center">
                <FormGroup row>
                  <Col sm="12">
                    <Label for="username">Username</Label>
                  </Col>
                  <Col sm="12">
                    <Input
                      className="text-center"
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm="12">
                    <Label for="password">Password</Label>
                  </Col>
                  <Col sm="12">
                    <Input
                      className="text-center"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
            </Form>

            <CardFooter>
              <Button
                onClick={handleSubmit}
                type="submit"
                data-dismiss="alert"
                size="sl"
                color="success">
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
