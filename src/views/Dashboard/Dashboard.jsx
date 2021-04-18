import { useState, useEffect, useCallback } from 'react';
import Countdown from 'react-countdown';
import { Modal, ModalHeader, ModalBody, ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap';
import {
  MainChart,
  CadenceCard,
  PowerCard,
  SpeedCard,
  HRCard,
  numCardElement,
  numElement,
} from './Graph';
import { LeafletMap, options } from './Map';
import Extra from './Extra';

import { FiActivity } from 'react-icons/fi';
import { GiSpeedometer, GiCartwheel } from 'react-icons/gi';
import { FaSpaceShuttle } from 'react-icons/fa';

import { default as api } from 'api';
import { parseDate, useIsMounted, usePolling } from 'components/utils';

const defaultConfig = { bikeName: 'taurusx', trackName: 'bm' };
const defaultData = {
  power: 0,
  speed: 0,
  cadence: 0,
  heartrate: 0,
  time: 0,
  distance: 0,
  gear: 0,
  altitude: 0,
};
const defaultHistory = {
  chart: [],
  miniChart: [],
};
const defaultWeather = {
  windSpeed: 0,
  windDirection: 0,
  temperature: 0,
  pressure: 0,
};

const Dashboard = () => {
  const isMounted = useIsMounted();

  const [data, setData] = useState(defaultData);
  const [config, setConfig] = useState(defaultConfig);
  const [startTime, setStartTime] = useState(0);
  const [modalOpen, setModalOpen] = useState(startTime > Date.now());
  const [history, setHistory] = useState(defaultHistory);
  const [weather, setWeather] = useState(defaultWeather);
  const [position, setPosition] = useState(options.view.position);

  // eslint-disable-next-line
  const [_, setPolling] = usePolling(() => fetchData(), 1000);

  const loading = data === defaultData || history === defaultHistory;

  const updateHistory = useCallback((history) => {
    let chart = history.map((e) => ({
      heartrate: e.heartrate,
      cadence: e.cadence,
      power: e.power,
      speed: e.speed,
    }));
    let miniChart = chart.slice(numCardElement, chart.length - numCardElement);

    setHistory({ chart, miniChart });
  }, []);

  const updateData = useCallback(
    (d) => {
      if (isMounted.current) {
        setData(d);
        setPosition([parseFloat(d.latitude), parseFloat(d.longitude)]);
      }
    },
    [isMounted]
  );

  const updateConfig = useCallback(
    async (data) => {
      if (isMounted.current && data !== defaultData) {
        const start = parseDate(data.date, data.startTime);

        setConfig(data);
        setStartTime(start);
        setModalOpen(start > Date.now());

        // NOTE: Placeholder, will be removed
        const h = await api.getHistory(data.bikeName, numElement);
        const d = await api.getData(data.bikeName);

        updateHistory(h);
        updateData(d);
        fetchData();
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
    setPolling(true);
  };

  const fetchData = async () => {
    const data = await api.getData(config.bikeName);
    const weather = await api.getWeatherSingleStation(3);

    updateData(data);

    // NOTE: weather is private for not logged users
    if (weather) {
      updateWeather(weather);
    }
  };

  const Loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  return loading ? (
    Loading
  ) : (
    <article className="animated fadeIn">
      {/* Countdown per la live */}
      <Modal isOpen={modalOpen} className={'modal-info'}>
        <ModalHeader className="text-dark bg-yellow">La diretta live inizierà tra:</ModalHeader>
        <ModalBody>
          <Countdown date={startTime} onComplete={() => setModalOpen(false)}>
            <p>The bike is starting.</p>
          </Countdown>
        </ModalBody>
      </Modal>

      {/* Row dei mini chart */}
      <Row>
        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-info">
            <CardBody className="pb-0">
              <ButtonGroup id="card1" className="float-right">
                <FaSpaceShuttle size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{data.power === -1 ? 'Reserved' : data.power}</div>
              <div>Power [W]</div>
            </CardBody>
            <div className="chart-wrapper" style={{ height: '60px' }}>
              <PowerCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-success">
            <CardBody className="pb-0">
              <ButtonGroup id="card2" className="float-right">
                <GiCartwheel size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{data.cadence}</div>
              <div>Cadence [rpm]</div>
            </CardBody>
            <div className="chart-wrapper" style={{ height: '60px' }}>
              <CadenceCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-warning">
            <CardBody className="pb-0">
              <ButtonGroup id="card3" className="float-right">
                <GiSpeedometer size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{Math.round(data.speed * 100) / 100}</div>
              <div>Speed [km/h]</div>
            </CardBody>
            <div className="chart-wrapper" style={{ height: '60px' }}>
              <SpeedCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-danger">
            <CardBody className="pb-0">
              <ButtonGroup id="card4" className="float-right">
                <FiActivity size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">
                {data.heartrate === -1 ? 'Reserved' : data.heartrate}
              </div>
              <div>Heartrate [bpm]</div>
            </CardBody>
            <div className="chart-wrapper" style={{ height: '60px' }}>
              <HRCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Row del main chart e mappa */}
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div className="central-chart">
                <MainChart data={data} history={history.chart} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <div className="central-chart">
                <LeafletMap position={position} options={options} track={config.trackName} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Row degli extra */}
      <Row>
        <Extra
          showExtra={true}
          altitude={data.altitude}
          distance={data.distance}
          gear={data.gear}
          time={data.time}
          weather={weather}
        />
      </Row>
    </article>
  );
};

export default Dashboard;
