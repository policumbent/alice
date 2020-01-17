import React, { Component } from 'react'
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

import SocketIoHelper from 'socketio'
import { FiActivity } from 'react-icons/fi'
import { GiSpeedometer, GiCartwheel } from 'react-icons/gi'
import { FaSpaceShuttle } from 'react-icons/fa'

class Dashboard extends Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.state = {
      data: '',
      history: '',
      weather: '',
      showExtra: true,
    }

    SocketIoHelper.getHistory(list => {
      this.history(list)
    })

    SocketIoHelper.requestData()
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  history(history) {
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
        chart[param[j]].push(JSON.parse(list[i])[param[j]])
        if (i < numCardElement) {
          miniChart[param[j]].push(JSON.parse(miniList[i])[param[j]])
        }
      }
    }

    let newState = {
      ...this.state,
      history: {
        chart: chart,
        miniChart: miniChart,
      },
    }
    this.setState(newState)
  }

  updateData(data) {
    this.setState({
      data,
    })

    if (this._isMounted) {
      setTimeout(function() {
        SocketIoHelper.requestData()
      }, 300)
    }
  }

  componentDidMount() {
    this._isMounted = true

    // per quando si cambiano tab della pagina
    SocketIoHelper.getHistory(list => {
      this.history(list)
    })
    SocketIoHelper.getData(data => {
      //TODO: if per taurus o taurusx
      this.updateData(data)
    })
    SocketIoHelper.getWeather(weather => this.setState({ weather }))
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return this.state.history === '' ? null : (
      <article>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup id="card1" className="float-right">
                  <FaSpaceShuttle size={'1.5em'} />
                </ButtonGroup>
                <div className="text-value">{this.state.data.power}</div>
                <div>Power [W]</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '60px' }}>
                <PowerCard
                  data={this.state.data}
                  history={this.state.history.miniChart}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <ButtonGroup id="card2" className="float-right">
                  <GiCartwheel size={'1.5em'} />
                </ButtonGroup>
                <div className="text-value">{this.state.data.cadence}</div>
                <div>Cadence [rpm]</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '60px' }}>
                <CadenceCard
                  data={this.state.data}
                  history={this.state.history.miniChart}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup id="card3" className="float-right">
                  <GiSpeedometer size={'1.5em'} />
                </ButtonGroup>
                <div className="text-value">{this.state.data.speed}</div>
                <div>Speed [km/h]</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '60px' }}>
                <SpeedCard
                  data={this.state.data}
                  history={this.state.history.miniChart}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup id="card4" className="float-right">
                  <FiActivity size={'1.5em'} />
                </ButtonGroup>
                <div className="text-value">{this.state.data.heartrate}</div>
                <div>Heartrate [bpm]</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '60px' }}>
                <HRCard
                  data={this.state.data}
                  history={this.state.history.miniChart}
                />
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
                  style={{ height: `370px`, marginTop: 0 }}
                >
                  <MainChart
                    data={this.state.data}
                    history={this.state.history.chart}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Extra
          showExtra={this.state.showExtra}
          gear={this.state.data.gear}
          distance={this.state.data.distance}
          time={this.state.data.time}
          weather={this.state.weather}
        />
      </article>
    )
  }
}

export default Dashboard
