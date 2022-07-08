import React, { useState } from 'react';
import { ArrowChevDownIcon } from '@bubbles-ui/icons/solid';
import { Box, Popover } from '@bubbles-ui/components';
import { Button } from '../../form/Button/Button';
import { ToolbarToolStyles } from './ToolbarTool.styles';

export const TOOLBAR_TOOL_DEFAULT_PROPS = {};

export const TOOLBAR_TOOL_PROP_TYPES = {};

const ToolbarTool = ({ tools, ...props }) => {
  const [isOpened, setIsOpened] = useState(false);

  const { classes } = ToolbarToolStyles({});
  return (
    <Popover
      opened={isOpened}
      onClose={() => setIsOpened(false)}
      position="bottom"
      placement="end"
      target={
        <Button
          {...props}
          icon={<ArrowChevDownIcon />}
          onClick={() => setIsOpened(!isOpened)}
          actived={isOpened}
        ></Button>
      }
    >
      <Box className={classes.root}>
        {tools.map((tool, index) => React.cloneElement(tool, { key: `tool .${index}` }))}
      </Box>
    </Popover>
  );
};

ToolbarTool.defaultProps = TOOLBAR_TOOL_DEFAULT_PROPS;
ToolbarTool.propTypes = TOOLBAR_TOOL_PROP_TYPES;

export { ToolbarTool };
