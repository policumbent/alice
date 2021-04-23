import { useState } from 'react';
import { Col, Row, Card, Button, Form } from 'react-bootstrap';
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
            <Card.Header>
              <h2 className="text-center">Login</h2>
            </Card.Header>
            <Form onSubmit={handleSubmit} encType="multipart/form-data" className="form-horizontal">
              <Card.Body className="text-center">
                <Form.Group>
                  <Form.Control
                    className="text-center"
                    type="username"
                    placeholder="Username"
                    onChange={(e: any) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    className="text-center"
                    type="password"
                    placeholder="Password"
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Card.Body>

              <Card.Footer>
                <Button type="submit" variant="primary">
                  <FaSignInAlt />
                  &ensp;Sign in
                </Button>
              </Card.Footer>
            </Form>
          </Card>
        </Col>
      </Row>
    </article>
  );
};

export default Login;
