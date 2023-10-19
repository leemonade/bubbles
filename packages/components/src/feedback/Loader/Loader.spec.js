import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../ThemeProvider';
import { Loader } from './Loader';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

describe('Calendar', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider>
        <Loader />
      </ThemeProvider>
    );
  });
  it('renders label correctly', async () => {
    render(
      <ThemeProvider>
        <Loader label="This is the label" />
      </ThemeProvider>
    );

    expect(screen.getByText('This is the label')).toBeInTheDocument();
  });
});

describe('axe', () => {
  it('should not have any violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <Loader />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
