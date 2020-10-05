import React, { useRef, useState, useEffect, useCallback } from 'react'
import Countdown from 'react-countdown'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap'
import {
  MainChart,
  CadenceCard,
  PowerCard,
  SpeedCard,
  HRCard,
  numCardElement,
  numElement,
} from './Graph'
import { LeafletMap, options } from './Map'

import dataService from 'api'
import { FiActivity } from 'react-icons/fi'
import { GiSpeedometer, GiCartwheel } from 'react-icons/gi'
import { FaSpaceShuttle } from 'react-icons/fa'

const useIsMounted = () => {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => (isMounted.current = false)
  }, [])

  return isMounted
}

const Dashboard = () => {
  const isMounted = useIsMounted()
  const [data, setData] = useState([])
  const [config, setConfig] = useState({ bikeName: 'taurusx', trackName: 'bm' })
  const [startTime, setStartTime] = useState(0)
  const [modalOpen, setModalOpen] = useState(startTime > Date.now())
  const [history, setHistory] = useState({
    chart: { heartrate: [], power: [], cadence: [], speed: [] },
    miniChart: { heartrate: [], power: [], cadence: [], speed: [] },
  })
  const [weather, setWeather] = useState([])
  const [position, setPosition] = useState(options.view.position)
  const loading = data === undefined || history === undefined // || weather === undefined
  const updateHistory = useCallback(history => {
    let param = ['heartrate', 'cadence', 'power', 'speed']
    let chart = {
      heartrate: [],
      cadence: [],
      power: [],
      speed: [],
    }
    let miniChart = {
      heartrate: [],
      cadence: [],
      power: [],
      speed: [],
    }
    let rev_history = history.reverse()
    let list = rev_history.slice(0, numElement)
    let miniList = rev_history.slice(0, numCardElement)

    list.reverse()
    miniList.reverse()

    for (let i = 0; i < list.length && i < numElement; i++) {
      for (let j = 0; j < param.length; j++) {
        chart[param[j]].push(list[i][param[j]])
        if (i < numCardElement) {
          miniChart[param[j]].push(miniList[i][param[j]])
        }
      }
    }

    let newHistory = {
      chart: chart,
      miniChart: miniChart,
    }

    setHistory(newHistory)
  }, [])

  const updateData = useCallback(
    data => {
      if (isMounted.current) {
        setData(data)
        setPosition([parseFloat(data.latitude), parseFloat(data.longitude)])
      }
    },
    [isMounted]
  )
  function parseDate(date, time) {
    date = date.split('-')
    time = time.split(':')
    return Date.UTC(date[0], date[1] - 1, date[2], time[0], time[1], time[2])
  }

  const updateConfig = useCallback(
    data => {
      if (isMounted.current) {
        setConfig(data)
        const start = parseDate(data.date, data.startTime)
        setStartTime(start)
        setModalOpen(start > Date.now())
      }
      console.log(data)
    },
    [isMounted]
  )

  useEffect(() => {
    dataService.getHistory(data => updateHistory(data), 'taurusx')
    dataService.getConfig(data => updateConfig(data))

    //   setInterval(
    //     v => dataService.getData(data => updateData(data), 'taurusx'),
    //     500
    //   )
  }, [])

  const Loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  return loading ? (
    Loading
  ) : (
    <>
      <Modal isOpen={modalOpen} className={'modal-info'}>
        <ModalHeader className="text-dark bg-yellow">
          La diretta live inizierà tra:
        </ModalHeader>
        <ModalBody>
          <Countdown date={startTime} onComplete={() => setModalOpen(false)}>
            <p>The bike is starting.</p>
          </Countdown>
        </ModalBody>
      </Modal>
      <Row>
        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-info">
            <CardBody className="pb-0">
              <ButtonGroup id="card1" className="float-right">
                <FaSpaceShuttle size={'1.5em'} />
              </ButtonGroup>
              <div className="text-value">{data.power}</div>
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
              <div className="text-value">{data.speed}</div>
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
              <div className="text-value">{data.heartrate}</div>
              <div>Heartrate [bpm]</div>
            </CardBody>
            <div className="chart-wrapper" style={{ height: '60px' }}>
              <HRCard data={data} history={history.miniChart} />
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <div
                className="chart-wrapper"
                style={{ height: `50vh`, marginTop: 0 }}
              >
                <MainChart data={data} history={history.chart} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <div className="Map">
                <LeafletMap position={position} options={options} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/*
        <Extra
          showExtra={true}
          gear={data.gear}
          distance={data.distance}
          time={data.time}
          weather={weather}
        /> */}
    </>
  )
}

export default Dashboard
