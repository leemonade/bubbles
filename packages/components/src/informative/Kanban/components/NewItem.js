import React from 'react';
import PropTypes from 'prop-types';
import { noop, capitalize } from 'lodash';
import { AddCircleIcon } from '@bubbles-ui/icons/solid';
import { UnstyledButton, createStyles } from '@mantine/core';
import { Box } from '../../../layout/Box';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.other.global.border.radius.md,
    border: `2px dashed ${theme.other.dropzone.border.color.default}`,
    cursor: 'pointer',
    gap: 4,
    width: '100%',
    paddingBlock: theme.spacing[7],
    '&:hover': {
      backgroundColor: theme.other.dropzone.background.color.hover,
    },
  },
  label: {
    color: theme.other.global.content.color.text.default,
    ...theme.other.global.content.typo.body['md--bold'],
  },
  icon: {
    color: theme.other.global.content.color.icon.default,
  },
}));

function NewItem({ label, onClick = noop }) {
  const { classes } = useStyles({}, { name: 'NewLibraryCardButton' });
  return (
    <UnstyledButton className={classes.root} onClick={onClick}>
      <Box className={classes.icon}>
        <AddCircleIcon width={24} height={24} />
      </Box>
      <Box className={classes.label}>{capitalize(label)}</Box>
    </UnstyledButton>
  );
}

NewItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { NewItem };
