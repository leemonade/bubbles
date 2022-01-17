import React from 'react';
import PackageInfo from './../../package.json';
import { Title } from '@mantine/core';

export const Welcome = () => {
  return (
    <div>
      <Title order={1} sx={({ colors }) => ({ color: colors.interactive01 })}>
        Bubbles Editors
      </Title>
      <Title
        order={2}
        sx={({ colors }) => ({ color: colors.text02 })}
      >{`React v${PackageInfo.version}`}</Title>
    </div>
  );
};
