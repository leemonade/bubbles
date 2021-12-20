import React, { forwardRef, useState } from 'react';
import { Box, Title, Group, Drawer as MantineDrawer, CloseIcon } from '@mantine/core';
import {
  DotsHorizontalIcon,
  PencilIcon,
  ChevronLeftIcon,
  ArrowsExpandIcon,
  TrashIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ActionButton, Button } from '../../form';
import { EditPanelStyles } from './EditPanel.styles';

export const EditPanel = forwardRef(
  ({ position, size, title, shadow, onClose, transitionDuration, ...props }, ref) => {
    const { classes, cx } = EditPanelStyles({});

    return (
      <MantineDrawer
        {...props}
        position="right"
        padding="md"
        size="760px"
        hideCloseButton
        transitionDuration={400}
        noOverlay
        noFocusTrap
        onClose={() => setOpened(false)}
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
                    {props.ActionEdit && (
                      <ActionButton
                        icon={<PencilIcon />}
                        tooltip={props.LabelActionEdit}
                      ></ActionButton>
                    )}
                    {props.ActionDelete && (
                      <ActionButton
                        icon={<TrashIcon />}
                        tooltip={props.LabelActionDelete}
                      ></ActionButton>
                    )}
                    {props.ActionMore && (
                      <ActionButton
                        icon={<DotsHorizontalIcon />}
                        tooltip={props.LabelActionMore}
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
                  {props.ActionEdit && (
                    <ActionButton
                      icon={<PencilIcon />}
                      tooltip={props.LabelActionEdit}
                    ></ActionButton>
                  )}
                  {props.ActionDelete && (
                    <ActionButton
                      icon={<TrashIcon />}
                      tooltip={props.LabelActionDelete}
                    ></ActionButton>
                  )}
                  {props.ActionMore && (
                    <ActionButton
                      icon={<DotsHorizontalIcon />}
                      tooltip={props.LabelActionMore}
                    ></ActionButton>
                  )}
                </Group>
                <ActionButton icon={<XIcon />} tooltip="Close" onClick={onClose}></ActionButton>
              </Group>
            )}

            <Title id="drawer-title" order={1} {...props} className={classes.title}>
              {props.EditPanelTitle}
            </Title>
          </header>
          <Box id="drawer-body" className={classes.body}>
            {props.children}
          </Box>

          <Group className={classes.buttonsGroup01}>
            <Button variant="link">Cancel</Button>
            <Button>Save</Button>
          </Group>
        </>
      </MantineDrawer>
    );
  }
);
