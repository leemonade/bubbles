import React from 'react';
import { Skeleton } from '@mantine/core';
import { Stack } from '../../../layout';

function SkeletonDefault() {
  return (
    <Stack
      spacing={5}
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: '100%' }}
    >
      <Skeleton height={120} width={120} radius={60} />
      <Skeleton height={26} width={120} radius={30} />
    </Stack>
  );
}

export { SkeletonDefault };
