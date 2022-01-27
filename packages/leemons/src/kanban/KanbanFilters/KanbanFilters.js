import React from 'react';
import { Box, IconButton, Select, Stack, Switch, Text, Title } from '@bubbles-ui/components';
import { ExcludeIcon } from '@bubbles-ui/icons/solid';
import { AddIcon as PlusIcon, PluginSubjectsIcon } from '@bubbles-ui/icons/outline';
import { KanbanFiltersStyles } from './KanbanFilters.styles';

export const KANBAN_FILTERS_DEFAULT_PROPS = {
  messages: {
    title: 'Kanban',
    filter: 'Filter by',
    archived: 'Show archived tasks',
    selectCalendarsSubjects: 'All subjects',
  },
  value: {},
  data: {
    calendars: [],
  },
  onChange: () => {},
  addEventClick: () => {},
};
export const KANBAN_FILTERS_PROP_TYPES = {};

const KanbanFilters = ({ value, data, messages, onChange, addEventClick, ...props }) => {
  const { classes, cx } = KanbanFiltersStyles({});

  return (
    <Box className={classes.root}>
      <Stack alignItems="center">
        <ExcludeIcon className={classes.icon} />
        <Title order={2} className={classes.title}>
          {messages.title}
        </Title>
      </Stack>
      <Stack alignItems="center">
        <Text>{messages.filter}</Text>
        <Select
          value={value.calendars}
          data={data.calendars}
          className={classes.select}
          icon={<PluginSubjectsIcon />}
          onChange={(e) => onChange({ ...value, calendars: e })}
          placeholder={messages.selectCalendarsSubjects}
          clearable={true}
        />
        <Switch
          value={value.showArchived}
          onChange={(e) => onChange({ ...value, showArchived: e })}
          label={messages.archived}
        />
      </Stack>
      <Stack alignItems="center">
        <IconButton color="primary" size="lg" rounded onClick={addEventClick}>
          <PlusIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

KanbanFilters.defaultProps = KANBAN_FILTERS_DEFAULT_PROPS;
KanbanFilters.propTypes = KANBAN_FILTERS_PROP_TYPES;

export { KanbanFilters };
