import ReactDOM from 'react-dom';
import Extra from '../Extra';

const fakeProps = {
  altitude: 0,
  distance: 0,
  gear: 0,
  showExtra: true,
  time: 0,
  weather: { pressure: 0, temperature: 0, windDirection: 0, windSpeed: 0 },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Extra {...fakeProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
