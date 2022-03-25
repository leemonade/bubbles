import PropTypes from 'prop-types';
import { Children, useEffect, useRef, useState } from 'react';
import { Box } from '@bubbles-ui/components';
import { ToolbarStyles } from './Toolbar.styles';
import { useDimensions } from '../../utils/use-dimensions';
import { ToolbarTool } from '../../tool/ToolbarTool/ToolbarTool';

export const TOOLBAR_DEFAULT_PROPS = {};

export const TOOLBAR_PROP_TYPES = {};

const Toolbar = ({ children, ...props }) => {
  const { classes, cx } = ToolbarStyles({});
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
    if (!childrenWidths[0]) {
      setChildrenWidths(
        originalChildren.map((child) => child.ref.current?.getBoundingClientRect().width)
      );
    }
  });

  useEffect(() => {
    // if (maxWidth % 2 !== 0) return;
    let currentWidth = dropdownChilds.length > 0 ? 40 : 0;
    let newToolbarChilds = [];
    let newDropdownChilds = [];
    originalChildren.forEach((child, index, array) => {
      const nextWidth =
        currentWidth +
        childrenWidths[index] +
        // (dropdownChilds.length > 0 ? 40 : 0) +
        (index === array.length - 1 ? 0 : 16);
      if (nextWidth > maxWidth) {
        newDropdownChilds.push(child);
      } else {
        newToolbarChilds.push(child);
        currentWidth = nextWidth;
      }
    });
    setDropdownChilds([...newDropdownChilds]);
    setToolbarChilds([...newToolbarChilds]);
  }, [maxWidth]);

  return (
    <Box className={classes.root}>
      <Box ref={toolbarRef} className={classes.toolbar} {...props}>
        {toolbarChilds}
        {dropdownChilds.length > 0 && (
          <Box className={classes.toolbarTool}>
            <ToolbarTool tools={dropdownChilds} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

Toolbar.defaultProps = TOOLBAR_DEFAULT_PROPS;

Toolbar.propTypes = TOOLBAR_PROP_TYPES;

export { Toolbar };
