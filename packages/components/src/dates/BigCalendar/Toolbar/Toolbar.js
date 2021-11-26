import React, { useState, useEffect } from 'react';
import { Box, Group, Text, SegmentedControl } from '@mantine/core';
import { navigate } from 'react-big-calendar/lib/utils/constants';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { capitalize } from 'lodash';
import { Button, ActionButton, Switch } from '../../../form';
import { ToolbarStyles } from './Toolbar.styles';

const ViewNamesGroup = ({ messages, views, current, onChange, classes }) => {
  const [value, setValue] = useState(current);
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [];
    if (messages && views && views.length > 1) {
      views.forEach((name) => newData.push({ label: messages[name], value: name }));
    }
    setData(newData);
  }, [messages, views]);

  useEffect(() => setValue(current), [current]);

  const handleOnChange = (val) => {
    setValue(val);
    if (typeof onChange === 'function') onChange(val);
  };

  if (current && messages && views && data.length > 0) {
    return (
      <SegmentedControl
        size="xl"
        radius="xs"
        value={value}
        onChange={handleOnChange}
        data={data}
        classNames={{
          root: classes.viewItemGroup,
          label: classes.viewItemLabel,
          active: classes.viewItemActive,
        }}
      />
    );
  }
  return null;
};

export const ToolBar = ({
  localizer: { messages },
  label,
  view,
  views,
  onNavigate,
  onView,
  showWeekends,
  setShowWeekends,
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
            description={messages.previous}
            leftIcon={<ChevronLeftIcon style={{ height: 20 }} />}
          />
          <ActionButton
            onClick={() => onNavigate(navigate.NEXT)}
            description={messages.next}
            leftIcon={<ChevronRightIcon style={{ height: 20 }} />}
          />
        </Group>
        <Box>
          <Text size="xl">{capitalize(label)}</Text>
        </Box>
      </Group>

      <Group spacing="xl">
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
        <ViewNamesGroup
          views={views}
          messages={messages}
          current={view}
          classes={classes}
          onChange={(val) => onView(val)}
        />
      </Group>
    </Group>
  );
};
