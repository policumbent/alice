import { ExtraCard, WeatherCard } from '../Extra';
import { IExtra, IWCard } from '../Extra/types';
import { render } from '@testing-library/react';

const fakeExtra: IExtra = { bgColor: '', name: '', unit: '', value: 0 };
const fakeWeather: IWCard = { bgColor: '', name: ['', ''], unit: ['', ''], value: [0, 0] };

it('renders without crashing', () => {
  render(<ExtraCard {...fakeExtra} />);
});

it('renders without crashing', () => {
  render(<WeatherCard {...fakeWeather} />);
});
