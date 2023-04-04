import { render } from '@testing-library/react';
import { vi } from 'vitest';
import Countdown from '../Countdown';

test('renders without crashing', () => {
  const props = {
    show: true,
    startTime: 0,
    setShow: vi.fn(),
    bikeName: 'prova',
  };

  render(<Countdown {...props} />);
});
