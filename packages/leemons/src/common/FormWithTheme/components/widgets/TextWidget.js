import React from 'react';
import PropTypes from 'prop-types';

function TextWidget(props) {
  const { BaseInput } = props.registry.widgets;
  return <BaseInput {...props} />;
}

if (process.env.NODE_ENV !== 'production') {
  TextWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string,
    registry: PropTypes.shape({
      widgets: PropTypes.any,
    }),
  };
}

export default TextWidget;
