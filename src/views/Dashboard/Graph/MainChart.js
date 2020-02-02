import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

import { mainChartData, mainChartOpts } from './costants'

class MainChart extends Component {
  constructor(props) {
    super(props)

    this.data = this.props.data
    this.history = this.props.history

    this.state = mainChartData

    if (this.history !== undefined) this.manageHistory(this.state, this.history)
  }

  manageHistory(data, chart) {
    for (let x = 1; x < this.state.labels.length; x++) {
      let value1 = chart.power[x]
      let value2 = chart.cadence[x]
      let value3 = chart.speed[x]
      let value4 = chart.heartrate[x]

      if (value1 !== undefined) {
        data.datasets[0].data.push(value1)
        data.datasets[1].data.push(value2)
        data.datasets[2].data.push(value3)
        data.datasets[3].data.push(value4)
      } else {
        data.datasets[0].data.unshift(value1)
        data.datasets[1].data.unshift(value2)
        data.datasets[2].data.unshift(value3)
        data.datasets[3].data.unshift(value4)
      }
    }
  }

  componentDidUpdate() {
    if (this.data !== this.props.data) {
      this.data = this.props.data
      let _this = this

      let oldDataSet1 = _this.state.datasets[0]
      let oldDataSet2 = _this.state.datasets[1]
      let oldDataSet3 = _this.state.datasets[2]
      let oldDataSet4 = _this.state.datasets[3]

      let labels = _this.state.labels
      /*let time = Math.round(_this.data.Minutes * 100 * 60) / 100;
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;*/

      let newData1 = []
      let newData2 = []
      let newData3 = []
      let newData4 = []

      for (let x = 1; x < labels.length; x++) {
        let value1 = oldDataSet1.data[x]
        let value2 = oldDataSet2.data[x]
        let value3 = oldDataSet3.data[x]
        let value4 = oldDataSet4.data[x]

        if (value1 !== undefined) {
          newData1.push(value1)
          newData2.push(value2)
          newData3.push(value3)
          newData4.push(value4)
        } else {
          newData1.unshift(value1)
          newData2.unshift(value2)
          newData3.unshift(value3)
          newData4.unshift(value4)
        }
      }

      labels.shift()
      labels.push('')

      newData1.push(_this.data.power)
      newData2.push(_this.data.cadence)
      newData3.push(_this.data.speed)
      newData4.push(_this.data.heartrate)

      _this.setState({
        ..._this.state,
        datasets: [
          {
            ...oldDataSet1,
            data: newData1,
          },
          {
            ...oldDataSet2,
            data: newData2,
          },
          {
            ...oldDataSet3,
            data: newData3,
          },
          {
            ...oldDataSet4,
            data: newData4,
          },
        ],
      })
    }
  }

  render() {
    return <Line data={this.state} options={mainChartOpts} />
  }
}

export default MainChart
