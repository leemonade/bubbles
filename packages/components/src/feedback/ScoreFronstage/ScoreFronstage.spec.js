import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../ThemeProvider';
import { ScoreFronstage } from './ScoreFronstage';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

const scoreFronstageFixture = {
  title: 'This is the title',
  subtitle: 'This is the subtitle',
  image: 'https://via.placeholder.com/100x100',
  icon: 'https://via.placeholder.com/100x100',
  label: 'This is the label',
  score: 0,
  minGrade: 0,
  values: [
    {
      title: 'Title 1',
      date: new Date(),
      percentage: '30',
      score: { number: 10 },
    },
    {
      title: 'Title 2',
      date: new Date(),
      percentage: '20',
      score: { number: 7 },
    },
  ],
};

describe('ScoreFronstage', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider>
        <ScoreFronstage />
      </ThemeProvider>
    );
  });
  it('renders props correctly', async () => {
    render(
      <ThemeProvider>
        <ScoreFronstage {...scoreFronstageFixture} />
      </ThemeProvider>
    ).debug(undefined, 100000);

    expect(screen.getByText(scoreFronstageFixture.title)).toBeInTheDocument();
    expect(screen.getByText(scoreFronstageFixture.subtitle)).toBeInTheDocument();
    expect(screen.getByText(scoreFronstageFixture.label.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(scoreFronstageFixture.values[0].title)).toBeInTheDocument();
    expect(screen.getByText(scoreFronstageFixture.values[1].title)).toBeInTheDocument();
    expect(screen.getByText(scoreFronstageFixture.values[0].score.number)).toBeInTheDocument();
    expect(screen.getByText(scoreFronstageFixture.values[1].score.number)).toBeInTheDocument();
    expect(screen.getByText(`${scoreFronstageFixture.values[0].percentage}%`)).toBeInTheDocument();
    expect(screen.getByText(`${scoreFronstageFixture.values[1].percentage}%`)).toBeInTheDocument();
  });
});

describe('Accesibility', () => {
  it('should not have any violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <ScoreFronstage />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
