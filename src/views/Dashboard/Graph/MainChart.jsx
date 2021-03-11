import React, { useState, useEffect, useCallback } from 'react'
import { Line } from 'react-chartjs-2'

import { mainChartData, mainChartOpts } from './costants'
import { filterReserved } from '../../../utils'

const MainChart = ({ data, history }) => {
  const initValue = () => {
    let s = mainChartData
    let power = history.map((e) => filterReserved(e.power))
    let cadence = history.map((e) => e.cadence)
    let speed = history.map((e) => e.speed)
    let heartrate = history.map((e) => filterReserved(e.heartrate))

    return {
      ...s,
      datasets: [
        { ...s.datasets[0], data: [...power] },
        { ...s.datasets[1], data: [...cadence] },
        { ...s.datasets[2], data: [...speed] },
        { ...s.datasets[3], data: [...heartrate] },
      ],
    }
  }

  const [state, setState] = useState(initValue)

  const updateData = useCallback(() => {
    let oldDataSet1 = state.datasets[0]
    let oldDataSet2 = state.datasets[1]
    let oldDataSet3 = state.datasets[2]
    let oldDataSet4 = state.datasets[3]

    /*let time = Math.round(data.Minutes * 100 * 60) / 100;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;*/

    let newData1 = [...oldDataSet1.data.slice(1)]
    let newData2 = [...oldDataSet2.data.slice(1)]
    let newData3 = [...oldDataSet3.data.slice(1)]
    let newData4 = [...oldDataSet4.data.slice(1)]

    newData1.push(filterReserved(data.power))
    newData2.push(data.cadence)
    newData3.push(data.speed)
    newData4.push(filterReserved(data.heartrate))

    setState((s) => {
      return {
        ...s,
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
      }
    })
  }, [state.datasets, data])

  useEffect(() => {
    updateData()
    // eslint-disable-next-line
  }, [data])

  return <Line data={state} options={mainChartOpts} />
}

export default MainChart
