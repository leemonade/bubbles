import React, { forwardRef, useState } from "react";
import { Box, Title, Button, Group, Drawer as MantineDrawer, CloseIcon} from "@mantine/core";
import { DotsHorizontalIcon, PencilIcon, ChevronLeftIcon, ArrowsExpandIcon, TrashIcon, XIcon  } from "@heroicons/react/outline";
import { ActionButton } from "../../form/ActionButton/ActionButton";
import { DetailPanelStyles } from "./DetailPanel.styles";
 

export const DetailPanel = forwardRef (
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
    
    const { classes, cx } = DetailPanelStyles({ }); 

    return (
      <MantineDrawer
        {...props}
        position="right"
        padding="md" 
        size="640px"
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
              </Group>
              <ActionButton
                leftIcon={<XIcon />}
                description="Close"
                onClick={onClose}
              ></ActionButton>
            </Group>
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
)