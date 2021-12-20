import React from 'react';
import { Box, Group } from '@mantine/core';
import { views as RCBViews, navigate } from 'react-big-calendar/lib/utils/constants';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/outline';
import { capitalize } from 'lodash';

import { Text } from '../../../../typography';
import { IconButton, Button, ActionButton, Switch } from '../../../../form';
import { ToolbarStyles } from './Toolbar.styles';
import { ViewNamesGroup } from './ViewNamesGroup';

export const ToolBar = ({
  localizer: { messages },
  label,
  view,
  views,
  onNavigate,
  onView,
  showWeekends,
  setShowWeekends,
  addEventClick,
  ...props
}) => {
  const { classes, cx } = ToolbarStyles({});
  return (
    <Group position="apart" mb={10}>
      <Group>
        <Group spacing={0}>
          <Box mr={10}>
            <Button
              size="xs"
              variant="outline"
              color="tertiary"
              onClick={() => onNavigate(navigate.TODAY)}
            >
              {messages.today}
            </Button>
          </Box>
          <ActionButton
            onClick={() => onNavigate(navigate.PREVIOUS)}
            tooltip={messages.previous}
            icon={<ChevronLeftIcon style={{ height: 20 }} />}
          />
          <ActionButton
            onClick={() => onNavigate(navigate.NEXT)}
            tooltip={messages.next}
            icon={<ChevronRightIcon style={{ height: 20 }} />}
          />
        </Group>
        <Box>
          <Text size="xl">{capitalize(label)}</Text>
        </Box>
      </Group>

      <Group style={{ gap: 12 }}>
        {view !== RCBViews.DAY && (
          <Switch
            label={messages.showWeekends}
            labelPosition="start"
            checked={showWeekends}
            onChange={(event) =>
              typeof setShowWeekends === 'function'
                ? setShowWeekends(event.currentTarget.checked)
                : null
            }
          />
        )}
        <ViewNamesGroup
          views={views}
          messages={messages}
          current={view}
          classes={classes}
          onChange={(val) => onView(val)}
        />
        <IconButton color="primary" size="lg" onClick={addEventClick}>
          <PlusIcon />
        </IconButton>
      </Group>
    </Group>
  );
};
