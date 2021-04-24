import { useState, useEffect, useCallback } from 'react';
import Countdown from 'react-countdown';
import { Modal, ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { FiArrowRight, FiArrowLeft, FiArrowUp } from 'react-icons/fi';

import {
  MainChart,
  CadenceCard,
  PowerCard,
  SpeedCard,
  HRCard,
  numCardElement,
  numElement,
} from '../../components/Graph';
import { createData } from '../../components/Graph/types';
import { ExtraCard } from '../../components/Extra';

import { default as api } from 'api';
import { parseDate, useIsMounted, usePolling } from 'components/utils';
import { IData, IHistory, IWeather } from '../../../models/types';

const defaultConfig = { bikeName: 'taurusx', trackName: 'bm' };

const Accelerations = () => {
  const isMounted = useIsMounted();

  const [data, setData] = useState<IData>();
  const [history, setHistory] = useState<IHistory>();
  const [weather, setWeather] = useState<IWeather>();

  const [config, setConfig] = useState(defaultConfig);
  const [startTime, setStartTime] = useState(0);
  const [modalOpen, setModalOpen] = useState(startTime > Date.now());

  // eslint-disable-next-line
  const [_, setPolling] = usePolling(() => fetchData(), 1000);

  const updateHistory = useCallback((history) => {
    const chart = history.map((e: any) => createData(e));
    const miniChart = chart.slice(numCardElement, chart.length - numCardElement);

    setHistory({ chart, miniChart });
  }, []);

  const updateData = useCallback(
    (d) => {
      if (isMounted.current) {
        setData(d);
      }
    },
    [isMounted]
  );

  const updateConfig = useCallback(
    async (data) => {
      if (isMounted.current && data) {
        const start = parseDate(data.date, data.startTime);

        setConfig(data);
        setStartTime(start);
        setModalOpen(start > Date.now());

        // NOTE: Placeholder, will be removed
        const h = await api.getHistory(data.bikeName, numElement);
        const d = await api.getData(data.bikeName);

        updateHistory(h);
        updateData(d);
      }
    },
    // eslint-disable-next-line
    [isMounted]
  );

  const updateWeather = useCallback(
    (data) => {
      if (isMounted.current) {
        setWeather(data);
      }
    },
    [isMounted]
  );

  usePolling(async () => fetchData(), 1000);

  // api call after component is mounted
  useEffect(() => {
    fetchInit();
    // eslint-disable-next-line
  }, []);

  const fetchInit = async () => {
    const config = await api.getConfig();
    await updateConfig(config);
    await fetchData();

    setPolling(true);
  };

  const fetchData = async () => {
    const data = await api.getData(config.bikeName);
    const weatherCall = await api.getWeatherSingleStation(3);
    updateData(data);

    // NOTE: weather is private for not logged users
    if (weatherCall) {
      updateWeather(weatherCall);
    }
  };

  if (!data || !history) {
    return null;
  }

  return (
    <article className="animated fadeIn">
      {/* Countdown per la live */}
      <Modal isOpen={modalOpen} className={'modal-info'}>
        <Modal.Header className="text-dark bg-yellow">La diretta live inizierà tra:</Modal.Header>
        <Modal.Body>
          <Countdown date={startTime} onComplete={() => setModalOpen(false)}>
            <p>The bike is starting.</p>
          </Countdown>
        </Modal.Body>
      </Modal>

      {/* Row dei mini chart */}
      <Row>
        <Col xs="12" sm="4" lg="4">
          <Card className="text-white bg-info">
            <Card.Body className="pb-0">
              <ButtonGroup id="card1" className="float-right">
                <FiArrowLeft size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{data.power === -1 ? 'Reserved' : data.power}</div>
              <div>X [m/s²]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <PowerCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="4" lg="4">
          <Card className="text-white bg-success">
            <Card.Body className="pb-0">
              <ButtonGroup id="card2" className="float-right">
                <FiArrowRight size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{data.cadence}</div>
              <div>Y [m/s²]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <CadenceCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="4" lg="4">
          <Card className="text-white bg-warning">
            <Card.Body className="pb-0">
              <ButtonGroup id="card3" className="float-right">
                <FiArrowUp size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{Math.round(data.speed * 100) / 100}</div>
              <div>Z [m/s²]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <SpeedCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Row del main chart e mappa */}
      <Row>
        <Col xs="12" sm="12">
          <Card>
            <Card.Body>
              <div className="central-chart">
                <MainChart data={data} history={history.chart} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Row degli extra */}
      <Row>
        <ExtraCard name="X max(1s)" unit="m/s²" bgColor="pink" value={data.time} />
        <ExtraCard name="Y max(1s)" bgColor="dark" value={data.gear} />
        <ExtraCard name="Z max(1s)" unit="m/s²" bgColor="secondary" value={data.distance} />
      </Row>
    </article>
  );
};

export default Accelerations;
