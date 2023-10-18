import PropTypes from 'prop-types';

export const ALERT_SEVERITIES = ['info', 'success', 'warning', 'error'];
export const ALERT_VARIANTS = ['inline', 'block'];

export const ALERT_DEFAULT_PROPS = {
  variant: 'inline',
  severity: 'info',
  closeable: true,
  useAria: true,
  children: '',
};

export const ALERT_PROP_TYPES = {
  /** Alert title */
  title: PropTypes.node,
  /** Controls Alert severity (color) */
  severity: PropTypes.oneOf(ALERT_SEVERITIES),
  /** Controls the Alert appearance */
  variant: PropTypes.string,
  /** Controls if Alert is closable or not */
  closeable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Controls if Alert has an action and the text for the button */
  action: PropTypes.node,
  /** Function executed by the action button */
  onAction: PropTypes.func,
  /** Function executed when Alert closes */
  onClose: PropTypes.func,
  /** Controls if Alert uses aria role */
  useAria: PropTypes.bool,
  /** Alert content */
  children: PropTypes.node,
};
