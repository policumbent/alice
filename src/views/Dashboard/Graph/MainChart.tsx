import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { mainChartData, mainChartOpts } from './costants';
import { filterReserved } from '../../../utils';
import { IChart } from './types';

const MainChart = ({ data, history, isLogged }: IChart) => {
  const initValue = () => {
    const s = mainChartData;
    const power = history.map((e) => filterReserved(e.power, isLogged));
    const cadence = history.map((e) => e.cadence);
    const speed = history.map((e) => e.speed);
    const heartrate = history.map((e) => filterReserved(e.heartrate, isLogged));

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

  const [state, setState] = useState(initValue());

  useEffect(() => {
    const { power, cadence, speed, heartrate } = data;

    const oldDataSet1 = state.datasets[0]; // Power
    const oldDataSet2 = state.datasets[1]; // Cadence
    const oldDataSet3 = state.datasets[2]; // Speed
    const oldDataSet4 = state.datasets[3]; // HR

    // Show power and hr if logged
    if (isLogged) {
      oldDataSet1.hidden = false;
      oldDataSet4.hidden = false;
    } else {
      oldDataSet1.hidden = true;
      oldDataSet4.hidden = true;
    }

    /* note: for timed labels
    const time = Math.round(data.Minutes * 100 * 60) / 100;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    */

    setState((s) => {
      return {
        ...s,
        datasets: [
          {
            ...oldDataSet1,
            data: [...oldDataSet1.data.slice(1), filterReserved(power, isLogged)],
          },
          {
            ...oldDataSet2,
            data: [...oldDataSet2.data.slice(1), cadence],
          },
          {
            ...oldDataSet3,
            data: [...oldDataSet3.data.slice(1), speed],
          },
          {
            ...oldDataSet4,
            data: [...oldDataSet4.data.slice(1), filterReserved(heartrate, isLogged)],
          },
        ],
      };
    });
    // eslint-disable-next-line
  }, [data]);

  return <Line data={state} options={mainChartOpts} />;
};

export default MainChart;
