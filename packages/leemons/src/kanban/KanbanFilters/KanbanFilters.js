import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';
import { KanbanFiltersStyles } from './KanbanFilters.styles';

export const KANBAN_FILTERS_DEFAULT_PROPS = {};
export const KANBAN_FILTERS_PROP_TYPES = {};

const KanbanFilters = ({ ...props }) => {
  const { classes, cx } = KanbanFiltersStyles({});

  return <Box className={classes.root}>Kanban filters</Box>;
};

KanbanFilters.defaultProps = KANBAN_FILTERS_DEFAULT_PROPS;
KanbanFilters.propTypes = KANBAN_FILTERS_PROP_TYPES;

export { KanbanFilters };
