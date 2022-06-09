import { createStyles, getFontProductive, getPaddings, pxToRem } from '@bubbles-ui/components';

const getEventStyles = (theme) => ({
  '.rbc-event': {
    backgroundColor: theme.colors.interactive01,
    color: theme.colors.text07,
    borderRadius: 3,
    ...getPaddings(4, 4),

    '&.rbc-selected': {
      backgroundColor: theme.colors.interactive01h,
    },

    '&:focus': {
      outline: `5px auto ${theme.colors.interactive01d}`,
    },
  },
  '.rbc-event-content': {
    ...getFontProductive(theme.fontSizes['1']),
    position: 'relative',
  },
  '.rbc-event-label': {
    ...getFontProductive(theme.fontSizes['1']),
  },
  '.rbc-event-overlaps': {
    boxShadow: `-1px 1px 5px 0px rgba(51,51,51,.5)`,
  },
});

const getMonthViewStyles = (theme) => ({
  '.rbc-month-view': {
    // borderColor: theme.colors.ui04,
    border: 'none',
    borderBottom: `1px solid ${theme.colors.ui04}`,
  },
  '.rbc-month-row': {
    border: `1px solid ${theme.colors.ui04}`,
    borderTop: 'none',
    borderBottom: 'none',
  },
  '.rbc-month-row + .rbc-month-row': {
    borderColor: theme.colors.ui04,
  },
  '.rbc-date-cell': {
    ...getFontProductive(theme.fontSizes['1']),
    color: theme.colors.text02,
    padding: 4,

    a: {
      ...getPaddings(0, 2),
    },
  },
  '.rbc-day-bg + .rbc-day-bg': {
    borderColor: theme.colors.ui04,
  },
  'rbc-rtl .rbc-day-bg + .rbc-day-bg': {
    borderColor: theme.colors.ui04,
  },
  '.rbc-now a': {
    backgroundColor: theme.colors.interactive02,
    color: theme.colors.text07,
    borderRadius: 3,
  },
});

const getHeaderStyles = (theme) => ({
  '.rbc-header': {
    ...getFontProductive(theme.fontSizes['2'], 500),
    color: theme.colors.text05,
    border: 'none',
    borderBottom: `1px solid ${theme.colors.ui04}`,
    textAlign: 'right',
    ...getPaddings(8, 5),
  },
  '.rbc-header + .rbc-header': {
    border: 'none',
    borderBottom: `1px solid ${theme.colors.ui04}`,
  },
  '.rbc-rtl .rbc-header + .rbc-header': {
    borderColor: theme.colors.ui04,
  },
});

const getRowStyles = (theme) => ({
  '.rbc-row-segment': {
    padding: '0 4px 1px 4px',
  },
});

const getTimeColumnStyles = (theme) => ({
  '.rbc-timeslot-group': {
    borderColor: theme.colors.ui04,
  },
  '.rbc-day-slot': {
    '.rbc-events-container': {
      marginRight: 0,
    },
    '.rbc-event': {
      border: 'none',
      backgroundColor: 'white',
      color: theme.colors.text01,
      '.rbc-event-label': {
        color: theme.colors.text04,
      },
    },
    '.rbc-background-event': {
      borderColor: theme.colors.interactive01h,
    },
    '.rbc-time-slot': {
      borderColor: theme.colors.ui02,
    },
  },
  '.rbc-time-view-resources': {
    '.rbc-time-gutter, .rbc-time-header-gutter': {
      borderColor: theme.colors.ui04,
    },
  },
  '.rbc-time-slot': {
    ...getFontProductive(12),
    color: theme.colors.text04,
  },
  '.rbc-time-gutter.rbc-time-column': {
    '.rbc-timeslot-group': {
      border: 'none',
    },
    '.rbc-label': {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 4px',
    },
  },
});

