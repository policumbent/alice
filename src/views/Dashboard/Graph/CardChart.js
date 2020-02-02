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

    this.data = this.props.data
    this.value = this.props.value
    this.history = this.props.history

    this.state = this.props.state

    if (this.history !== undefined) this.manageHistory(this.state, this.history)
  }

  manageHistory(data, chart) {
    for (let x = 1; x < this.state.labels.length; x++) {
      let value = chart[this.value][x]

      if (value !== undefined) {
        data.datasets[0].data.push(value)
      } else {
        data.datasets[0].data.unshift(value)
      }
    }
  }

  componentDidUpdate() {
    if (this.data !== this.props.data) {
      this.data = this.props.data
      let _this = this

      let oldDataSet = _this.state.datasets[0]
      let labels = _this.state.labels
      let newData = []

      for (let x = 1; x < labels.length; x++) {
        let value = oldDataSet.data[x]

        if (value !== undefined) {
          newData.push(value)
        } else {
          newData.unshift(value)
        }
      }

      labels.shift()
      labels.push('')

      let value = _this.data[_this.value]
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
