import React from 'react';
import { capitalize } from 'lodash';
import {
  ActionButton,
  Box,
  Button,
  Group,
  InputWrapper,
  Select,
  Switch,
  Text,
  Title,
} from '@bubbles-ui/components';
import { navigate, views as RCBViews } from 'react-big-calendar/lib/utils/constants';
import {
  AddIcon as PlusIcon,
  ChevLeftIcon as ChevronLeftIcon,
  ChevRightIcon as ChevronRightIcon,
} from '@bubbles-ui/icons/outline';
import { ToolbarStyles } from './Toolbar.styles';
import { ViewNamesGroup } from './ViewNamesGroup';
import { TOOLBAR_PROPTYPES } from './Toolbar.constants';

const ToolBar = ({
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
}) => {
  const { classes } = ToolbarStyles({}, {name: 'CalendarToolbar'});
  return (
    <Group position="apart" mb={10}>
      <Group spacing={4}>
        <Group spacing={0}>
          <Box mr={10}>
            <Button className={classes.todayButton} variant="outline" onClick={() => onNavigate(navigate.TODAY)}>
              {messages.today}
            </Button>
          </Box>
          <ActionButton
            data-testid="chevron-left"
            onClick={() => onNavigate(navigate.PREVIOUS)}
            tooltip={messages.previous}
            icon={<ChevronLeftIcon className={classes.navIcon} />}
          />
          <ActionButton
            data-testid="chevron-right"
            onClick={() => onNavigate(navigate.NEXT)}
            tooltip={messages.next}
            icon={<ChevronRightIcon className={classes.navIcon} />}
          />
        </Group>
        <Title order={4}>{capitalize(label)}</Title>
      </Group>

      <Group style={{ gap: 12 }}>
        <Box>
          <Select
            value={showType}
            ariaLabelledby="display"
            ariaLabel="display"
            onChange={setShowType}
            data={[
              { label: messages.entirePeriod, value: 'full' },
              { label: messages.onlyInitAndEnd, value: 'startEnd' },
              { label: messages.onlyEnd, value: 'onlyEnd' },
            ]}
          />
        </Box>
        {view !== RCBViews.DAY && showToolbarToggleWeekend ? (
          <Switch
            label={messages.showWeekends}
            labelPosition="end"
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
          <Button leftIcon={<PlusIcon />} onClick={addEventClick}>
            {messages.new}
          </Button>
        ) : null}
        {toolbarRightNode}
      </Group>
    </Group>
  );
};

ToolBar.propTypes = TOOLBAR_PROPTYPES;

export default ToolBar;
export { ToolBar };
