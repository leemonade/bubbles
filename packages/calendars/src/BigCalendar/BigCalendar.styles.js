import { createStyles, getFontProductive, getPaddings, pxToRem } from '@bubbles-ui/components';

const getEventStyles = (theme, isMonthRange) => ({
  '.rbc-event': {
    backgroundColor: theme.colors.interactive01,
    color: theme.colors.text07,
    borderRadius: 3,
    ...getPaddings(4, 4),
    height: isMonthRange && '100%',
    '&.rbc-selected': {
      backgroundColor: theme.colors.interactive01h
    },

    '&:focus': {
      outline: `5px auto ${theme.colors.interactive01d}`
    }
  },
  '.rbc-event-content': {
    ...getFontProductive(theme.fontSizes['1']),
    position: 'relative',
    opacity: isMonthRange && '0',
    height: isMonthRange && '100%'
  },
  '.rbc-event-label': {
    ...getFontProductive(theme.fontSizes['1'])
  },
  '.rbc-event-overlaps': {
    boxShadow: `-1px 1px 5px 0px rgba(51,51,51,.5)`
  }
});

const getMonthViewStyles = (theme, isMonthRange, printMode) => ({
  '.rbc-month-view': {
    // borderColor: theme.colors.ui04,
    border: 'none',
    borderBottom: !isMonthRange && `1px solid ${theme.colors.ui04}`
  },
  '.rbc-month-row': {
    border: !isMonthRange && `1px solid ${theme.colors.ui04}`,
    borderTop: 'none',
    borderBottom: 'none',
    height: isMonthRange && (printMode ? 28 : 36),
    maxHeight: isMonthRange && (printMode ? 28 : 36),
    minHeight: isMonthRange && (printMode ? 28 : 36)
  },
  '.rbc-month-row + .rbc-month-row': {
    borderColor: theme.colors.ui04,
    borderTop: isMonthRange && 'none'
  },
  '.rbc-row-content': {
    height: isMonthRange && '100%'
  },
  '.rbc-row-content .rbc-row': {
    height: isMonthRange && '100%'
  },
  '.rbc-row-content > .rbc-row:first-child': {
    position: 'relative',
    zIndex: 99

  },
  '.rbc-row-content > .rbc-row:first-child .rbc-date-cell': {
    pointerEvents: isMonthRange ? 'none!important' : 'all!important'
  },
  '.rbc-event-row': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  '.rbc-date-cell': {
    ...getFontProductive(theme.fontSizes['1']),
    color: theme.colors.text02,
    padding: 4,
    height: isMonthRange && '100%',
    display: isMonthRange && 'flex',
    justifyContent: isMonthRange && 'center',
    alignItems: isMonthRange && 'center',
    a: {
      ...getPaddings(0, 2),
      fontSize: printMode && 12
    }
  },
  '.rbc-day-bg + .rbc-day-bg': {
    borderColor: theme.colors.ui04,
    borderLeft: isMonthRange && 'none'
  },
  'rbc-rtl .rbc-day-bg + .rbc-day-bg': {
    borderColor: theme.colors.ui04
  },
  '.rbc-date-cell.rbc-now': {
    fontWeight: isMonthRange && 400
  },
  '.rbc-now a': {
    backgroundColor: !isMonthRange && theme.colors.interactive02,
    color: !isMonthRange && theme.colors.text07,
    borderRadius: !isMonthRange && 3
  }
});

const getHeaderStyles = (theme, isMonthRange, printMode) => ({
  '.rbc-header': {
    ...getFontProductive(theme.fontSizes[isMonthRange ? '1' : '2'], 500),
    color: isMonthRange ? theme.colors.text06 : theme.colors.text02,
    textTransform: 'capitalize',
    border: 'none',
    borderBottom: !isMonthRange && `1px solid ${theme.colors.ui04}`,
    textAlign: isMonthRange ? 'center' : 'right',
    ...getPaddings(8, 5),
    height: isMonthRange && (printMode ? 28 : 36),
    paddingBottom: isMonthRange && printMode ? 0 : 8,
    paddingTop: isMonthRange && printMode ? 5 : 8
  },
  '.rbc-header + .rbc-header': {
    border: 'none',
    borderBottom: !isMonthRange && `1px solid ${theme.colors.ui04}`,
    height: isMonthRange && (printMode ? 28 : 36)
  },
  '.rbc-rtl .rbc-header + .rbc-header': {
    borderColor: theme.colors.ui04
  }
});

const getRowStyles = (theme, isMonthRange) => ({
  '.rbc-row-segment': {
    padding: isMonthRange ? '0px' : '0 4px 1px 4px'
  }
});

const getTimeColumnStyles = (theme, { timeslotHeight }) => ({
  '.rbc-timeslot-group': {
    borderColor: theme.colors.ui04,
    minHeight: timeslotHeight + 'px'
  },
  '.rbc-day-slot': {
    '.rbc-events-container': {
      marginRight: 0
    },
    '.rbc-event': {
      border: 'none',
      backgroundColor: 'white',
      color: theme.colors.text01,
      '.rbc-event-label': {
        color: theme.colors.text04
      }
    },
    '.rbc-background-event': {
      borderColor: theme.colors.interactive01h
    },
    '.rbc-time-slot': {
      borderColor: theme.colors.ui02
    }
  },
  '.rbc-time-view-resources': {
    '.rbc-time-gutter, .rbc-time-header-gutter': {
      borderColor: theme.colors.ui04
    }
  },
  '.rbc-time-slot': {
    ...getFontProductive(12),
    color: theme.colors.text04
  },
  '.rbc-time-gutter.rbc-time-column': {
    '.rbc-timeslot-group': {
      border: 'none'
    },
    '.rbc-label': {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 4px'
    }
  }
});

