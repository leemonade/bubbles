import React from 'react';
import { render, screen } from '@testing-library/react';
import BigCalendar from './BigCalendar';
import { BIG_CALENDAR_DEFAULT_PROPS } from './BigCalendar.constants';
import { ThemeProvider } from '@bubbles-ui/components';

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

const props = { ...BIG_CALENDAR_DEFAULT_PROPS, messages };
// Prueba renderizar el componente sin errores
test('renders BigCalendar component without errors', () => {
  render(
    <ThemeProvider>
      <BigCalendar {...props} />
    </ThemeProvider>
  );
  // Añade aquí las aserciones que desees, por ejemplo:
  // Expect algún elemento del componente en pantalla
});

// Prueba algún comportamiento específico del componente
test('handles a click event correctly', () => {
  // Simula un evento de clic
  // Realiza aserciones sobre el comportamiento esperado
});

// Prueba alguna otra funcionalidad específica del componente
test('handles a specific scenario correctly', () => {
  // Simula un escenario específico
  // Realiza aserciones sobre el resultado esperado
});
