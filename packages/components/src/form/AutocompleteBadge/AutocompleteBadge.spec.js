/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { AutocompleteBadge } from './AutocompleteBadge';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

describe('AutocompleteBadge', () => {
  it('renders without crashing', () => {
    render(<AutocompleteBadge data={[]} placeholder="Search for a student" />).debug(
      undefined,
      100000
    );

    expect(screen.getByPlaceholderText('Search for a student')).toBeInTheDocument();
  });

  it('has no axe violations', async () => {
    const { container } = render(
      <AutocompleteBadge data={[]} placeholder="Search for a student" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
