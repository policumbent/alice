import { Col, Row, Card } from 'react-bootstrap';

import { FaCode, FaHeart, FaGithub } from 'react-icons/fa';

const Credits = () => {
  return (
    <article className="animated fadeIn">
      <Row>
        <Col className="mx-auto mt-5 pt-5" xs="12" md="7" xl="4">
          <Card>
            <Card.Header>
              <h3 className="text-center pt-1">
                <FaCode /> with <FaHeart /> by
              </h3>
            </Card.Header>
            <Card.Body className="text-center">
              <h5 className="mt-2">
                Gabriele Belluardo{' '}
                <a
                  className="text-center github-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gabelluardo">
                  <FaGithub />
                </a>
              </h5>
              <h5>
                Stefano Loscalzo{' '}
                <a
                  className="text-center github-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/stelosca96">
                  <FaGithub />
                </a>
              </h5>
              <br />
              <p className="mt-2">
                All source code can be found at{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/policumbent/alice">
                  policumbent/alice
                </a>{' '}
                on team's github. <br /> Contributions of any kind are welcome!
              </p>
            </Card.Body>
          </Card>
          <div className="text-center mt-4 text-muted">
            <p>
              {process.env.REACT_APP_NAME?.toLocaleUpperCase()} v{process.env.REACT_APP_VERSION}
            </p>
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default Credits;
