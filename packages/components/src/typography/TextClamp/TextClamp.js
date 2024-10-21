import React from 'react';
import PropTypes from 'prop-types';
import Clamp from 'react-multiline-clamp';
import { Button } from '../../form/Button';

export const TEXT_CLAMP_DEFAULT_PROPS = {
  lines: 2,
  maxLines: 8,
  withTooltip: true,
  withToggle: false,
  showMore: 'More',
  showLess: 'Less',
  onShowMore: () => {},
};
export const TEXT_CLAMP_PROP_TYPES = {
  lines: PropTypes.number,
  maxLines: PropTypes.number,
  withTooltip: PropTypes.bool,
  withToggle: PropTypes.bool,
  showMore: PropTypes.string,
  showLess: PropTypes.string,
  onShowMore: PropTypes.func,
  children: PropTypes.node,
};

const TextClamp = ({
  children,
  lines,
  maxLines,
  withTooltip,
  withToggle,
  showMore,
  showLess,
  onShowMore,
  ...props
}) => (
  <Clamp
    {...props}
    lines={lines}
    maxLines={maxLines}
    withTooltip={withTooltip}
    withToggle={withToggle}
    showMoreElement={({ toggle }) => (
      <Button size="xs" compact variant="link" onClick={toggle}>
        {showMore}
      </Button>
    )}
    showLessElement={({ toggle }) => (
      <Button size="xs" compact variant="link" onClick={toggle}>
        {showLess}
      </Button>
    )}
    onShowMore={onShowMore}
  >
    {React.cloneElement(children, { style: { hyphens: 'auto', wordBreak: 'break-word' } })}
  </Clamp>
);

TextClamp.defaultProps = TEXT_CLAMP_DEFAULT_PROPS;
TextClamp.propTypes = TEXT_CLAMP_PROP_TYPES;

export { TextClamp };
