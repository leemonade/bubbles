import React from 'react';
import { COLORS } from '../../../theme.tokens';
import { CustomBarStyles } from './CustomBar.styles';
import { CUSTOM_BAR_DEFAULT_PROPS, CUSTOM_BAR_PROP_TYPES } from './CustomBar.constants';

const CustomBar = (
  {
    bar: {
      width,
      height,
      color,
      x,
      y,
      index,
      data: { value },
    },
    label,
  },
  minimumGrade,
  isMultiColor,
  showBarPercentage,
  scoresLength
) => {
  const { classes, cx } = CustomBarStyles({}, { name: 'CustomBar' });

  const getColor = () => {
    if (index < minimumGrade) {
      return isMultiColor ? '#DC5571' : COLORS.uiBackground05;
    }
    if (index === minimumGrade) {
      return isMultiColor ? '#E8C642' : COLORS.uiBackground05;
    }
    return isMultiColor ? '#50B579' : COLORS.uiBackground05;
  };

  return (
    <g transform={`translate(${x}, ${y})`}>
      {width > 0 && (
        <g>
          <rect width={width > 34 ? width - 34 : 0} height={height} fill={color} />
          <rect x={width > 34 ? width - 34 : 0} width={34} height={height} fill={getColor()} />
          <text
            x={width > 34 ? width - 17 : 17}
            y={height / 2}
            textAnchor="middle"
            dominantBaseline={'central'}
            className={classes.label}
          >
            {label}
          </text>
          {showBarPercentage && (
            <text
              x={width + 10}
              y={height / 2}
              dominantBaseline={'central'}
              className={classes.barPercentage}
            >
              {`${Math.round((value / scoresLength) * 100)}%`}
            </text>
          )}
        </g>
      )}
    </g>
  );
};

CustomBar.defaultProps = CUSTOM_BAR_DEFAULT_PROPS;
CustomBar.propTypes = CUSTOM_BAR_PROP_TYPES;

export { CustomBar };
