import React from 'react';
import { render, screen } from '@testing-library/react';
import { ScoreFeedback } from './ScoreFeedback';
import { ThemeProvider } from '../../ThemeProvider';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

const calificationMock = {
  minimumGrade: 5,
  grade: 5.2,
  label: 'SB',
  showOnlyLabel: false,
  decimalNumbers: 2,
};

describe('ScoreFeedback', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider>
        <ScoreFeedback />
      </ThemeProvider>
    );
  });
  it('renders props correctly', () => {
    render(
      <ThemeProvider>
        <ScoreFeedback calification={calificationMock} useAria={true} />
      </ThemeProvider>
    );

    expect(screen.getByText('SB')).toBeInTheDocument();
    expect(screen.getByText('5.20')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <ScoreFeedback calification={calificationMock} useAria={true}>
          <h3>{"I'm a title"}</h3>
          <p>{"I'm a paragraph"}</p>
        </ScoreFeedback>
      </ThemeProvider>
    );

    expect(screen.getByText("I'm a title")).toBeInTheDocument();
    expect(screen.getByText("I'm a paragraph")).toBeInTheDocument();
  });
  it('if calification with one decimal, print one decimal', () => {
    render(
      <ThemeProvider>
        <ScoreFeedback calification={{ ...calificationMock, decimalNumbers: 1 }} useAria={true} />
      </ThemeProvider>
    );
    expect(screen.getByText('5.2')).toBeInTheDocument();
  });
  it('if showOnlyLabel is true, should not render label', () => {
    render(
      <ThemeProvider>
        <ScoreFeedback calification={{ ...calificationMock, showOnlyLabel: true }} useAria={true} />
      </ThemeProvider>
    );
    expect(screen.getByText('SB')).toBeInTheDocument();
    expect(screen.queryByText('5.2')).not.toBeInTheDocument();
  });
});

describe('axe', () => {
  it('should not have any violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <ScoreFeedback />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
