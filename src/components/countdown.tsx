import { getMessageToken } from 'firebase';
import { Modal, Row, Col, Button } from 'react-bootstrap';

import { CountdownRenderProps, default as ReactCountdown } from 'react-countdown';
import { isNotificationsActive } from 'utils';
import Store from 'utils/store';

interface ICountdown {
  bikeName: string;
  startTime: number;
  setShow: Function;
  show: boolean;
}

const Countdown = ({ show, startTime, setShow, bikeName }: ICountdown) => {
  const renderer = (props: CountdownRenderProps) => {
    const { days, hours, minutes, seconds, completed } = props;

    if (completed) {
      // set localStorage variable for blinker
      Store.setWithTTL('blinker', { bikeName: bikeName, show: true });

      // Render a completed state
      return (
        <h3>
          {bikeName.toUpperCase()} è pronta a correre{' '}
          <span role="img" aria-label="Rocket emoji">
            🚀
          </span>
        </h3>
      );
    } else {
      Store.setWithTTL('blinker', { bikeName: bikeName, show: false });

      // Render a countdown
      return (
        <Row as="h2" className="mx-4 mt-3">
          <Col>
            {days}
            <br />
            <h4 className="mt-2">{days === 1 ? 'Giorno' : 'Giorni'}</h4>
          </Col>
          <Col>
            {hours} <br />
            <h4 className="mt-2">{hours === 1 ? 'Ora' : 'Ore'}</h4>
          </Col>
          <Col>
            {minutes} <br />
            <h4 className="mt-2">{minutes === 1 ? 'Minuto' : 'Minuti'}</h4>
          </Col>
          <Col>
            {seconds} <br />
            <h4 className="mt-2">Secondi</h4>
          </Col>
        </Row>
      );
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} className="modal-warning pt-5 mt-5">
      <Modal.Header className="text-dark">
        <Modal.Title as="h3" className="text-center">
          La diretta live inizierà tra:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <ReactCountdown
          date={startTime}
          precision={3}
          intervalDelay={0}
          onComplete={() => setTimeout(() => setShow(false), 1800)}
          renderer={renderer}
        />
        {isNotificationsActive() ? null : (
          <Button className="mt-4" variant="danger" onClick={() => getMessageToken()}>
            Ricevi una notifica alla partenza
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Countdown;
