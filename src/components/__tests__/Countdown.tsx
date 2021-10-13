import ReactDOM from 'react-dom';
import Countdown from '../countdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Countdown show={true} startTime={0} setShow={() => {}} bikeName="prova" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
