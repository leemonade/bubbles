import * as React from 'react';
import { Badge } from '../../../informative';
import { Stack } from '../../../layout/Stack';
import { Text } from '../../../typography';
import TotalLayoutProgress from '../TotalLayoutProgress/TotalLayoutProgress';
import { TotalLayoutStepStyles } from './TotalLayoutStep.styles';

const TotalLayoutStep = ({ state, label, badge, isActive, position }) => {
  const isCompleted = state === 'completed' || state === 'KO';
  const { classes } = TotalLayoutStepStyles(
    {
      isActive,
      isCompleted,
    },
    { name: 'Step' },
  );

  return (
    <Stack style={{ height: 50 }}>
      <TotalLayoutProgress
        style={{ width: 24 }}
        state={state}
        position={position}
        isCurrent={isActive}
        isCompleted={isCompleted}
      />
      <Stack className={classes.labelContainer} alignItems="center">
        <Text className={classes.label}>{label}</Text>
        {badge && (
          <Badge
            className={classes.badge}
            label={badge}
            severity={'success'}
            radius={'default'}
            closable={false}
            size={'xs'}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default TotalLayoutStep;
