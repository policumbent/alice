import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

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

export default CardChart
