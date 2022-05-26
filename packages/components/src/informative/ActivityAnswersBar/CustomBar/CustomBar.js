import React from 'react';
import { CustomBarStyles } from './CustomBar.styles';
import { CUSTOM_BAR_DEFAULT_PROPS, CUSTOM_BAR_PROP_TYPES } from './CustomBar.constants';
import { CheckIcon, RemoveBoldIcon } from '@bubbles-ui/icons/solid';

const CustomBar = ({ bar: { width, height, color, x, y, index, key }, label }) => {
  const isOK = key.includes('OK');
  const isKO = key.includes('KO');

  const getColor = () => {
    if (isOK) return '#4BA773';
    if (isKO) return '#C9516C';
    return '#8E97A3';
  };

  const getPosition = () => {
    return width > 40 ? width - 40 : 0;
  };

  const getLabelPosition = () => {
    return width > 40 ? width - 29 : 11;
  };

  const getBarIcon = () => {
    if (isOK)
      return (
        <CheckIcon
          x={width - 20}
          y={height / 2 - 6.5}
          height={13}
          width={13}
          className={classes.labelIcon}
        />
      );
    if (isKO)
      return (
        <RemoveBoldIcon
          x={width - 20}
          y={height / 2 - 6.5}
          height={13}
          width={13}
          className={classes.labelIcon}
        />
      );
    return (
      <text
        x={getLabelPosition() + 18}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline={'central'}
        className={classes.label}
      >
        /
      </text>
    );
  };

  const { classes, cx } = CustomBarStyles({}, { name: 'CustomBar' });
  return (
    <g transform={`translate(${x}, ${y})`}>
      {width > 0 && (
        <g>
          <rect x={0} width={width > 40 ? width - 40 : 0} height={height} fill={color} />
          <rect x={getPosition()} width={40} height={height} fill={getColor()} />
          <text
            x={getLabelPosition()}
            y={height / 2}
            textAnchor="middle"
            dominantBaseline={'central'}
            className={classes.label}
          >
            {label}
          </text>
          {getBarIcon()}
        </g>
      )}
    </g>
  );
};

CustomBar.defaultProps = CUSTOM_BAR_DEFAULT_PROPS;
CustomBar.propTypes = CUSTOM_BAR_PROP_TYPES;

export { CustomBar };
