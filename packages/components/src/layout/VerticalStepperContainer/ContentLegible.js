import React from 'react';
import { Box } from '../Box';

const ContentLegible = ({ children, navWidth }) => {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing[5],
        paddingLeft: 0,
        maxWidth: theme.breakpoints['xl'] - navWidth,
      })}
    >
      {children}
      Holaaaaaaa
    </Box>
  );
};

export { ContentLegible };
