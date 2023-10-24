/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { Autocomplete } from '../Autocomplete';
import { Badge } from '../../informative/Badge';
import { UserDisplayItem } from '../../informative/UserDisplayItem';
import {
  AUTOCOMPLETEBADGE_DEFAULT_PROPS,
  AUTOCOMPLETEBADGE_PROP_TYPES,
} from './AutocompleteBadge.constants';
import { AutocompleteBadgeStyles } from './AutocompleteBadge.styles';

const AutocompleteBadge = ({ itemPadding, ...props }) => {
  const itemComponent = forwardRef(({ avatar, children, label, name, value, ...others }, ref) => (
    <div ref={ref} {...others} style={{ padding: itemPadding }}>
      <UserDisplayItem
        avatar={avatar}
        // eslint-disable-next-line react/no-children-prop
        children={children}
        label={label}
        name={name}
        value={value}
      />
    </div>
  ));
  const valueComponent = forwardRef(({ avatar, onRemove, ...others }, ref) => (
    <Badge
      {...others}
      radius={'rounded'}
      size={'sm'}
      image={avatar}
      onClose={onRemove}
      ref={ref}
      style={{ paddingLeft: 24 }}
    />
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

AutocompleteBadge.defaultProps = AUTOCOMPLETEBADGE_DEFAULT_PROPS;
AutocompleteBadgeStyles.defaultProps = AUTOCOMPLETEBADGE_DEFAULT_PROPS;
AutocompleteBadge.propTypes = AUTOCOMPLETEBADGE_PROP_TYPES;
AutocompleteBadge.displayName = 'AutocompleteBadge';

export { AutocompleteBadge };
export default AutocompleteBadge;
