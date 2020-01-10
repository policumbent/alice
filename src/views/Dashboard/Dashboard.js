import React, { Component } from 'react'
import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import {
  mainChartOpts,
  mainChartData,
  cardChartData1,
  cardChartData2,
  cardChartData3,
  cardChartData4,
  cardChartOpts1,
  cardChartOpts2,
  cardChartOpts3,
  cardChartOpts4,
  numCardElement,
  numElement,
  CardChart,
  MainChart,
} from './Graph'
import SocketIoHelper from 'socketio'
import { FiActivity } from 'react-icons/fi'
import { GiSpeedometer, GiCartwheel } from 'react-icons/gi'
import { FaSpaceShuttle } from 'react-icons/fa'

const Extra = props => {
  return !props.showExtra ? null : (
    <Row>
      <Col xs="12" sm="6" lg="4">
        <Card className="text-white bg-primary">
          <CardBody className="pb-2">
            <div>Time [s]</div>
            <div className="text-value text-center">{props.time}</div>
          </CardBody>
        </Card>
      </Col>

      <Col xs="12" sm="6" lg="2">
        <Card className="text-white bg-dark">
          <CardBody className="pb-2">
            <div>Gear</div>
            <div className="text-value text-center">{props.gear}</div>
          </CardBody>
        </Card>
      </Col>

      <Col xs="12" sm="6" lg="2">
        <Card className="text-dark bg-secondary">
          <CardBody className="pb-2">
            <div>Distance [m]</div>
            <div className="text-value text-center">{props.distance}</div>
          </CardBody>
        </Card>
      </Col>

      <Col xs="12" sm="6" lg="4">
        <Card className="text-white bg-purple">
          <CardBody className="pb-2">
            <Row>
              <Col xs="4" sm="4" lg="4">
                <div className="text-center">Temp [°C]</div>
                <div className="text-value text-center">
                  {props.weather.temperature}
                </div>
              </Col>
              <Col xs="4" sm="4" lg="4">
                <div className="text-center">Humidity [%]</div>
                <div className="text-value text-center">
                  {props.weather.humidity}
                </div>
              </Col>
              <Col xs="4" sm="4" lg="4">
                <div className="text-center">Press [hPa]</div>
                <div className="text-value text-center">
                  {props.weather.pressure}
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

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
    if (this.state.history === '') {
      return null
    }
    return (
      <div className="animated fadeIn">
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
                <CardChart
                  state={cardChartData1}
                  opts={cardChartOpts1}
                  value="power"
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
                <CardChart
                  state={cardChartData2}
                  opts={cardChartOpts2}
                  value="cadence"
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
                <CardChart
                  state={cardChartData3}
                  opts={cardChartOpts3}
                  value="speed"
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
                <CardChart
                  state={cardChartData4}
                  opts={cardChartOpts4}
                  value="heartrate"
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
                    state={mainChartData}
                    opts={mainChartOpts}
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
      </div>
    )
  }
}

export default Dashboard
