import React from 'react';
import { Box } from '@mantine/core';
import { TreeStyles } from './Tree.styles';

const NodePlaceholderRenderer = ({ node, depth }) => {
  const { classes, cx } = TreeStyles({}, { name: 'Tree' });
  const left = depth * 24;

  // return <div>{node.text}</div>;

  return (
    <Box className={classes.nodePlaceholderRoot} style={{ left }}>
      <Box className={classes.nodePlaceholder} />
    </Box>
  );
};

export { NodePlaceholderRenderer };
