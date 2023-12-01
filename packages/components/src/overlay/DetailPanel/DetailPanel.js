import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Title, Group, Drawer as MantineDrawer } from '@mantine/core';
import { ChevronLeftIcon, ArrowsExpandIcon, XIcon } from '@heroicons/react/outline';
import { ActionButton } from '../../form/ActionButton/ActionButton';
import { DetailPanelStyles } from './DetailPanel.styles';

const DetailPanel = forwardRef(
  ({ position, size, title, shadow, onClose, transitionDuration, ...props }, ref) => {
    const { classes, cx } = DetailPanelStyles({});

    return (
      <MantineDrawer
        {...props}
        position="right"
        padding="md"
        size="640px"
        onClose={() => props.setOpened(false)}
        transitionDuration={400}
        hideCloseButton
        noOverlay
        noFocusTrap
        aria-labelledby="drawer-title"
        aria-describedby="drawer-body"
        closeButtonLabel="Close drawer"
        ref={ref}
        classNames={classes}
      >
        <>
          <header {...props}>
            {props.layoutButtonsRight ? (
              <Group className={classes.Actions}>
                <Box m={0}>
                  {props.ActionBack && (
                    <ActionButton icon={<ChevronLeftIcon />}>{props.LabelActionBack}</ActionButton>
                  )}
                </Box>
                <Group className={cx(classes.RRActions, classes.RRActionsRight)}>
                  <Box m={0}>
                    {props.ActionExpand && (
                      <ActionButton
                        icon={<ArrowsExpandIcon />}
                        tooltip="Open as page"
                      ></ActionButton>
                    )}
                  </Box>
                  <Box m={0}>
                    <ActionButton icon={<XIcon />} tooltip="Close" onClick={onClose}></ActionButton>
                  </Box>
                </Group>
              </Group>
            ) : (
              <Group className={classes.Actions}>
                <Group className={classes.RRActions}>
                  {props.ActionBack && (
                    <ActionButton
                      icon={<ChevronLeftIcon />}
                      tooltip={props.LabelActionBack}
                    ></ActionButton>
                  )}
                  {props.ActionExpand && (
                    <ActionButton icon={<ArrowsExpandIcon />} tooltip="Open as page"></ActionButton>
                  )}
                </Group>
                <ActionButton icon={<XIcon />} tooltip="Close" onClick={onClose}></ActionButton>
              </Group>
            )}
            <Title id="drawer-title" order={1} {...props} className={classes.title}>
              {props.DetailPanelTitle}
            </Title>
          </header>
          <Box id="drawer-body" className={classes.body}>
            {props.children}
          </Box>
        </>
      </MantineDrawer>
    );
  },
);

DetailPanel.displayName = 'DetailPanel';
DetailPanel.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  title: PropTypes.string,
  shadow: PropTypes.bool,
  onClose: PropTypes.func,
  transitionDuration: PropTypes.number,
  children: PropTypes.node,
  ActionBack: PropTypes.bool,
  ActionExpand: PropTypes.bool,
  LabelActionBack: PropTypes.string,
  layoutButtonsRight: PropTypes.bool,
  DetailPanelTitle: PropTypes.string,
  setOpened: PropTypes.func,
};
export { DetailPanel };
