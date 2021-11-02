import { MainChart, CadenceCard, PowerCard, SpeedCard, HRCard } from '../Graph';
import React from 'react';
import { render, screen } from '@testing-library/react';

const fakeData = {
  power: 0,
  speed: 0,
  cadence: 0,
  heartrate: 0,
  time: 0,
  distance: 0,
  gear: 0,
  altitude: 0,
};
const fakeHistory = [fakeData, fakeData];
const fakeMain = { data: fakeData, history: fakeHistory, isLogged: true };

it('placeholder', () => {});

// it('renders without crashing', () => {
//   render(<MainChart {...fakeMain} />);
// });

// it('renders without crashing', () => {
//   render(<CadenceCard {...fakeMain} />);
// });

// it('renders without crashing', () => {
//   render(<PowerCard {...fakeMain} />);
// });

// it('renders without crashing', () => {
//   render(<SpeedCard {...fakeMain} />);
// });

// it('renders without crashing', () => {
//   render(<HRCard {...fakeMain} />);
// });
