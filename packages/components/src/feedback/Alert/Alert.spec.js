import React from 'react';
import { userEvent } from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../ThemeProvider';
import { Alert } from './Alert';

describe('Calendar', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider>
        <Alert />
      </ThemeProvider>
    );
  });
  it('renders props correctly', async () => {
    const onCloseMock = jest.fn();
    render(
      <ThemeProvider>
        <Alert
          variant="inline"
          severity="info"
          title="This is the title"
          closeable={true}
          onClose={onCloseMock}
          useAria={true}
        >
          {'this is the children'}
        </Alert>
      </ThemeProvider>
    ).debug(undefined, 100000);

    // renders title:
    expect(screen.getByText('This is the title')).toBeInTheDocument();
    // renders children:
    expect(screen.getByText('this is the children')).toBeInTheDocument();
    // renders close button:
    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(closeButton).toBeInTheDocument();
    // if click on close button, onClose should be called:
    await userEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
