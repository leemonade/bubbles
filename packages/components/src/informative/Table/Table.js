import React, { forwardRef } from 'react';
import { Table as MantineTable } from '@mantine/core';

const Table = forwardRef(({ children, ...props }, ref) => {
  return (
    <MantineTable ref={ref} {...props}>
      {children}
    </MantineTable>
  );
});

export { Table };
