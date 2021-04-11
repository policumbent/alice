import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap';

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
            <CardHeader>
              <h2 className="text-center">Logout</h2>
            </CardHeader>
            <CardBody className="text-center">
              <p>Logout in corso...</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </article>
  );
};

export default Logout;
