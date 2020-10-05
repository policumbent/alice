import React from 'react'
import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap'

const Logout = () => {
  return (
    <article>
      <Row>
        <Col className="mx-auto" xs="7" xl="4">
          <Card>
            <CardHeader>
              <h2 className="text-center">Logout</h2>
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
