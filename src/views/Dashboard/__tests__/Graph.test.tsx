import ReactDOM from 'react-dom';
import { MainChart, CadenceCard, PowerCard, SpeedCard, HRCard } from '../../../components/Graph';

const fakeData = {
  power: 0,
  speed: 0,
  cadence: 0,
  heartrate: 0,
  time: 0,
  distance: 0,
  gear: 0,
  altitude: 0,
};
const fakeHistory = [fakeData, fakeData];
const fakeMain = { data: fakeData, history: fakeHistory };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainChart {...fakeMain} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CadenceCard {...fakeMain} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PowerCard {...fakeMain} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpeedCard {...fakeMain} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HRCard {...fakeMain} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
