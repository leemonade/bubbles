/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Autocomplete } from './Autocomplete';
import { ThemeProvider } from '../../ThemeProvider';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

const autoCompletePropsMock = {
  label: 'Student',
  placeholder: 'Search for a student',
  nothingFoundLabel: 'No matches found',
  data: [
    {
      value: 'Ana Alonso',
      name: 'Ana Alonso',
      label: 'Ana Alonso',
      children: 'Ana Alonso',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      value: 'Antonia Hidalgo',
      name: 'Antonia Hidalgo',
      label: 'Antonia Hidalgo',
      children: 'Antonia Hidalgo',
      avatar:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      value: 'Maria Merino',
      name: 'Maria Merino',
      label: 'Maria Merino',
      children: 'Maria Merino',
      avatar:
        'https://images.unsplash.com/photo-1641324379143-81128cbb7ee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MTgxMDY1Ng&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      value: 'Juan Carlos',
      name: 'Juan Carlos',
      label: 'Juan Carlos',
      children: 'Juan Carlos',
      avatar:
        'https://images.unsplash.com/photo-1641664434328-6fe8a810e882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MTg5MjUyMw&ixlib=rb-1.2.1&q=80&w=1080',
    },
  ],
};

describe('Autocomplete', () => {
  it('Renders properly', () => {
    render(
      <ThemeProvider>
        <Autocomplete {...autoCompletePropsMock} />
      </ThemeProvider>
    );
    expect(screen.getByText('Student')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search for a student')).toBeInTheDocument();
  });
  it('should have no violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <Autocomplete {...autoCompletePropsMock} />
      </ThemeProvider>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Autocomplete interaction', () => {
  it('if user click on input, shows suggestions', async () => {
    render(
      <ThemeProvider>
        <Autocomplete {...autoCompletePropsMock} />
      </ThemeProvider>
    );
    await userEvent.click(screen.getByPlaceholderText('Search for a student'));

    expect(screen.getByText('Ana Alonso')).toBeInTheDocument();
    expect(screen.getByText('Antonia Hidalgo')).toBeInTheDocument();
    expect(screen.getByText('Maria Merino')).toBeInTheDocument();
    expect(screen.getByText('Juan Carlos')).toBeInTheDocument();
  });
  it('if user type no match characters, show properly message and calls onChange', async () => {
    const onChangeMock = jest.fn();
    const onSearchMock = jest.fn();
    render(
      <ThemeProvider>
        <Autocomplete {...autoCompletePropsMock} onChange={onChangeMock} onSearch={onSearchMock} />
      </ThemeProvider>
    );
    await userEvent.click(screen.getByPlaceholderText('Search for a student'));
    await userEvent.type(screen.getByPlaceholderText('Search for a student'), 'xxx');
    await userEvent.keyboard('{Enter}');
    expect(await screen.getByText('No matches found')).toBeInTheDocument();
    expect(await onChangeMock).toHaveBeenCalled();
    expect(await onChangeMock).toHaveBeenCalled();
  });
});
