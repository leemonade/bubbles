import React, { forwardRef, useState } from 'react';
import { Box, Title, Button, Group, Drawer as MantineDrawer, CloseIcon } from '@mantine/core';
import { ChevronLeftIcon, ArrowsExpandIcon, XIcon } from '@heroicons/react/outline';
import { ActionButton } from '../../form/ActionButton/ActionButton';
import { DetailPanelStyles } from './DetailPanel.styles';

export const DetailPanel = forwardRef(
  ({ position, size, title, shadow, onClose, transitionDuration, ...props }, ref) => {
    const { classes, cx } = DetailPanelStyles({});

    return (
      <MantineDrawer
        {...props}
        position="right"
        padding="md"
        size="640px"
        onClose={() => setOpened(false)}
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
                    <ActionButton leftIcon={<ChevronLeftIcon />}>
                      {props.LabelActionBack}
                    </ActionButton>
                  )}
                </Box>
                <Group className={cx(classes.RRActions, classes.RRActionsRight)}>
                  <Box m={0}>
                    {props.ActionExpand && (
                      <ActionButton
                        leftIcon={<ArrowsExpandIcon />}
                        description="Open as page"
                      ></ActionButton>
                    )}
                  </Box>
                  <Box m={0}>
                    <ActionButton
                      leftIcon={<XIcon />}
                      description="Close"
                      onClick={onClose}
                    ></ActionButton>
                  </Box>
                </Group>
              </Group>
            ) : (
              <Group className={classes.Actions}>
                <Group className={classes.RRActions}>
                  {props.ActionBack && (
                    <ActionButton
                      leftIcon={<ChevronLeftIcon />}
                      description={props.LabelActionBack}
                    ></ActionButton>
                  )}
                  {props.ActionExpand && (
                    <ActionButton
                      leftIcon={<ArrowsExpandIcon />}
                      description="Open as page"
                    ></ActionButton>
                  )}
                </Group>
                <ActionButton
                  leftIcon={<XIcon />}
                  description="Close"
                  onClick={onClose}
                ></ActionButton>
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
  }
);
