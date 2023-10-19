import React, { useMemo } from 'react';
import { isString } from 'lodash';
import { Loader as MantineLoader } from '@mantine/core';
import { ContextContainer } from '../../layout/ContextContainer';
import { Text } from '../../typography/Text';
import { LOADER_DEFAULT_PROPS, LOADER_PROP_TYPES } from './Loader.constants';

const Loader = ({ padded, label, labelPosition, useAria, ...props }) => {
  const direction = useMemo(() => (labelPosition === 'right' ? 'row' : 'column'), [labelPosition]);

  return (
    <ContextContainer
      direction={direction}
      padded={padded}
      alignItems="center"
      justifyContent="center"
      role={useAria ? 'progressbar' : undefined}
      aria-label={useAria ? 'BubblesLoader' : undefined}
      {...props}
    >
      <MantineLoader />
      {isString(label) && <Text>{label}</Text>}
    </ContextContainer>
  );
};

Loader.defaultProps = LOADER_DEFAULT_PROPS;
Loader.propTypes = LOADER_PROP_TYPES;
Loader.displayName = 'Loader';

export default Loader;
export { Loader };
