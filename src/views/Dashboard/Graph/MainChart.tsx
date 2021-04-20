import { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';

import { mainChartData, mainChartOpts } from './costants';
import { filterReserved } from 'components/utils';
import { IChart } from './types';

const MainChart = ({ data, history }: IChart) => {
  const initValue = () => {
    const s = mainChartData;
    const power = history.map((e) => filterReserved(e.power));
    const cadence = history.map((e) => e.cadence);
    const speed = history.map((e) => e.speed);
    const heartrate = history.map((e) => filterReserved(e.heartrate));

    return {
      ...s,
      datasets: [
        { ...s.datasets[0], data: [...power] },
        { ...s.datasets[1], data: [...cadence] },
        { ...s.datasets[2], data: [...speed] },
        { ...s.datasets[3], data: [...heartrate] },
      ],
    };
  };

  const [state, setState] = useState(initValue);

  const updateData = useCallback(() => {
    const { power, cadence, speed, heartrate } = data;

    const oldDataSet1 = state.datasets[0]; // Power
    const oldDataSet2 = state.datasets[1]; // Cadence
    const oldDataSet3 = state.datasets[2]; // Speed
    const oldDataSet4 = state.datasets[3]; // HR

    /*
    const time = Math.round(data.Minutes * 100 * 60) / 100;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    */

    const newData1 = [...oldDataSet1.data.slice(1)];
    const newData2 = [...oldDataSet2.data.slice(1)];
    const newData3 = [...oldDataSet3.data.slice(1)];
    const newData4 = [...oldDataSet4.data.slice(1)];

    newData1.push(filterReserved(power));
    newData2.push(cadence);
    newData3.push(speed);
    newData4.push(filterReserved(heartrate));

    // Show power and hr if logged
    if (filterReserved(power) || filterReserved(heartrate)) {
      oldDataSet1.hidden = false;
      oldDataSet4.hidden = false;
    }

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
      };
    });
  }, [state.datasets, data]);

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, [data]);

  return <Line data={state} options={mainChartOpts} />;
};

export default MainChart;
