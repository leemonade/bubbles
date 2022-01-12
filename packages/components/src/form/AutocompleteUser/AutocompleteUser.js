import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { AutocompleteUserStyles } from './AutocompleteUser.styles';
import { Autocomplete } from '../Autocomplete';
import { UserDisplayItem } from '../../informative/UserDisplayItem';
import { UserCards } from '../../informative/UserCards/UserCards';
import { Paper } from '../../layout/Paper';
import { Stack } from '../../layout/Stack';
import { Button } from '../Button';
import { SynchronizeArrowIcon } from '@bubbles-ui/icons/outline/';
import { INPUT_WRAPPER_SIZES } from '../InputWrapper';

export const AUTOCOMPLETEUSER_DEFAULT_PROPS = {};
export const AUTOCOMPLETEUSER_PROP_TYPES = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  nothingFoundLabel: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]).isRequired,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const itemComponent = forwardRef(({ ...others }, ref) => (
  <UserDisplayItem {...others} style={{ padding: 4 }} />
));

const AutocompleteUser = ({ onItemSubmit, ...props }) => {
  const { classes, cx } = AutocompleteUserStyles({});

  const [selectedValue, setSelectedValue] = useState(null);

  return !selectedValue ? (
    <Autocomplete
      {...props}
      multiple={false}
      itemComponent={itemComponent}
      onItemSubmit={setSelectedValue}
    />
  ) : (
    <Stack>
      <Paper>
        <UserCards user={selectedValue} variant={'contact'} />
      </Paper>
      <Button
        variant={'light'}
        leftIcon={<SynchronizeArrowIcon height={15} width={15} />}
        onClick={() => setSelectedValue(null)}
      >
        Change
      </Button>
    </Stack>
  );
};

AutocompleteUser.defaultProps = AUTOCOMPLETEUSER_DEFAULT_PROPS;

AutocompleteUser.propTypes = AUTOCOMPLETEUSER_PROP_TYPES;

export { AutocompleteUser };
