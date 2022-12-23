import React from 'react';
import { capitalize } from 'lodash';
import {
  ActionButton,
  Box,
  Button,
  Group,
  IconButton,
  Select,
  Switch,
  Text
} from '@bubbles-ui/components';
import { navigate, views as RCBViews } from 'react-big-calendar/lib/utils/constants';
import {
  AddIcon as PlusIcon,
  ChevLeftIcon as ChevronLeftIcon,
  ChevRightIcon as ChevronRightIcon
} from '@bubbles-ui/icons/outline';
import { ToolbarStyles } from './Toolbar.styles';
import { ViewNamesGroup } from './ViewNamesGroup';

export const ToolBar = ({
                          localizer: { messages },
                          label,
                          view,
                          views,
                          onNavigate,
                          onView,
                          showType,
                          setShowType,
                          showWeekends,
                          setShowWeekends,
                          toolbarRightNode,
                          showToolbarAddButton,
                          showToolbarToggleWeekend,
                          showToolbarViewSwitcher,
                          addEventClick,
                          ...props
                        }) => {
  const { classes, cx } = ToolbarStyles({});
  return (
    <Group position='apart' mb={10}>
      <Group>
        <Group spacing={0}>
          <Box mr={10}>
            <Button
              size='xs'
              variant='outline'
              color='tertiary'
              onClick={() => onNavigate(navigate.TODAY)}
            >
              {messages.today}
            </Button>
          </Box>
          <ActionButton
            onClick={() => onNavigate(navigate.PREVIOUS)}
            tooltip={messages.previous}
            icon={<ChevronLeftIcon className={classes.navIcon} />}
          />
          <ActionButton
            onClick={() => onNavigate(navigate.NEXT)}
            tooltip={messages.next}
            icon={<ChevronRightIcon className={classes.navIcon} />}
          />
        </Group>
        <Box>
          <Text size='xl'>{capitalize(label)}</Text>
        </Box>
      </Group>


      <Group style={{ gap: 12 }}>
        <Select label={messages.display} value={showType} onChange={setShowType} data={
          [
            { label: messages.entirePeriod, value: 'full' },
            { label: messages.onlyInitAndEnd, value: 'startEnd' },
            { label: messages.onlyEnd, value: 'onlyEnd' }]
        } />
        {view !== RCBViews.DAY && showToolbarToggleWeekend ? (
          <Switch
            label={messages.showWeekends}
            labelPosition='end'
            checked={showWeekends}
            onChange={(event) =>
              typeof setShowWeekends === 'function' ? setShowWeekends(event) : null
            }
          />
        ) : null}
        {showToolbarViewSwitcher ? (
          <ViewNamesGroup
            views={views}
            messages={messages}
            current={view}
            classes={classes}
            onChange={(val) => onView(val)}
          />
        ) : null}

        {showToolbarAddButton ? (
          <IconButton color='primary' size='lg' rounded onClick={addEventClick}>
            <PlusIcon />
          </IconButton>
        ) : null}
        {toolbarRightNode}
      </Group>
    </Group>
  );
};
