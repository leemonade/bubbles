import PropTypes from 'prop-types';
import { Children, useEffect, useRef, useState, createElement, cloneElement } from 'react';
import { Stack, Box } from '@bubbles-ui/components';
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
  const [toolbarChilds, setToolbarChilds] = useState([...originalChildren]);
  const [dropdownChilds, setDropdownChilds] = useState([]);
  const { width: maxWidth } = useDimensions(toolbarRef);

  useEffect(() => {
    if (!maxWidth) return;
    let currentWidth = 0;
    let newToolbarChilds = [];
    let newDropdownChilds = [];
    originalChildren.forEach((child, index, array) => {
      if (!originalChildren[index].ref) return;
      if (!originalChildren[index].ref.current) return;
      const nextWidth =
        currentWidth + child.ref.current.offsetWidth + (index === array.length - 1 ? 0 : 16);
      // const childCopy = { ...child };
      // childCopy.ref.current = {};
      // console.log(childCopy);
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

  console.log(originalChildren);

  return (
    <Box className={classes.root}>
      <Box ref={toolbarRef} className={classes.toolbar} {...props}>
        {toolbarChilds}
        {dropdownChilds.length > 0 && (
          <Box className={classes.dropdown}>
            <ToolbarTool tools={dropdownChilds} />
          </Box>
        )}
      </Box>
      <Box className={classes.hiddenChilds}>
        <Stack>{dropdownChilds}</Stack>
      </Box>
    </Box>
  );
};

Toolbar.defaultProps = TOOLBAR_DEFAULT_PROPS;

Toolbar.propTypes = TOOLBAR_PROP_TYPES;

export { Toolbar };
