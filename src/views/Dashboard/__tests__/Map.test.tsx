import ReactDOM from 'react-dom';
import { LeafletMap, options } from '../Map';
import { ILeafletMap } from '../Map/types';

const fakeMap: ILeafletMap = { position: [0, 0], options, track: 'bm', bikeName: '' };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeafletMap {...fakeMap} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
