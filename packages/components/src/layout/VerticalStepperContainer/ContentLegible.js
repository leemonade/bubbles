import React from 'react';
import { Box } from '../Box';

const ContentLegible = ({ children, navWidth }) => {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing[5],
        paddingLeft: 0,
        maxWidth: theme.breakpoints.lg - navWidth,
      })}
    >
      {children}
    </Box>
  );
};

export { ContentLegible };
