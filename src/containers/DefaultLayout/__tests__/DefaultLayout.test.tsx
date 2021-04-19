import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Route path="/" component={DefaultLayout} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
