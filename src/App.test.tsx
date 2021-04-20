import { shallow } from 'enzyme';
import App from './App';

it('mounts without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount();
});
