import { Card, CardBody, Col, Row } from 'reactstrap';

const Extra = ({ time, gear, distance, altitude, showExtra, weather }) => {
  return !showExtra ? null : (
    <>
      <Col xs="12" sm="6" lg="2">
        <Card className="text-white bg-pink">
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
      <Col xs="12" sm="6" lg="2">
        <Card className="text-dark bg-yellow">
          <CardBody className="pb-2">
            <div>Altitude [m]</div>
            <div className="text-value text-center">{altitude}</div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" sm="6" lg="2">
        <Card className="text-white bg-purple">
          <CardBody className="pb-2">
            <Row>
              <Col xs="6" sm="6" lg="6">
                <div className="text-center">Temp [°C]</div>
                <div className="text-value text-center">{weather.temperature}</div>
              </Col>
              <Col xs="6" sm="6" lg="6">
                <div className="text-center">Press [hPa]</div>
                <div className="text-value text-center">{weather.pressure}</div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>{' '}
      <Col xs="12" sm="6" lg="2">
        <Card className="text-white bg-behance">
          <CardBody className="pb-2">
            <Row>
              <Col xs="6" sm="6" lg="6">
                <div className="text-center">Wind [m/s]</div>
                <div className="text-value text-center">{weather.windSpeed}</div>
              </Col>
              <Col xs="6" sm="6" lg="6">
                <div className="text-center">Direction [°]</div>
                <div className="text-value text-center">{weather.windDirection}</div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Extra;
