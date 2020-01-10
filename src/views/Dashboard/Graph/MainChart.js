import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class MainChart extends Component {
  constructor(props) {
    super(props)

    this.data = this.props.data
    this.history = this.props.history
    this.state = this.props.state

    if (this.history !== undefined) this.manageHistory(this.state, this.history)
  }

  manageHistory(data, chart) {
    data.datasets[0].data = chart.power
    data.datasets[1].data = chart.cadence
    data.datasets[2].data = chart.speed
    data.datasets[3].data = chart.heartrate
  }

  componentDidUpdate() {
    if (this.data !== this.props.data) {
      this.data = this.props.data
      var _this = this

      var oldDataSet1 = _this.state.datasets[0]
      var oldDataSet2 = _this.state.datasets[1]
      var oldDataSet3 = _this.state.datasets[2]
      var oldDataSet4 = _this.state.datasets[3]

      var labels = _this.state.labels
      /*var time = Math.round(_this.data.Minutes * 100 * 60) / 100;
      var minutes = Math.floor(time / 60);
      var seconds = time % 60;*/

      var newData1 = []
      var newData2 = []
      var newData3 = []
      var newData4 = []

      for (var x = 1; x < _this.state.labels.length; x++) {
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
    return <Line data={this.state} options={this.props.opts} />
  }
}

export default MainChart
