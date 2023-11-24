import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import BigCalendar from './BigCalendar';
import { BIG_CALENDAR_DEFAULT_PROPS, BIGCALENDAR_VIEWS } from './BigCalendar.constants';
import { ThemeProvider } from '@bubbles-ui/components';
import EVENTS from './mocks/events';

const messages = {
  month: 'Mensual',
  week: 'Semanal',
  day: 'Diario',
  agenda: 'Agenda',
  today: 'Hoy',
  previous: 'Anterior',
  next: 'siguiente',
  showWeekends: 'Mostrar fines de semana',
  display: 'Mostrar',
  entirePeriod: 'Periodo completo',
  onlyInitAndEnd: 'Solo mostrar inicio y final',
  onlyEnd: 'Solo mostrar fecha límite',
};

const props = {
  ...BIG_CALENDAR_DEFAULT_PROPS,
  messages,
  events: EVENTS,
  currentView: BIGCALENDAR_VIEWS[0],
  locale: 'es-ES',
  defaultDate: EVENTS[0].start,
};

describe('BigCalendar', () => {
  it('renders BigCalendar component', () => {
    render(
      <ThemeProvider>
        <BigCalendar {...props} />
      </ThemeProvider>
    );
    expect(screen.getByText('Septiembre 2022')).toBeInTheDocument();
    expect(screen.getByText('Mensual')).toBeInTheDocument();
    expect(screen.getByText('Semanal')).toBeInTheDocument();
    expect(screen.getByText('Mostrar fines de semana')).toBeInTheDocument();
  });
  it('Change language if locale prop is changed', () => {
    render(
      <ThemeProvider>
        <BigCalendar {...props} locale="en-GB" />
      </ThemeProvider>
    );
    expect(screen.getByText('September 2022')).toBeInTheDocument();
  });
});

describe('BigCalendar header tests', () => {
  it('if user click on hide weekends, the calendar should hide weekends and viceversa', async () => {
    render(
      <ThemeProvider>
        <BigCalendar {...props} />
      </ThemeProvider>
    );
    expect(screen.queryByText('Sáb')).toBeInTheDocument();
    expect(screen.queryByText('Dom')).toBeInTheDocument();
    const switchWeekends = screen.getByTestId('label');
    await userEvent.click(switchWeekends);
    expect(screen.queryByText('Sáb')).not.toBeInTheDocument();
    expect(screen.queryByText('Dom')).not.toBeInTheDocument();
  });

  it('has today button and click it', async () => {
    render(
      <ThemeProvider>
        <BigCalendar {...props} />
      </ThemeProvider>
    );
    const currentMonth = new Date().toLocaleDateString('es-ES', {
      month: 'long',
    });
    const todayButton = screen.getByText('Hoy');
    await userEvent.click(todayButton);
    const regex = new RegExp(currentMonth, 'i');
    expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it('has button tho show range of events and if user click, show options', async () => {
    render(
      <ThemeProvider>
        <BigCalendar {...props} />
      </ThemeProvider>
    );
    const inputElement = screen.getByDisplayValue('Periodo completo');
    await userEvent.click(inputElement);
    expect(screen.queryByText('Solo mostrar inicio y final')).toBeInTheDocument();
    expect(screen.queryByText('Solo mostrar fecha límite')).toBeInTheDocument();
  });

  it('has four buttons to show calendar ranges and Agenda view and every button renders the corresponding view', async () => {
    render(
      <ThemeProvider>
        <BigCalendar {...props} />
      </ThemeProvider>
    );

    expect(screen.queryByText('Mensual')).toBeInTheDocument();
    expect(screen.queryByText('Semanal')).toBeInTheDocument();
    expect(screen.queryByText('Diario')).toBeInTheDocument();
    expect(screen.queryByText('Agenda')).toBeInTheDocument();

    expect(screen.queryByText('Evaluación inicial matemáticas')).toBeInTheDocument();
    expect(screen.queryByText('Proyecto: La historia detrás del cuadro')).toBeInTheDocument();

    const semanalButton = screen.queryByText('Semanal');
    await userEvent.click(semanalButton);
    expect(screen.queryByText('Evaluación inicial matemáticas')).toBeInTheDocument();
    expect(screen.queryByText('Proyecto: La historia detrás del cuadro')).not.toBeInTheDocument();
    const diarioButton = screen.queryByText('Diario');
    await userEvent.click(diarioButton);
    expect(screen.queryByText('Evaluación inicial matemáticas')).toBeInTheDocument();
    expect(screen.queryByText('11:00')).toBeInTheDocument();
    const agendaButton = screen.queryByText('Agenda');
    await userEvent.click(agendaButton);
    expect(screen.queryAllByText('All Day')).toHaveLength(2);
  });

  it('create event button calls addEventClick when clicked', async () => {
    const addEventClick = jest.fn();
    render(
      <ThemeProvider>
        <BigCalendar {...props} addEventClick={addEventClick} />
      </ThemeProvider>
    );
    const addEventButton = screen.getByTestId('add-event');
    await userEvent.click(addEventButton);
    expect(addEventClick).toHaveBeenCalled();
  });

  it('if user click on chevrons, navigate on calendar', async () => {
    render(
      <ThemeProvider>
        <BigCalendar {...props} />
      </ThemeProvider>
    );
    const chevronRight = screen.getByTestId('chevron-right');
    await userEvent.click(chevronRight);
    expect(screen.queryByText('Test de Cooper')).toBeInTheDocument();
    expect(screen.queryByText('Entrega trabajo Música')).toBeInTheDocument();
    expect(screen.queryByText('Evaluación inicial matemáticas')).not.toBeInTheDocument();
  });
});

describe('BigCalendar calendar tests', () => {
  it('render events and click on event', async () => {
    const onSelectEvent = jest.fn();
    render(
      <ThemeProvider>
        <BigCalendar {...props} onSelectEvent={onSelectEvent} />
      </ThemeProvider>
    );
    const mathEvent = screen.queryByText('Evaluación inicial matemáticas');
    await userEvent.click(mathEvent);
    expect(onSelectEvent).toHaveBeenCalled();
  });
});