const getTimeGridStyles = (theme) => ({
  '.rbc-time-view': {
    border: 'none',
    marginTop: 10,

    '.rbc-header': {
      border: 'none',
      paddingTop: 0,
      paddingBottom: pxToRem(12)
    },

    '.rbc-allday-cell': {
      border: `1px solid ${theme.colors.ui04}`
    },

    '.rbc-allday-cell + .rbc-allday-cell': {
      borderColor: theme.colors.ui04
    },

    '&.hide-weekends': {
      '.rbc-time-content': {
        '.rbc-day-slot:nth-of-type(7)': {
          display: 'none'
        },
        '.rbc-day-slot:nth-of-type(8)': {
          display: 'none'
        }
      },
      '.rbc-day-bg': {
        '.rbc-day-bg:nth-of-type(6)': {
          display: 'none'
        },
        '.rbc-day-bg:nth-of-type(7)': {
          display: 'none'
        }
      },
      '.rbc-time-header': {
        '.rbc-header:nth-of-type(6)': {
          display: 'none'
        },
        '.rbc-header:nth-of-type(7)': {
          visibility: 'none'
        }
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
      }
    },

    '.rbc-day-slot': {
      backgroundColor: theme.colors.ui03
    }
  },
  '.rbc-time-header': {
    '&.rbc-overflowing': {
      border: 'none'
    },

    '> .rbc-row:first-of-type': {
      borderColor: theme.colors.ui04
    },
    '> .rbc-row.rbc-row-resource': {
      borderColor: theme.colors.ui04
    }
  },
  '.rbc-time-header-content': {
    border: 'none',
    marginRight: 2,

    '>.rbc-row.rbc-row-resource': {
      borderColor: theme.colors.ui04
    },

    '.rbc-time-header-cell-single-day': {
      display: 'block'
    }
  },
  '.rbc-rtl .rbc-time-header-content': {
    borderColor: theme.colors.ui04
  },
  '.rbc-time-content': {
    border: 'none',
    borderRight: `1px solid ${theme.colors.ui04}`,

    '> * + * > *': {
      borderColor: theme.colors.ui04
    }
  },
  '.rbc-rtl .rbc-time-content > * + * > *': {
    borderColor: theme.colors.ui04
  }
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
                borderRadius: '4px 0 0 0'
              },
              '&.rbc-agenda-date-cell': {
                '+.rbc-agenda-time-cell': {
                  '+.rbc-agenda-event-cell': {
                    '.rbc-agenda-td-data': {
                      borderRadius: '0 4px 0 0'
                    }
                  }
                }
              }
            }
          }
        },
        td: {
          height: '0px',
          padding: '0px',
          border: '0px',
          '.rbc-continues-box': {
            fontSize: theme.fontSizes[1],
            padding: '2px 5px',
            background: theme.colors.uiBackground02,
            borderRadius: '4px',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: theme.spacing[2]
          },
          '.rbc-agenda-td-data': {
            borderColor: theme.colors.ui01 + '!important',
            paddingTop: theme.spacing[2],
            paddingBottom: theme.spacing[2],
            paddingLeft: theme.spacing[4],
            paddingRight: theme.spacing[4],
            height: '100%'
          },
          '&.rbc-agenda-date-cell': {
            '.rbc-agenda-td-data': {
              paddingLeft: theme.spacing[4],
              paddingRight: theme.spacing[4]
            }
          },
          '&.rbc-agenda-event-cell': {
            '.rbc-agenda-td-data': {
              borderRight: '1px solid'
            }
          },
          '&:first-child': {
            '&.rbc-agenda-date-cell': {
              '.rbc-agenda-td-data': {
                borderTop: '1px solid',
                borderLeft: '1px solid'
              },
              '+.rbc-agenda-time-cell': {
                '.rbc-agenda-td-data': {
                  borderTop: '1px solid'
                },
                '+.rbc-agenda-event-cell': {
                  '.rbc-agenda-td-data': {
                    borderTop: '1px solid'
                  }
                }
              }
            }
          }
        }
      },
      'tbody > tr:first-child': {},
      'tbody > tr:last-child': {
        td: {
          borderBottom: '1px solid',
          borderColor: theme.colors.ui01 + '!important'
        }
      },
      'thead > tr > th': {
        border: '0px',
        paddingLeft: theme.spacing[4],
        paddingBottom: theme.spacing[2],
        '&:first-child': {
          paddingLeft: 0
        }
      }
    }
  },
  '.rbc-agenda-time-cell': {
    '.rbc-continues-after:after': {
      content: '""'
    },
    '.rbc-continues-prior:before': {
      content: '""'
    }
  }
});

export const BigCalendarStyles = createStyles(
  (theme, { timeslotHeight, isMonthRange, printMode }) => {
    return {
      root: {
        '.rbc-off-range': {
          color: theme.colors.text06
        },
        '.rbc-off-range-bg': {
          background: isMonthRange ? 'transparent' : theme.colors.ui03
        },
        '.rbc-today': {
          background: 'transparent'
        },
        // ·················································
        // HEADER
        ...getHeaderStyles(theme, isMonthRange, printMode),
        // ·················································
        // ROW
        ...getRowStyles(theme, isMonthRange, printMode),
        // ·················································
        // EVENTS
        ...getEventStyles(theme, isMonthRange, printMode),
        // ·················································
        // MONTH VIEW
        ...getMonthViewStyles(theme, isMonthRange, printMode),
        // ·················································
        // TIME GRID
        ...getTimeColumnStyles(theme, { timeslotHeight }),
        ...getTimeGridStyles(theme),
        // ·················································
        // AGENDA
        ...getAgendaStyles(theme)
      }
    };
  }
);
