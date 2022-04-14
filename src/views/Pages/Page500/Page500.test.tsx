import { render } from '@testing-library/react';
import Page500 from './Page500';

test('renders without crashing', () => {
  render(<Page500 />);
});
