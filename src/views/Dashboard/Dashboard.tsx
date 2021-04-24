import { useState, useEffect, useCallback } from 'react';
import Countdown from 'react-countdown';
import { Modal, ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { FiActivity } from 'react-icons/fi';
import { GiSpeedometer, GiCartwheel } from 'react-icons/gi';
import { FaSpaceShuttle } from 'react-icons/fa';

import {
  MainChart,
  CadenceCard,
  PowerCard,
  SpeedCard,
  HRCard,
  numCardElement,
  numElement,
} from './Graph';
import { createData } from './Graph/types';
import { LeafletMap, options } from './Map';
import { ExtraCard, WeatherCard } from './Extra';

import { default as api } from 'api';
import { parseDate, useIsMounted, usePolling } from 'components/utils';
import { IData, IHistory, IWeather } from './types';

const defaultConfig = { bikeName: 'taurusx', trackName: 'bm' };

const Dashboard = () => {
  const isMounted = useIsMounted();

  const [data, setData] = useState<IData>();
  const [history, setHistory] = useState<IHistory>();
  const [weather, setWeather] = useState<IWeather>();

  const [config, setConfig] = useState(defaultConfig);
  const [startTime, setStartTime] = useState(0);
  const [modalOpen, setModalOpen] = useState(startTime > Date.now());
  const [position, setPosition] = useState(options.view.position);

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
        setPosition([parseFloat(d.latitude), parseFloat(d.longitude)]);
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
        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-info">
            <Card.Body className="pb-0">
              <ButtonGroup id="card1" className="float-right">
                <FaSpaceShuttle size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{data.power === -1 ? 'Reserved' : data.power}</div>
              <div>Power [W]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <PowerCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-success">
            <Card.Body className="pb-0">
              <ButtonGroup id="card2" className="float-right">
                <GiCartwheel size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{data.cadence}</div>
              <div>Cadence [rpm]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <CadenceCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-warning">
            <Card.Body className="pb-0">
              <ButtonGroup id="card3" className="float-right">
                <GiSpeedometer size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{Math.round(data.speed * 100) / 100}</div>
              <div>Speed [km/h]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <SpeedCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-danger">
            <Card.Body className="pb-0">
              <ButtonGroup id="card4" className="float-right">
                <FiActivity size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">
                {data.heartrate === -1 ? 'Reserved' : data.heartrate}
              </div>
              <div>Heartrate [bpm]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <HRCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Row del main chart e mappa */}
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <Card.Body>
              <div className="central-chart">
                <MainChart data={data} history={history.chart} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" sm="6">
          <Card>
            <Card.Body>
              <div className="central-chart">
                <LeafletMap
                  position={position}
                  options={options}
                  track={config.trackName}
                  bikeName={config.bikeName}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Row degli extra */}
      <Row>
        <ExtraCard name="Time" unit="m" bgColor="pink" value={data.time} />
        <ExtraCard name="Gear" bgColor="dark" value={data.gear} />
        <ExtraCard name="Distance" unit="m" bgColor="secondary" value={data.distance} />
        <ExtraCard name="Altitude" unit="m" bgColor="yellow" value={data.altitude} />
        <WeatherCard
          name={['Temp', 'Press']}
          unit={['°C', 'hPa']}
          bgColor="purple"
          value={[weather?.temperature, weather?.pressure]}
        />
        <WeatherCard
          name={['Wind', 'Direction']}
          unit={['m/s', '°']}
          bgColor="behance"
          value={[weather?.windSpeed, weather?.windDirection]}
        />
      </Row>

      {/*// Row riservata agli utenti loggati */}
      <Row hidden={!api.isLogged()}>
        <WeatherCard
          name={['Acc X', 'Acc X ']}
          unit={['m/s²', 'm/s²']}
          bgColor="cyan"
          value={[data.accX, data.accXMax]}
        />
        <WeatherCard
          name={['Acc Y', 'Acc Y ']}
          unit={['m/s²', 'm/s²']}
          bgColor="indigo"
          value={[data.accY, data.accYMax]}
        />
        <WeatherCard
          name={['Acc Z', 'Acc Z ']}
          unit={['m/s²', 'm/s²']}
          bgColor="teal"
          value={[data.accZ, data.accZMax]}
        />
        <ExtraCard name="CpuTemp" unit="°C" bgColor="red" value={data.cpuTemp} />
        <ExtraCard name="Last Update" bgColor="gray" value={data.timestamp} />
        <ExtraCard name="Last Weather Update" bgColor="orange" value={weather?.timestamp} />
      </Row>
    </article>
  );
};

export default Dashboard;
