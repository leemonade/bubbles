import '@testing-library/jest-dom';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock('swiper/css', () => {});
jest.mock('swiper/css/navigation', () => {});
export {};
