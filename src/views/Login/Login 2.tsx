import { useState, FormEvent } from 'react';
import { Col, Row, Card, Button, Form, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

import { default as api } from '../../api';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [show, setShow] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginSuccess = await api.login({ username, password });

    if (loginSuccess) {
      history.push('/');
    } else {
      setShow(true);
    }
  };

  return (
    <article className="animated fadeIn">
      <Row>
        <Col className="mx-auto mt-5 pt-5" xs="12" md="7" xl="4">
          <Card>
            <Card.Header>
              <h2 className="text-center">Login</h2>
            </Card.Header>
            <Form onSubmit={handleSubmit} className="form-horizontal">
              <Card.Body className="text-center">
                <Form.Label>Username</Form.Label>
                <Form.Group>
                  <Form.Control
                    className="text-center"
                    type="username"
                    placeholder="Username"
                    isInvalid={show}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="text-center"
                    type="password"
                    placeholder="Password"
                    isInvalid={show}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Alert dismissible show={show} onClose={() => setShow(false)} variant="danger">
                  Username or password are wrong! Check them and retry
                </Alert>
              </Card.Body>
              <Card.Footer>
                <Button type="submit" variant="success">
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
