import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import {
  cardChartData1,
  cardChartData2,
  cardChartData3,
  cardChartData4,
  cardChartOpts1,
  cardChartOpts2,
  cardChartOpts3,
  cardChartOpts4,
  numCardElement,
} from './costants';
import { filterReserved } from '../../../utils';
import { ICardChart, IChart } from './types';

const CardChart = ({ state, type, data, history, opts, isLogged }: ICardChart) => {
  const initValue = {
    ...state,
    datasets: [
      {
        ...state.datasets[0],
        data:
          history?.map((e) => filterReserved(Number(e[type]), isLogged)) ||
          Array(numCardElement + 1).fill(null),
      },
    ],
  };

  const [line, setLine] = useState(initValue);

  useEffect(() => {
    const value =
      type === 'power' || type === 'heartrate'
        ? filterReserved(Number(data[type]), isLogged)
        : data[type];

    if (value !== null) {
      const oldDataSet = { ...line.datasets[0] };

      setLine((l) => {
        return {
          ...l,
          datasets: [
            {
              ...oldDataSet,
              data: [...oldDataSet.data.slice(1), value],
            },
          ],
        };
      });
    }
    // eslint-disable-next-line
  }, [data, type]);

  return <Line data={line} options={opts} />;
};

const PowerCard = ({ data, history, isLogged }: IChart) => {
  return (
    <CardChart
      state={cardChartData1}
      opts={cardChartOpts1}
      type="power"
      data={data}
      history={history}
      isLogged={isLogged}
    />
  );
};

const CadenceCard = ({ data, history, isLogged }: IChart) => {
  return (
    <CardChart
      state={cardChartData2}
      opts={cardChartOpts2}
      type="cadence"
      data={data}
      history={history}
      isLogged={isLogged}
    />
  );
};

const SpeedCard = ({ data, history, isLogged }: IChart) => {
  return (
    <CardChart
      state={cardChartData3}
      opts={cardChartOpts3}
      type="speed"
      data={data}
      history={history}
      isLogged={isLogged}
    />
  );
};

const HRCard = ({ data, history, isLogged }: IChart) => {
  return (
    <CardChart
      state={cardChartData4}
      opts={cardChartOpts4}
      type="heartrate"
      data={data}
      history={history}
      isLogged={isLogged}
    />
  );
};

export { CardChart, CadenceCard, PowerCard, SpeedCard, HRCard };