const getTimeGridStyles = (theme) => ({
  '.rbc-time-view': {
    border: 'none',
    marginTop: 10,

    '.rbc-header': {
      border: 'none',
      paddingTop: 0,
      paddingBottom: pxToRem(12),
    },

    '.rbc-allday-cell': {
      border: `1px solid ${theme.colors.ui04}`,
    },

    '.rbc-allday-cell + .rbc-allday-cell': {
      borderColor: theme.colors.ui04,
    },

    '&.hide-weekends': {
      '.rbc-time-content': {
        '.rbc-day-slot:nth-of-type(7)': {
          display: 'none',
        },
        '.rbc-day-slot:nth-of-type(8)': {
          display: 'none',
        },
      },
      '.rbc-day-bg': {
        '.rbc-day-bg:nth-of-type(6)': {
          display: 'none',
        },
        '.rbc-day-bg:nth-of-type(7)': {
          display: 'none',
        },
      },
      '.rbc-time-header': {
        '.rbc-header:nth-of-type(6)': {
          display: 'none',
        },
        '.rbc-header:nth-of-type(7)': {
          visibility: 'none',
        },
        /*
        '.rbc-day-bg:first-of-type': {
          display: 'none',
        },
        '.rbc-day-bg:last-of-type': {
          display: 'none',
        },
        '.rbc-date-cell:first-of-type': {
          display: 'none',
        },
        '.rbc-date-cell:last-of-type': {
          display: 'none',
        },
        */
      },
    },

    '.rbc-day-slot': {
      backgroundColor: theme.colors.ui03,
    },
  },
  '.rbc-time-header': {
    '&.rbc-overflowing': {
      border: 'none',
    },

    '> .rbc-row:first-of-type': {
      borderColor: theme.colors.ui04,
    },
    '> .rbc-row.rbc-row-resource': {
      borderColor: theme.colors.ui04,
    },
  },
  '.rbc-time-header-content': {
    border: 'none',
    marginRight: 2,

    '>.rbc-row.rbc-row-resource': {
      borderColor: theme.colors.ui04,
    },

    '.rbc-time-header-cell-single-day': {
      display: 'block',
    },
  },
  '.rbc-rtl .rbc-time-header-content': {
    borderColor: theme.colors.ui04,
  },
  '.rbc-time-content': {
    border: 'none',
    borderRight: `1px solid ${theme.colors.ui04}`,

    '> * + * > *': {
      borderColor: theme.colors.ui04,
    },
  },
  '.rbc-rtl .rbc-time-content > * + * > *': {
    borderColor: theme.colors.ui04,
  },
});

const getAgendaStyles = (theme) => ({
  '.rbc-agenda-view': {
    'table.rbc-agenda-table': {
      border: '0px',

      'tbody > tr': {
        border: '0px',
        '&:first-child': {
          td: {
            '&:first-child': {
              '.rbc-agenda-td-data': {
                borderRadius: '4px 0 0 0',
              },
            },
          },
        },
        td: {
          padding: '0px',
          border: '0px',
          '.rbc-agenda-td-data': {
            borderColor: theme.colors.ui01 + '!important',
            paddingTop: theme.spacing[2],
          },
          '&.rbc-agenda-date-cell': {
            '.rbc-agenda-td-data': {
              paddingLeft: theme.spacing[4],
            },
          },
          '&:first-child': {
            '.rbc-agenda-td-data': {
              borderTop: '1px solid',
              borderLeft: '1px solid',
            },
          },
        },
      },
      'tbody > tr:first-child': {},
      'tbody > tr:last-child': {
        td: {
          borderBottom: '1px solid',
        },
      },
      'thead > tr > th': {
        border: '0px',
        paddingBottom: theme.spacing[2],
      },
    },
  },
  '.rbc-agenda-time-cell': {
    '.rbc-continues-after:after': {
      content: '" »"',
    },
    '.rbc-continues-prior:before': {
      content: '"« "',
    },
  },
});

export const BigCalendarStyles = createStyles((theme, {}) => {
  return {
    root: {
      '.rbc-off-range': {
        color: theme.colors.text06,
      },
      '.rbc-off-range-bg': {
        background: theme.colors.ui03,
      },
      '.rbc-today': {
        background: 'transparent',
      },
      // ·················································
      // HEADER
      ...getHeaderStyles(theme),
      // ·················································
      // ROW
      ...getRowStyles(theme),
      // ·················································
      // EVENTS
      ...getEventStyles(theme),
      // ·················································
      // MONTH VIEW
      ...getMonthViewStyles(theme),
      // ·················································
      // TIME GRID
      ...getTimeColumnStyles(theme),
      ...getTimeGridStyles(theme),
      // ·················································
      // AGENDA
      ...getAgendaStyles(theme),
    },
  };
});
