import React, { Children, useEffect, useMemo, useRef, useState } from 'react';
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
  const prevMaxWidth = useRef(maxWidth);
  const allChildrenWidth = useMemo(
    () =>
      childrenWidths.reduce(
        (prev, current, index) =>
          prev + (current || 0) + (index === childrenWidths.length - 1 ? 0 : 12),
        0
      ),
    [childrenWidths]
  );

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
    const isAscending = prevMaxWidth.current < maxWidth;
    let currentWidth = dropdownChilds.length > 0 ? 40 : 0;
    let newToolbarChilds = [];
    let newDropdownChilds = [];
    originalChildren.forEach((child, index, array) => {
      const padding =
        (index === array.length - 1 && dropdownChilds.length <= 0) ||
        (isAscending && maxWidth > allChildrenWidth)
          ? 0
          : 12;
      const childWidth = childrenWidths[index] || 0;
      const nextWidth = currentWidth + childWidth + padding;
      if (nextWidth > maxWidth) {
        newDropdownChilds.push(child);
      } else {
        newToolbarChilds.push(child);
        currentWidth = nextWidth;
        prevMaxWidth.current = maxWidth;
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
