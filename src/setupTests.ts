import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('react-chartjs-2', () => ({
  Bar: () => null,
}));
