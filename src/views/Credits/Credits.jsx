import React from 'react'
import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap'

import { FaCode, FaHeart, FaGithub } from 'react-icons/fa'

const Credits = () => {
  return (
    <article className="animated fadeIn">
      <Row>
        <Col className="mx-auto" xs="12" md="7" xl="4">
          <Card>
            <CardHeader>
              <h2 className="text-center">
                <FaCode /> with <FaHeart /> by
              </h2>
            </CardHeader>
            <CardBody className="text-center">
              <h4>
                Gabriele Belluardo{' '}
                <a
                  className="text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gabelluardo"
                >
                  <FaGithub />
                </a>
              </h4>
              <h4>
                Stefano Loscalzo{' '}
                <a
                  className="text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/stelosca96"
                >
                  <FaGithub />
                </a>
              </h4>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </article>
  )
}

export default Credits
