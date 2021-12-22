import React, { useEffect } from 'react';
import { Box } from '@mantine/core';
import { isString } from 'lodash';
import { Text } from '../../typography';
import { TreeStyles } from './Tree.styles';

const NodeDragPreview = ({ monitorProps, ...props }) => {
  const { item } = monitorProps;
  const { classes, cx } = TreeStyles({}, { name: 'Tree' });

  return (
    <Box className={classes.nodeDragPreviewRoot}>
      <Box className={classes.nodeDragPreview}>
        <Box className={classes.nodeDragPreviewHandler}>
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
        {isString(item.text) ? <Text>{item.text}</Text> : item.text}
      </Box>
    </Box>
  );
};

export { NodeDragPreview };
