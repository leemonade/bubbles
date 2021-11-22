import React, { forwardRef, useState } from "react";
import { Box, Title, Button, Group, Drawer as MantineDrawer, CloseIcon} from "@mantine/core";
import { DotsHorizontalIcon, PencilIcon, ChevronLeftIcon, ArrowsExpandIcon, TrashIcon, XIcon  } from "@heroicons/react/outline";
import { ActionButton } from "../../form/ActionButton/ActionButton";
import { EditPanelStyles } from "./EditPanel.styles";
 

 


export const EditPanel = forwardRef (
    (
        {
            position,
            size,
            title,
            shadow,
            onClose,
            transitionDuration,
            ...props
        },        
        ref
    ) => {
    
    const { classes, cx } = EditPanelStyles({ }); 

    return (
      <MantineDrawer
        {...props}
        position="right"
        padding="md" 
        size="760px"
        hideCloseButton
        onClose={() => setOpened(false)}
        transitionDuration={400}
        noOverlay
        aria-labelledby="drawer-title"
        aria-describedby="drawer-body"
        closeButtonLabel="Close drawer"
        ref={ref}
        classNames={classes}
      >
        <>
          <header {...props}>
            <Group className={classes.Actions}>
              <Group className={classes.RRActions}>
                {props.ActionBack && (
                  <ActionButton leftIcon={<ChevronLeftIcon />} description="Back"></ActionButton>
                )}
                {props.ActionExpand && (
                  <ActionButton
                    leftIcon={<ArrowsExpandIcon />}
                    description="Open as page"
                  ></ActionButton>
                )}
                {props.ActionEdit && (
                  <ActionButton leftIcon={<PencilIcon />} description="Edit"></ActionButton>
                )}
                {props.ActionDelete && (
                  <ActionButton leftIcon={<TrashIcon />} description="Delete"></ActionButton>
                )}
                {props.ActionMore && (
                  <ActionButton
                    leftIcon={<DotsHorizontalIcon />}
                    description="More actions"
                  ></ActionButton>
                )}
              </Group>
              <ActionButton
                leftIcon={<XIcon />}
                description="Close"
                onClick={onClose}
              ></ActionButton>
            </Group>
            <Title id="drawer-title" order={1} {...props} className={classes.title}>
              {props.EditPanelTitle}
            </Title>
          </header>
          <Box id="drawer-body" className={classes.body}>
            {props.children}
          </Box>

          <Group className={classes.buttonsGroup01} position="apart">
            <Button variant="link">Cancel</Button>
            <Button>Save</Button>
          </Group>
        </>
      </MantineDrawer>
    );    

    }
)