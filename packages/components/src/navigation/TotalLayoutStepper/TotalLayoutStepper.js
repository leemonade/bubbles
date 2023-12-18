import React from 'react';
import {
  TOTAL_LAYOUT_STEPPER_DEFAULT_PROPS,
  TOTAL_LAYOUT_STEPPER_PROP_TYPES,
} from './TotalLayoutStepper.constants';
import TotalLayoutStep from './TotalLayoutStep/TotalLayoutStep';
import { Stack } from '../../layout/Stack';

const TotalLayoutStepper = ({
  data = [],
  activeStep,
  completedSteps: completedStepsProp,
  lastValidStep,
}) => {
  const [completedSteps, setCompletedSteps] = React.useState(completedStepsProp || []);
  const isMounted = React.useRef(false);

  const getStepState = (step, index) => {
    if (completedSteps.includes(index)) {
      return step.status || 'completed';
    }
    if (index === activeStep) return 'current';
    return 'incomplete';
  };

  const getStepPosition = (index) => {
    if (index === 0) return 'start';
    if (index === data.length - 1) return 'end';
    if (index === lastValidStep) return 'end';
    return 'middle';
  };

  const renderSteps = () => {
    const stepsToShow = [];
    data.forEach((step, index) => {
      const stepProps = {
        label: step.label,
        state: getStepState(step, index),
        badge: step.badge,
        isActive: index === activeStep,
      };

      if (step.showStep)
        stepsToShow.push(
          <React.Fragment key={`step-${step.label}`}>
            <TotalLayoutStep {...stepProps} position={getStepPosition(index)} />
          </React.Fragment>,
        );
    });
    return stepsToShow;
  };

  // Effects ----------------------------------------------------------
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Completed steps
  React.useEffect(() => {
    if (!isMounted) return;
    setCompletedSteps([...new Set(completedStepsProp)]);
  }, [completedStepsProp]);

  return (
    <Stack
      style={{ width: 192, height: '100vh', background: '#f8f9fb', paddingTop: 24 }}
      direction="column"
    >
      {renderSteps()}
    </Stack>
  );
};

TotalLayoutStepper.defaultProps = TOTAL_LAYOUT_STEPPER_DEFAULT_PROPS;
TotalLayoutStepper.propTypes = TOTAL_LAYOUT_STEPPER_PROP_TYPES;

export { TotalLayoutStepper };
