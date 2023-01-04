import React, { Children, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';
import { ToolbarStyles } from './Toolbar.styles';
import { useDimensions } from '../../utils/use-dimensions';
import { ToolbarTool } from '../../tool/ToolbarTool/ToolbarTool';

export const TOOLBAR_DEFAULT_PROPS = {
  useAria: true,
};

export const TOOLBAR_PROP_TYPES = {
  useAria: PropTypes.bool,
};

const Toolbar = ({ children, useAria, toolbarLabel, className, ...props }) => {
  const { classes, cx } = ToolbarStyles({ name: 'Toolbar' });
  const toolbarRef = useRef();
  const originalChildren = Children.toArray(children).map((child) => (
    <Box key={child.key} ref={useRef()}>
      {child}
    </Box>
  ));
  const [childrenWidths, setChildrenWidths] = useState([]);
  const [toolbarChilds, setToolbarChilds] = useState([]);
  const [dropdownChilds, setDropdownChilds] = useState([]);
  const { width: maxWidth } = useDimensions(toolbarRef);

  useEffect(() => {
    if (maxWidth === 0) return;
    if (!childrenWidths[0]) {
      setChildrenWidths(
        originalChildren.map((child) => child.ref.current?.getBoundingClientRect().width)
      );
    }
  }, [maxWidth, originalChildren]);

  useEffect(() => {
    if (maxWidth === 0) return;
    let currentWidth = dropdownChilds.length > 0 ? 40 : 0;
    let newToolbarChilds = [];
    let newDropdownChilds = [];
    originalChildren.forEach((child, index, array) => {
      const nextWidth =
        currentWidth + childrenWidths[index] + (index === array.length - 1 ? 0 : 16);
      if (nextWidth > maxWidth) {
        newDropdownChilds.push(child);
      } else {
        newToolbarChilds.push(child);
        currentWidth = nextWidth;
      }
    });
    setDropdownChilds([...newDropdownChilds]);
    setToolbarChilds([...newToolbarChilds]);
  }, [maxWidth, childrenWidths]);

  return (
    <Box ref={toolbarRef} className={cx(classes.toolbar, className)} {...props}>
      {toolbarChilds}
      {dropdownChilds.length > 0 && (
        <Box className={classes.toolbarTool}>
          <ToolbarTool tools={dropdownChilds} useAria={useAria} toolbarLabel={toolbarLabel} />
        </Box>
      )}
    </Box>
  );
};

Toolbar.defaultProps = TOOLBAR_DEFAULT_PROPS;

Toolbar.propTypes = TOOLBAR_PROP_TYPES;

export { Toolbar };
