import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row, Card } from 'react-bootstrap';

import { default as api } from '../../api';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    api.removeJwt();

    setTimeout(() => history.push('/'), 1000);
  }, [history]);

  return (
    <article>
      <Row>
        <Col className="mx-auto" xs="12" md="7" xl="4">
          <Card>
            <Card.Header>
              <h2 className="text-center">Logout</h2>
            </Card.Header>
            <Card.Body className="text-center">
              <p>Logout in corso...</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </article>
  );
};

export default Logout;
