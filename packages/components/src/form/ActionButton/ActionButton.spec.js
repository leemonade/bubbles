import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ActionButton } from './ActionButton';
import { ThemeProvider } from '../../ThemeProvider';
import { ACTION_BUTTON_COLORS, ACTION_BUTTON_SIZES } from './ActionButton.constants';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

const label = 'This is a button';

const actionButtonPropsMock = {
  color: ACTION_BUTTON_COLORS[0],
  size: ACTION_BUTTON_SIZES[1],
  label,
  rounded: false,
  useAria: true,
  active: false,
  tooltip: 'This is a tooltip',
};

describe('ActionButton', () => {
  it('Renders properly', async () => {
    render(
      <ThemeProvider>
        <ActionButton {...actionButtonPropsMock} />
      </ThemeProvider>
    );

    expect(screen.getByText(label)).toBeInTheDocument();
    await userEvent.hover(screen.getByText(label));
    expect(screen.getByText('This is a tooltip')).toBeInTheDocument();
  });
});

describe('ActionButton Accessibility', () => {
  it('should have no violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <ActionButton {...actionButtonPropsMock} />
      </ThemeProvider>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
