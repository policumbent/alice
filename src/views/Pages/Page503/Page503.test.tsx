import ReactDOM from 'react-dom';
import Page503 from './Page503';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page503 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
