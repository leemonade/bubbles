import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';
import { SchemaNavStyles } from './SchemaNav.styles';
import { SCHEMA_NAV_DEFAULT_PROPS, SCHEMA_NAV_PROP_TYPES } from './SchemaNav.constants';

const SchemaNav = ({ value, accept, onSelect = () => {}, ...props }) => {
  const { classes, cx } = SchemaNavStyles({}, { name: 'SchemaNav' });

  const items = useMemo(() => {}, [value, accept]);

  return <Box className={classes.root}>Schema nav</Box>;
};

SchemaNav.defaultProps = SCHEMA_NAV_DEFAULT_PROPS;
SchemaNav.propTypes = SCHEMA_NAV_PROP_TYPES;

export { SchemaNav };
