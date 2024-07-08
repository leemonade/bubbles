import React from 'react';
import PropTypes from 'prop-types';

function DateWidget(props) {
  const {
    onChange,
    registry: {
      widgets: { BaseInput },
    },
  } = props;
  return <BaseInput {...props} type="date" onChange={(value) => onChange(value || undefined)} />;
}

if (process.env.NODE_ENV !== 'production') {
  DateWidget.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    registry: PropTypes.shape({
      widgets: PropTypes.any,
    }),
  };
}

export default DateWidget;
