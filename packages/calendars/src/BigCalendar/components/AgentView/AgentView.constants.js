import PropTypes from 'prop-types';

export const AGENDA_PROP_TYPES = {
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date),
  events: PropTypes.array,
  getters: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
  localizer: PropTypes.object.isRequired,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  selected: PropTypes.object,
};

export const AGENDA_DEFAULT_PROPS = {
  length: 30,
};

export const emptyPixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
