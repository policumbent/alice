/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, useCallback } from 'react';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';

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
} from '../Graph';
import { LeafletMap, options } from '../Map';
import { ExtraCard, WeatherCard } from '../Extra';

import { convertTimeMinSec, useIsMounted, usePolling} from '../../../utils';
import { genChart, genData, genPosition, genWeather } from './util';
import { connectedNote, disconnectedNote } from '../../../components/notifications';

import { IData, IHistory, IWeather } from '../types';
import { sim } from './data';

const defaultConfig = { bikeName: 'taurusx', trackName: 'bm' };

export const Simulation = () => {
  const isMounted = useIsMounted();
  const [data, setData] = useState<IData>();
  const [history, setHistory] = useState<IHistory>();
  const [weather, setWeather] = useState<IWeather>();
  const [cnt, setCnt] = useState(0);
  const [config, setConfig] = useState(defaultConfig);
  const [modalOpen, setModalOpen] = useState(false);
  const [position, setPosition] = useState(options.view.position);
  const [connected, setConnected] = useState<boolean>();
  const [logged, setLogged] = useState<boolean>(true);

  /* Fetch data every second */
  const [, setPolling] = usePolling(() => fetchData(), 1000);

  const updateHistory = useCallback(
    () => {
      if (isMounted.current) {
        const chart = genChart();
        const miniChart = chart.slice(numCardElement, chart.length - numCardElement);
        setHistory({ chart, miniChart });
      }
    },
    [isMounted]
  );

  const updateData = useCallback(
    (
      data: IData,
      position : { latitude: string; longitude: string },
      weatherData: IWeather | null = null
    ) => {
      if (isMounted.current) {
        setData(data);
        setPosition([parseFloat(position.latitude), parseFloat(position.longitude)]);

        if (weatherData) {
          setWeather(weatherData);
        }
      }
    },
    [isMounted, modalOpen]
  );

  
  const fetchData = useCallback(() => {
    //const c = await api.getConfig();
    //await updateConfig(c);
    const data = genData(cnt, sim);
    const fun = () => setCnt(cnt+1);
    const position = genPosition(cnt);
    const wData = genWeather();
    updateData(data, position, wData);
    fun();
    if (!history) {
      updateHistory();
    }

    if (data.connected !== Boolean(connected)) {
      setConnected(data.connected);
    }
    console.log(cnt);
  }, [history, updateData, updateHistory, connected]);

  useEffect(() => {
    setTimeout(() => fetchData(), 1000);
    setPolling(true);
  }, [fetchData, setPolling]);
  
  useEffect(() => {
    if (connected) {
      connectedNote();
    } else if (connected === false) {
      disconnectedNote();
    }
  }, [connected]);

  

  /*Avoid undefined data*/

  if (!data || !history || !weather){
    return(<div className="No-Data">
        <h3>No data available at the moment, running a simulation...</h3>
      </div>);
  }
  
  return (
    <article className="animated fadeIn">
      {/* Countdown per la live 
      <Countdown
        show={modalOpen}
        setShow={setModalOpen}
        bikeName={config.bikeName}
        startTime={startTime}
      />*/}

      {/* Row dei mini chart */}
      <Row>
        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-info">
            <Card.Body className="pb-0">
              <ButtonGroup id="card1" className="float-right">
                <FaSpaceShuttle size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{!logged ? 'Reserved' : data.power}</div>
              <div>Power [W]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <PowerCard isLogged={logged} data={data} history={history.miniChart} />
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
              <CadenceCard isLogged={logged} data={data} history={history.miniChart} />
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
              <SpeedCard isLogged={logged} data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-danger">
            <Card.Body className="pb-0">
              <ButtonGroup id="card4" className="float-right">
                <FiActivity size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{!logged ? 'Reserved' : data.heartrate}</div>
              <div>Heartrate [bpm]</div>
            </Card.Body>
            <div className="chart-wrapper card-chart">
              <HRCard isLogged={logged} data={data} history={history.miniChart} />
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
                <MainChart isLogged={logged} data={data} history={history.chart} />
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
        <ExtraCard
          name="Time"
          unit={data.time < 60 ? 'sec' : 'min, sec'}
          bgColor="pink"
          value={data.time < 60 ? data.time : convertTimeMinSec(data.time)}
        />
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
      <Row hidden={!logged}>
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
      {/*Messaggio per la simulazione*/}
      <div className="No-Data">
        <h3>No data available at the moment, running a simulation...</h3>
    </div>
    </article>
  );
};
