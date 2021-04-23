import { Col, Row, Card } from 'react-bootstrap';

import { FaCode, FaHeart, FaGithub } from 'react-icons/fa';

const Credits = () => {
  return (
    <article className="animated fadeIn">
      <Row>
        <Col className="mx-auto" xs="12" md="7" xl="4">
          <Card>
            <Card.Header>
              <h2 className="text-center">
                <FaCode /> with <FaHeart /> by
              </h2>
            </Card.Header>
            <Card.Body className="text-center">
              <h4>
                Gabriele Belluardo{' '}
                <a
                  className="text-center github-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gabelluardo">
                  <FaGithub />
                </a>
              </h4>
              <h4>
                Stefano Loscalzo{' '}
                <a
                  className="text-center github-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/stelosca96">
                  <FaGithub />
                </a>
              </h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </article>
  );
};

export default Credits;
