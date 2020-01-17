import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const Extra = ({ time, gear, distance, showExtra, weather }) => {
  return !showExtra ? null : (
    <Row>
      <Col xs="12" sm="6" lg="4">
        <Card className="text-white bg-primary">
          <CardBody className="pb-2">
            <div>Time [s]</div>
            <div className="text-value text-center">{time}</div>
          </CardBody>
        </Card>
      </Col>

      <Col xs="12" sm="6" lg="2">
        <Card className="text-white bg-dark">
          <CardBody className="pb-2">
            <div>Gear</div>
            <div className="text-value text-center">{gear}</div>
          </CardBody>
        </Card>
      </Col>

      <Col xs="12" sm="6" lg="2">
        <Card className="text-dark bg-secondary">
          <CardBody className="pb-2">
            <div>Distance [m]</div>
            <div className="text-value text-center">{distance}</div>
          </CardBody>
        </Card>
      </Col>

      <Col xs="12" sm="6" lg="4">
        <Card className="text-white bg-purple">
          <CardBody className="pb-2">
            <Row>
              <Col xs="4" sm="4" lg="4">
                <div className="text-center">Temp [°C]</div>
                <div className="text-value text-center">
                  {weather.temperature}
                </div>
              </Col>
              <Col xs="4" sm="4" lg="4">
                <div className="text-center">Altitude [m]</div>
                <div className="text-value text-center">
                  {weather.altitude}
                </div>
              </Col>
              <Col xs="4" sm="4" lg="4">
                <div className="text-center">Press [hPa]</div>
                <div className="text-value text-center">
                  {weather.pressure}
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Extra
