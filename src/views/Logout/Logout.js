import React from 'react'
import {Col, Row, Card, CardBody, CardHeader, CardFooter, Button, Form, FormGroup, Label, Input} from 'reactstrap'

import { FaCode, FaHeart, FaGithub } from 'react-icons/fa'
import {AppSwitch} from "@coreui/react";

const Logout = () => {
  return (
    <article>
      <Row>
        <Col className="mx-auto" xs="4" xl="4">
          <Card>
            <CardHeader>
              <h2 className="text-center">
                Logout
              </h2>
            </CardHeader>
            <CardBody className="text-center">
              <p>Logout in corso.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </article>
  )
}

export default Logout
