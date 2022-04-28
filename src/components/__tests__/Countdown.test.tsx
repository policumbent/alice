import { render } from '@testing-library/react';
import Countdown from '../Countdown';

test('renders without crashing', () => {
  const props = {
    show: true,
    startTime: 0,
    setShow: jest.fn(),
    bikeName: 'prova',
  };

  render(<Countdown {...props} />);
});
