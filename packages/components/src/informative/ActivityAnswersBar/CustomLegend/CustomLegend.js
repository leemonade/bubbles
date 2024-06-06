import React from 'react';
import { CustomLegendStyles } from './CustomLegend.styles';
import { CUSTOM_LEGEND_DEFAULT_PROPS, CUSTOM_LEGEND_PROP_TYPES } from './CustomLegend.constants';
import { CheckBoldIcon, RemoveBoldIcon, SlashIcon } from '@bubbles-ui/icons/solid';

const CustomLegend = ({ id }) => {
  const { classes, cx } = CustomLegendStyles({}, { name: 'CustomLegend' });

  const isOK = id === 'OK';
  const isKO = id === 'KO';

  const getLegendIcon = () => {
    if (isOK)
      return <CheckBoldIcon x={4} y={4} height={12} width={12} className={classes.legendIconOK} />;
    if (isKO)
      return <RemoveBoldIcon x={4} y={4} height={12} width={12} className={classes.legendIconKO} />;
    return <SlashIcon x={4} y={4} height={10} width={10} className={classes.legendIconSlash} />;
  };

  return <g>{getLegendIcon()}</g>;
};

CustomLegend.defaultProps = CUSTOM_LEGEND_DEFAULT_PROPS;
CustomLegend.propTypes = CUSTOM_LEGEND_PROP_TYPES;

export { CustomLegend };
