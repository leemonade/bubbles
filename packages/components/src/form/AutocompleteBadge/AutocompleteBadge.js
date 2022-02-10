import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { AutocompleteBadgeStyles } from './AutocompleteBadge.styles';
import { Autocomplete } from '../Autocomplete';
import { Badge } from '../../informative/Badge';
import { UserDisplayItem } from '../../informative/UserDisplayItem';
import { INPUT_WRAPPER_SIZES } from '../InputWrapper';

export const AUTOCOMPLETEBADGE_DEFAULT_PROPS = {};
export const AUTOCOMPLETEBADGE_PROP_TYPES = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]).isRequired,
  itemPadding: PropTypes.number,
  nothingFoundLabel: PropTypes.string,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onItemSubmit: PropTypes.func,
};

const AutocompleteBadge = ({ itemPadding, ...props }) => {
  const { classes, cx } = AutocompleteBadgeStyles({});

  const itemComponent = forwardRef(({ avatar, children, label, name, value, ...others }, ref) => (
    <div ref={ref} {...others} style={{ padding: itemPadding }}>
      <UserDisplayItem
        avatar={avatar}
        children={children}
        label={label}
        name={name}
        value={value}
      />
    </div>
  ));
  const valueComponent = forwardRef(({ avatar, onRemove, ...others }, ref) => (
    <Badge {...others} radius={'rounded'} size={'xs'} image={avatar} onClose={onRemove} />
  ));

  return (
    <Autocomplete
      {...props}
      multiple={true}
      itemComponent={itemComponent}
      valueComponent={valueComponent}
    />
  );
};

AutocompleteBadgeStyles.defaultProps = AUTOCOMPLETEBADGE_DEFAULT_PROPS;

AutocompleteBadge.propTypes = AUTOCOMPLETEBADGE_PROP_TYPES;

export { AutocompleteBadge };
