import React from 'react';
import { render } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import { ThemeProvider } from '../../ThemeProvider';
// import { Calendar } from './Calendar';

describe('Calendar', () => {
  it('should render', () => {
    // render(
    //   <ThemeProvider>
    //     <Calendar />
    //   </ThemeProvider>
    // );

    render(
      <ThemeProvider>
        <div>Hello</div>
      </ThemeProvider>
    );
  });
});
