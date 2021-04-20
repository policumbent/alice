import ReactDOM from 'react-dom';
import Credits from './Credits';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Credits />, div);
  ReactDOM.unmountComponentAtNode(div);
});
