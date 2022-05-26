import React from 'react';
import { CustomLegendStyles } from './CustomLegend.styles';
import { CUSTOM_LEGEND_DEFAULT_PROPS, CUSTOM_LEGEND_PROP_TYPES } from './CustomLegend.constants';
import { CheckIcon, RemoveBoldIcon } from '@bubbles-ui/icons/solid';

const CustomLegend = ({ id }) => {
  const { classes, cx } = CustomLegendStyles({}, { name: 'CustomLegend' });

  const isOK = id === 'OK';
  const isKO = id === 'KO';

  const getLegendIcon = () => {
    if (isOK)
      return <CheckIcon x={4} y={4} height={12} width={12} className={classes.legendIcon} />;
    if (isKO)
      return <RemoveBoldIcon x={4} y={4} height={12} width={12} className={classes.legendIcon} />;
    return (
      <text x={7.5} y={15.5} className={classes.legendSlash}>
        /
      </text>
    );
  };

  const getLegendFill = () => {
    if (isOK) return '#4BA773';
    if (isKO) return '#C9516C';
    return '#8E97A3';
  };

  return (
    <g>
      <rect fill={getLegendFill()} height={20} width={20} rx="2" ry="2"></rect>
      {getLegendIcon()}
    </g>
  );
};

CustomLegend.defaultProps = CUSTOM_LEGEND_DEFAULT_PROPS;
CustomLegend.propTypes = CUSTOM_LEGEND_PROP_TYPES;

export { CustomLegend };
