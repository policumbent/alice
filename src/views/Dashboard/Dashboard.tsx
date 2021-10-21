/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, useCallback } from 'react';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';

import { FiActivity } from 'react-icons/fi';
import { GiSpeedometer, GiCartwheel } from 'react-icons/gi';
import { FaSpaceShuttle } from 'react-icons/fa';
import Countdown from 'components/countdown';

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
import { connectedNote, disconnectedNote } from 'components/utils';

import { IData, IHistory, IWeather } from './types';

const defaultConfig = { bikeName: 'taurusx', trackName: 'bm' };

const Dashboard = () => {
  const isMounted = useIsMounted();

  const [data, setData] = useState<IData>();
  const [history, setHistory] = useState<IHistory>();
  const [weather, setWeather] = useState<IWeather>();

  const [config, setConfig] = useState(defaultConfig);
  const [startTime, setStartTime] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [position, setPosition] = useState(options.view.position);
  const [connected, setConnected] = useState<boolean>();

  /* Fetch data every second */
  const [, setPolling] = usePolling(() => fetchData(), 1000);

  const updateHistory = useCallback(
    (history) => {
      if (isMounted.current && history) {
        // TODO: uncomment when history api is ready
        //
        // const chart = history.map((e: any) => createData(e));
        // const miniChart = chart.slice(numCardElement, chart.length - numCardElement);
        // setHistory({ chart, miniChart });
        setHistory(history);
      }
    },
    [isMounted]
  );

  const updateConfig = useCallback(
    async (config) => {
      if (isMounted.current && config) {
        const start = parseDate(config.date, config.startTime);

        setConfig(config);
        if (startTime === 0 && !modalOpen) {
          setStartTime(start);
          setModalOpen(start > Date.now());
        }
      }
    },
    [isMounted, startTime, modalOpen]
  );

  const updateData = useCallback(
    (
      data: IData & { latitude: string; longitude: string },
      weatherData: IWeather | null = null
    ) => {
      if (isMounted.current && !modalOpen) {
        setData(data);
        setPosition([parseFloat(data.latitude), parseFloat(data.longitude)]);

        if (weatherData) {
          setWeather(weatherData);
        }
      }
    },
    [isMounted, modalOpen]
  );

  const fetchData = useCallback(async () => {
    const c = await api.getConfig();
    await updateConfig(c);

    const data = await api.getData(c.bikeName);
    const wData = await api.getWeatherSingleStation('ws1');
    updateData(data, wData);

    if (!history) {
      const h = await api.getHistory(c.bikeName, numElement);
      updateHistory(h);
    }

    if (data.connected !== Boolean(connected)) {
      setConnected(data.connected);
    }
  }, [history, updateConfig, updateData, updateHistory, connected]);

  useEffect(() => {
    fetchData();
    setPolling(true);
  }, [fetchData, setPolling]);

  useEffect(() => {
    if (connected) {
      connectedNote();
    } else if (connected === false) {
      disconnectedNote();
    }
  }, [connected]);

  /* If there is no data yet, show blank screen */
  if (!data || !history || !weather) {
    return null;
  }

  return (
    <article className="animated fadeIn">
      {/* Countdown per la live */}
      <Countdown
        show={modalOpen}
        setShow={setModalOpen}
        bikeName={config.bikeName}
        startTime={startTime}
      />

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
          value={[weather?.wind_speed, weather?.wind_direction]}
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
