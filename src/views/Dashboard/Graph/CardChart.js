import React, { useState, useEffect, useCallback } from 'react'
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

const CardChart = ({ state, type, data, history, opts }) => {
  const [line, setLine] = useState(state)

  const updateHistory = useCallback(() => {
    let newLine = { ...line }
    newLine.datasets[0].data.push(...history[type])
    setLine(newLine)
  }, [line, history, type])

  const updateLine = useCallback(() => {
    let oldDataSet = { ...line.datasets[0] }
    let labels = [...line.labels]
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

    let value = data[type]
    newData.push(value)

    setLine({
      ...line,
      datasets: [
        {
          ...oldDataSet,
          data: newData,
        },
      ],
    })
  }, [line, type, data])

  useEffect(() => {
    updateHistory()
    // eslint-disable-next-line
  }, [history])

  useEffect(() => {
    updateLine()
    // eslint-disable-next-line
  }, [data])

  return <Line data={line} options={opts} />
}

const PowerCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData1}
      opts={cardChartOpts1}
      type="power"
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
      type="cadence"
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
      type="speed"
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
      type="heartrate"
      data={data}
      history={history}
    />
  )
}

export { CardChart, CadenceCard, PowerCard, SpeedCard, HRCard }
