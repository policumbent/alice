import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

it('mounts without crashing', () => {
  render(<App />);
});
