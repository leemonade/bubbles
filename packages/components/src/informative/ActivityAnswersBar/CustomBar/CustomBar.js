import React from 'react';
import { COLORS } from '../../../theme.tokens';
import { CustomBarStyles } from './CustomBar.styles';
import { CUSTOM_BAR_DEFAULT_PROPS, CUSTOM_BAR_PROP_TYPES } from './CustomBar.constants';

const CustomBar = ({ bar: { width, height, color, x, y, index, key }, label }) => {
  const isOK = key.includes('OK');

  const getColor = () => {
    if (isOK) return '#4BA773';
    return '#C9516C';
  };

  const getPosition = () => {
    if (isOK) return width > 34 ? width - 34 : 0;
    return 0;
  };

  const getLabelPosition = () => {
    if (isOK) return width > 34 ? width - 17 : 17;
    return 17;
  };

  const { classes, cx } = CustomBarStyles({}, { name: 'CustomBar' });
  return (
    <g transform={`translate(${x}, ${y})`}>
      {width > 0 && (
        <g>
          <rect
            x={!isOK ? 34 : 0}
            width={width > 34 ? width - 34 : 0}
            height={height}
            fill={color}
          />
          <rect x={getPosition()} width={34} height={height} fill={getColor()} />
          <text
            x={getLabelPosition()}
            y={height / 2}
            textAnchor="middle"
            dominantBaseline={'central'}
            className={classes.label}
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
};

CustomBar.defaultProps = CUSTOM_BAR_DEFAULT_PROPS;
CustomBar.propTypes = CUSTOM_BAR_PROP_TYPES;

export { CustomBar };
