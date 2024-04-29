import React from 'react';
import { Skeleton } from '@mantine/core';
import { Stack } from '../../../layout';

function SkeletonCompact() {
  return (
    <Stack spacing={5} alignItems="center">
      <Skeleton height={56} width={56} radius={30} />
      <Skeleton height={26} width={120} radius={30} />
    </Stack>
  );
}

export { SkeletonCompact };
