import React from 'react';
import PropTypes from 'prop-types';
import { utcToLocal, localToUTC } from '../../utils';

function DateTimeWidget(props) {
  const {
    value,
    onChange,
    registry: {
      widgets: { BaseInput },
    },
  } = props;
  return (
    <BaseInput
      type="datetime-local"
      {...props}
      value={utcToLocal(value)}
      onChange={(val) => onChange(localToUTC(val))}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  DateTimeWidget.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    registry: PropTypes.shape({
      widgets: PropTypes.object,
    }),
  };
}

export default DateTimeWidget;
