import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { Views } from 'react-big-calendar';

export const TIMEZONE = DateTime.local().zoneName;
export const TODAY = DateTime.local().toJSDate();
export const MONTH_RANGE = 'monthRange';
export const firstDayOfWeek = 1;

export const BIGCALENDAR_VIEWS = [Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA, MONTH_RANGE];

export const BIG_CALENDAR_PROP_TYPES = {
  timezone: PropTypes.string,
  currentView: PropTypes.oneOf(BIGCALENDAR_VIEWS),
  defaultDate: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
  events: PropTypes.array,
  messages: PropTypes.shape({
    month: PropTypes.string,
    week: PropTypes.string,
    day: PropTypes.string,
    agenda: PropTypes.string,
    today: PropTypes.string,
    previous: PropTypes.string,
    next: PropTypes.string,
    showWeekends: PropTypes.string,
    allDay: PropTypes.string,
    init: PropTypes.string,
    end: PropTypes.string,
  }),
  validRange: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
  hooks: PropTypes.func,
  showWeekends: PropTypes.bool,
  dateClick: PropTypes.func,
  onSelectDay: PropTypes.func,
  onRangeChange: PropTypes.func,
  onSelectEvent: PropTypes.func,
  eventClick: PropTypes.func,
  backgroundEventClick: PropTypes.func,
  addEventClick: PropTypes.func,
};

export const BIG_CALENDAR_DEFAULT_PROPS = {
  timezone: TIMEZONE,
  defaultDate: TODAY,
  currentView: Views.MONTH,
  showWeekends: true,
  locale: 'en-EN',
  messages: {
    month: 'Monthly',
    week: 'Weekly',
    day: 'Day',
    agenda: 'Agenda',
    today: 'Today',
    previous: 'Previous',
    next: 'Next',
    showWeekends: 'View weekends',
    allDay: 'All day',
    init: 'Init',
    end: 'End',
  },
};
