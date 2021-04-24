import ReactDOM from 'react-dom';
import { ExtraCard, WeatherCard } from '../../../components/Extra';
import { IExtra, IWCard } from '../../../components/Extra/types';

const fakeExtra: IExtra = { bgColor: '', name: '', unit: '', value: 0 };
const fakeWeather: IWCard = { bgColor: '', name: ['', ''], unit: ['', ''], value: [0, 0] };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExtraCard {...fakeExtra} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherCard {...fakeWeather} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
