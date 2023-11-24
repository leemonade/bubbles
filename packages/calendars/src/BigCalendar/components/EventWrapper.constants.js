import PropTypes from 'prop-types';

export const emptyPixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export const stringifyPercent = (v) => (typeof v === 'string' ? v : `${v}%`);

export const EVENTWRAPPER_PROPTYPES = {
  event: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,
  onDoubleClickEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  rtl: PropTypes.bool,
  resizable: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.func,
};
