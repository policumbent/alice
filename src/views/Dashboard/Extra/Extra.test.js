import React from 'react';
import ReactDOM from 'react-dom';
import Extra from './Extra';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Extra />, div);
  ReactDOM.unmountComponentAtNode(div);
});
