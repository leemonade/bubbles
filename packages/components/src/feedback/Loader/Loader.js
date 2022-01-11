import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { Loader as MantineLoader, Box } from '@mantine/core';
import { ContextContainer, CONTEXT_CONTAINER_PROP_TYPES } from '../../layout';
import { Text } from '../../typography';
import { LoaderStyles } from './Loader.styles';

export const LOADER_LABEL_POSITIONS = ['right', 'bottom'];

export const LOADER_DEFAULT_PROPS = {
  padded: false,
  label: '',
  labelPosition: LOADER_LABEL_POSITIONS[0],
};
export const LOADER_PROP_TYPES = {
  padded: CONTEXT_CONTAINER_PROP_TYPES.padded,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(LOADER_LABEL_POSITIONS),
};

const Loader = ({ padded, label, labelPosition, ...props }) => {
  const { classes, cx } = LoaderStyles({});
  const direction = useMemo(() => (labelPosition === 'right' ? 'row' : 'column'), [labelPosition]);

  return (
    <ContextContainer
      direction={direction}
      padded={padded}
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <MantineLoader classNames={classes} />
      {isString(label) && <Text>{label}</Text>}
    </ContextContainer>
  );
};

Loader.defaultProps = LOADER_DEFAULT_PROPS;
Loader.propTypes = LOADER_PROP_TYPES;

export { Loader };
