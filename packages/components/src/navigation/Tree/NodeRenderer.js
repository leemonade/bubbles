import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { AddCircleIcon } from '@bubbles-ui/icons/outline';
import { useDragOver } from '@leemonade/react-dnd-treeview';
import { Box } from '../../layout/Box';
import { Button } from '../../form';
import { Text } from '../../typography';
import { NodeActions } from './NodeActions';
import { TreeStyles } from './Tree.styles';

const NodeRenderer = ({
  node,
  depth,
  isOpen,
  onToggle,
  isSelected,
  allowDropOutside,
  allowMultipleOpen,
  allowDragParents,
  onAdd,
  onSelect,
  hasChild,
  lowerSiblingsCount,
  hasOpenSiblings,
  siblingIndex,
  ...props
}) => {
  const [showButton, setShowButton] = useState(false);
  const [hover, setHover] = useState(false);
  const { type } = node;
  const isButton = type === 'button';
  const indent = (isButton ? Math.max(0, depth - 1) : depth) * 24 + (!hasChild ? 10 : 0);
  const dragOverProps =
    allowDropOutside && allowMultipleOpen ? useDragOver(node.id, isOpen, onToggle) : {};

  useEffect(() => {
    if (!hasOpenSiblings && isButton) {
      setShowButton(true);
    }
    if (hasOpenSiblings && isButton) {
      setShowButton(false);
    }
  }, [hasOpenSiblings, showButton, isButton]);

  // ----------------------------------------------------------------------
  // HANDLERS

  const handleToggle = (e) => {
    e.stopPropagation();
    if (hasChild) {
      onToggle(node.id);
    }
  };
  const handleSelect = (e) => {
    e.stopPropagation();
    if (node.data?.action !== 'add') {
      onSelect(node, () => handleToggle(e));
    }
  };

  const handleOnAdd = () => {
    if (onAdd && node.data?.action === 'add') {
      onAdd(node);
    }
  };

  const { classes, cx } = TreeStyles({}, { name: 'Tree' });
  return (
    <Box
      className={cx(classes.treeNode, {
        [classes.nodeDefault]: !isButton,
        [classes.nodeDefaultHover]: hover && !isButton,
        [classes.nodeWithChildren]: hasChild && !isSelected,
        [classes.nodeNoChildren]: !hasChild && !isSelected && !isButton,
        [classes.nodeSelected]: isSelected,
        [classes.nodeButton]: isButton,
        [classes.nodeHidden]: isButton && hasOpenSiblings,
        [classes.nodeHiddenButton]: isButton && !showButton,
        [classes.nodeShowButton]: isButton && showButton,
      })}
      style={{ marginLeft: indent }}
      onClick={handleSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      {...dragOverProps}
    >
      {/* TOGGLE ARROW */}
      {hasChild && !isSelected && (
        <Box
          onClick={handleToggle}
          className={cx(classes.toggle, {
            [classes.toggleOpened]: isOpen,
            [classes.toggleClosed]: !isOpen,
          })}
        >
          <svg
            className={cx(classes.toggleIcon, { [classes.toggleIconHover]: hover })}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.2805 5.43C4.29449 5.44755 4.30952 5.46425 4.32551 5.48C4.50458 5.65892 4.74736 5.75943 5.00051 5.75943C5.25365 5.75943 5.49643 5.65892 5.67551 5.48C5.69149 5.46425 5.70652 5.44755 5.72051 5.43L9.2 0.7615C9.25274 0.690532 9.28471 0.606304 9.29235 0.51822C9.29999 0.430135 9.283 0.34166 9.24327 0.262672C9.20355 0.183685 9.14265 0.117293 9.06737 0.0709094C8.9921 0.0245258 8.90542 -2.42472e-05 8.81701 1.79704e-08H1.18551C1.09709 -2.42472e-05 1.01041 0.0245258 0.935135 0.0709094C0.859863 0.117293 0.798964 0.183685 0.759237 0.262672C0.71951 0.34166 0.702518 0.430135 0.710159 0.51822C0.717799 0.606304 0.749771 0.690532 0.802505 0.7615L4.2805 5.43Z"
              fill="currentColor"
            />
          </svg>
        </Box>
      )}

      {/* NODE LINES */}
      {!hasChild && !isButton && !isSelected && (
        <Box
          className={cx(classes.treeNodeLines, {
            [classes.treeNodeLinesFirstItem]: siblingIndex === 0,
            [classes.treeNodeLinesItems]: siblingIndex > 0,
            [classes.treeNodeLinesAlone]: lowerSiblingsCount === 0,
          })}
        />
      )}

      <Box className={classes.nodeContent}>
        {/* DRAG HANDLER */}
        {!isButton &&
          !isSelected &&
          ((allowDragParents && !isOpen && !hasOpenSiblings) || !hasChild) && (
            <Box className={cx(classes.dragHandler, { [classes.dragHandlerHover]: hover })}>
              <svg
                width="14"
                height="6"
                viewBox="0 0 14 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.333332 4.33301H13.3333" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0.333332 1.6665H13.3333" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Box>
          )}

        {/* TITLE */}
        {isButton ? (
          <Box className={classes.buttonWrapper}>
            <Button
              color="primary"
              variant="light"
              size="xs"
              type="button"
              leftIcon={<AddCircleIcon />}
              onClick={handleOnAdd}
            >
              {node.text}
            </Button>
          </Box>
        ) : (
          <>
            {isString(node.text) ? (
              <Text
                className={cx({
                  [classes.nodeTextDefault]: !isSelected,
                  [classes.nodeTextSelected]: isSelected,
                  [classes.nodeTextDefaultHover]: hover && !isSelected,
                })}
              >
                {node.text}
              </Text>
            ) : (
              node.text
            )}
          </>
        )}
      </Box>

      {/* ACTION BUTTONS */}
      <Box className={classes.nodeActions}>
        <NodeActions node={node} {...props} hover={hover} />
      </Box>
    </Box>
  );
};

NodeRenderer.propTypes = {
  node: PropTypes.object,
  isOpen: PropTypes.bool,
  isSelected: PropTypes.bool,
  allowDropOutside: PropTypes.bool,
  allowMultipleOpen: PropTypes.bool,
  allowDragParents: PropTypes.bool,
  hasChild: PropTypes.bool,
  hasOpenSiblings: PropTypes.bool,
  depth: PropTypes.number,
  lowerSiblingsCount: PropTypes.number,
  siblingIndex: PropTypes.number,
  onToggle: PropTypes.func,
  onAdd: PropTypes.func,
  onSelect: PropTypes.func,
};

export { NodeRenderer };
