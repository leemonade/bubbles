import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Title, Group, Drawer as MantineDrawer } from '@mantine/core';
import {
  DotsHorizontalIcon,
  PencilIcon,
  ChevronLeftIcon,
  ArrowsExpandIcon,
  TrashIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Button } from '../../form/Button';
import { ActionButton } from '../../form/ActionButton';
import { EditPanelStyles } from './EditPanel.styles';

const EditPanel = forwardRef(
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
        onClose={() => props.setOpened(false)}
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
  },
);

EditPanel.displayName = 'EditPanel';
EditPanel.propTypes = {
  position: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  shadow: PropTypes.bool,
  onClose: PropTypes.func,
  transitionDuration: PropTypes.number,
  children: PropTypes.node,
  layoutButtonsRight: PropTypes.bool,
  ActionBack: PropTypes.bool,
  ActionExpand: PropTypes.bool,
  ActionEdit: PropTypes.bool,
  ActionDelete: PropTypes.bool,
  ActionMore: PropTypes.bool,
  LabelActionBack: PropTypes.string,
  LabelActionEdit: PropTypes.string,
  LabelActionDelete: PropTypes.string,
  LabelActionMore: PropTypes.string,
  EditPanelTitle: PropTypes.string,
  setOpened: PropTypes.func,
};

export { EditPanel };
