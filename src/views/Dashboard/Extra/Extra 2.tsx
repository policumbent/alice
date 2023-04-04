import { Card, Col, Row } from 'react-bootstrap';
import { IExtra, IWCard } from './types';

export const ExtraCard = ({ name, unit, value, bgColor }: IExtra) => {
  const textColor = bgColor === 'secondary' || bgColor === 'yellow' ? 'text-dark' : 'text-white';
  const strUnit = unit ? ` [${unit}]` : null;

  return (
    <Col xs="12" sm="6" lg="2">
      <Card className={`${textColor} bg-${bgColor}`}>
        <Card.Body className="pb-2">
          <div>
            {name}
            {strUnit}
          </div>
          <div className="text-value text-center">{value || 0}</div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export const WeatherCard = ({ name, unit, value, bgColor }: IWCard) => {
  const strUnit1 = unit ? ` [${unit[0]}]` : null;
  const strUnit2 = unit ? ` [${unit[1]}]` : null;

  return (
    <Col xs="12" sm="6" lg="2">
      <Card className={`text-white bg-${bgColor}`}>
        <Card.Body className="pb-2">
          <Row>
            <Col xs="6" sm="6" lg="6">
              <div className="text-center">
                {name[0]}
                {strUnit1}
              </div>
              <div className="text-value text-center">{value[0] || 0}</div>
            </Col>
            <Col xs="6" sm="6" lg="6">
              <div className="text-center">
                {name[1]}
                {strUnit2}
              </div>
              <div className="text-value text-center">{value[1] || 0}</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};
