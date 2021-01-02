import React, { useState } from 'react'
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
} from 'reactstrap'

import { FaSignInAlt } from 'react-icons/fa'
import dataService from '../../api'

const Login = () => {
  const [username] = useState('')
  const [password] = useState('')
  const handleText = () => console.log(username)
  return (
    <article>
      <Row>
        <Col className="mx-auto" xs="7" xl="4">
          <Card>
            <CardHeader>
              <h2 className="text-center">Login</h2>
            </CardHeader>
            <CardBody className="text-center">
              <Form
                action=""
                encType="multipart/form-data"
                className="form-horizontal"
              >
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
                      onChange={handleText}
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
                      // onChange={handleText}
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
                onClick={() => dataService.login(username, password)}
              >
                <FaSignInAlt />
                &ensp;Sign in
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </article>
  )
}

export default Login
