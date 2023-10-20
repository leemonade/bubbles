/* eslint-disable react/prop-types */
import React from 'react';
import { isString } from 'lodash';
import { Tooltip } from '../../../overlay/Tooltip';
import {
  TOOLTIPCOMPONENT_DEFAULT_PROPS,
  TOOLTIPCOMPONENT_PROP_TYPES,
} from './TooltipComponent.constants';

const TooltipComponent = ({ children, tooltip, useAria }) =>
  isString(tooltip) && tooltip !== '' ? (
    <Tooltip
      position="bottom"
      label={tooltip}
      withArrow={false}
      useAria={useAria}
      color="secondary"
    >
      {children}
    </Tooltip>
  ) : (
    <>{children}</>
  );

TooltipComponent.defaultProps = TOOLTIPCOMPONENT_DEFAULT_PROPS;
TooltipComponent.proptypes = TOOLTIPCOMPONENT_PROP_TYPES;
// TooltipComponent.displayName = 'TooltipComponent';

export default TooltipComponent;
export { TooltipComponent };
