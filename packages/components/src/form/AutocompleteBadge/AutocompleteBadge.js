import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { AutocompleteBadgeStyles } from './AutocompleteBadge.styles';
import { Autocomplete } from '../Autocomplete';
import { Badge } from '../../informative/Badge';
import { UserDisplayItem } from '../../informative/UserDisplayItem';

export const AUTOCOMPLETEBADGE_DEFAULT_PROPS = {};
export const AUTOCOMPLETEBADGE_PROP_TYPES = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  nothingFoundLabel: PropTypes.string,
};

const itemComponent = forwardRef(({ ...others }, ref) => <UserDisplayItem {...others} />);
const valueComponent = forwardRef(({ avatar, radius, size, onRemove, ...others }, ref) => (
  <Badge {...others} radius={'rounded'} size={'xs'} image={avatar} onClose={onRemove} />
));

const AutocompleteBadge = ({ ...props }) => {
  const { classes, cx } = AutocompleteBadgeStyles({});

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
