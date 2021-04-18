import { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class Page503 extends Component {
  render() {
    return (
      <div className="flex-row flex-col align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">503</h1>
                <h4 className="pt-3">Houston, abbiamo un problema!</h4>
                <p className="text-muted float-left">
                  Probabilmente il server non è collegato, chiedete a Losca.
                </p>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page503;
