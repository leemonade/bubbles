import React, { forwardRef } from 'react';
import {Button} from './../../form'
import {Group, Title, Text, Modal as MantineModal } from '@mantine/core';
import { DeleteConfirmationStyles } from './DeleteConfirmation.styles';


export const DeleteConfirmation = forwardRef (
    (
        {
            size,
            hideCloseButton,
            onClose,
            title,
            ...props
        },
        ref
    ) => {
        const { classes, cx } = DeleteConfirmationStyles();
        return (
          <MantineModal
            {...props}
            onClose={() => setOpened(false)}
            ref={ref}
            size="xs"
            classNames={classes}
            hideCloseButton
          >
            <Group className={classes.Modalbody}>
              <Title order={1} className={classes.title}>
                {props.modaltitle}
              </Title>
              <Text component="p" align="center" className={classes.description}>
                {props.description}
              </Text>
            </Group>
            <Group className={classes.buttonsGroup02}>
              <Button variant="link" onClick={onClose}>
                {props.labelCancel}
              </Button>
              <Button color="fatic">{props.labelDelete}</Button>
            </Group>
          </MantineModal>
        );

    }
)