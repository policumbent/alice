import React from 'react';
import { render, screen } from '@testing-library/react';

import { LeafletMap, options } from '../Map';
import { ILeafletMap } from '../Map/types';

const fakeMap: ILeafletMap = { position: [0, 0], options, track: 'bm', bikeName: '' };

test('placeholder', () => {});

// test('renders without crashing', () => {
//   render(<LeafletMap {...fakeMap} />);
// });
