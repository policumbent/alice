import React, { useRef, useState, useEffect, useCallback } from 'react'
import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import {
  MainChart,
  CadenceCard,
  PowerCard,
  SpeedCard,
  HRCard,
  numCardElement,
  numElement,
} from './Graph'
import Extra from './Extra'
import { LeafletMap, options } from './Map'

import APIfetcher from 'api'
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
  const [data, setData] = useState()
  const [history, setHistory] = useState()
  const [weather, setWeather] = useState()
  const loading = data === undefined || history === undefined
  // data === undefined || weather === undefined || history === undefined

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
      }

      // setData(data)
      // if (isMounted.current) {
      //   setTimeout(() => {
      //     APIfetcher.requestData()
      //   }, 300)
      // }
    },
    [isMounted]
  )

  useEffect(() => {
    APIfetcher.getHistory(data => updateHistory(data))

    setInterval(
      v => APIfetcher.getData(data => updateData(data), 'taurusx'),
      500
    )
  }, [])

  const Loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  return loading ? (
    Loading
  ) : (
      <article>
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
                  <LeafletMap
                    position={options.view.position}
                    options={options}
                  />
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
      </article>
    )
}

export default Dashboard
