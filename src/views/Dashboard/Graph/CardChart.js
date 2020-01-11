import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

import {
  cardChartData1,
  cardChartData2,
  cardChartData3,
  cardChartData4,
  cardChartOpts1,
  cardChartOpts2,
  cardChartOpts3,
  cardChartOpts4,
} from './costants'

class CardChart extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.state
    this.data = this.props.data
    this.value = this.props.value
    this.history = this.props.history

    if (this.history !== undefined) this.manageHistory(this.state, this.history)
  }

  manageHistory(data, chart) {
    data.datasets[0].data = chart[this.value]
  }

  componentDidUpdate() {
    if (this.data !== this.props.data) {
      this.data = this.props.data
      var _this = this

      var oldDataSet = _this.state.datasets[0]
      var labels = _this.state.labels
      var newData = []

      for (var x = 1; x < _this.state.labels.length; x++) {
        let value = oldDataSet.data[x]
        if (value !== undefined) {
          newData.push(value)
        } else {
          newData.unshift(value)
        }
      }

      labels.shift()
      labels.push('')

      var value = _this.data[_this.value]
      newData.push(value)

      _this.setState({
        ..._this.state,
        datasets: [
          {
            ...oldDataSet,
            data: newData,
          },
        ],
      })
    }
  }

  render() {
    return <Line data={this.state} options={this.props.opts} />
  }
}

const PowerCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData1}
      opts={cardChartOpts1}
      value="power"
      data={data}
      history={history}
    />
  )
}

const CadenceCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData2}
      opts={cardChartOpts2}
      value="cadence"
      data={data}
      history={history}
    />
  )
}

const SpeedCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData3}
      opts={cardChartOpts3}
      value="speed"
      data={data}
      history={history}
    />
  )
}

const HRCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData4}
      opts={cardChartOpts4}
      value="heartrate"
      data={data}
      history={history}
    />
  )
}

export { CardChart, CadenceCard, PowerCard, SpeedCard, HRCard }
