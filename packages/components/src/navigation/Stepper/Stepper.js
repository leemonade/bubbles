import React, { forwardRef, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Stepper as MantineStepper } from '@mantine/core';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { PageContainer } from '../../layout';
import { StepperStyles } from './Stepper.styles';

export const STEPPER_ORIENTATIONS = ['horizontal', 'vertical'];

export const STEPPER_DEFAULT_PROPS = {
  active: 0,
  orientation: 'horizontal',
  navWidth: 'auto',
  usePageContainer: false,
};
export const STEPPER_PROP_TYPES = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  orientation: PropTypes.oneOf(STEPPER_ORIENTATIONS),
  active: PropTypes.number,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  navWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stickyAt: PropTypes.number,
  usePageContainer: PropTypes.bool,
};

function ProgressIcon() {
  return (
    <svg width="20" height="20" viewBox="1 1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.3722 10V6.875"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.3722 10L14.278 13.9067"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

const Stepper = forwardRef(
  (
    {
      title,
      buttonLabel,
      data,
      editable,
      onNext,
      onPrev,
      sharedData,
      setSharedData,
      active: activeProp,
      orientation,
      navWidth,
      stickyAt,
      usePageContainer,
      ...props
    },
    ref
  ) => {
    const [active, setActive] = useState(activeProp);
    const isVertical = useMemo(() => orientation === 'vertical', [orientation]);
    const { classes, cx } = StepperStyles(
      { isVertical, navWidth, stickyAt, usePageContainer },
      { name: 'Stepper' }
    );

    useEffect(() => {
      if (activeProp !== active) {
        setActive(activeProp);
      }
    }, [activeProp]);

    const handleNextStep = (page) => {
      setActive(page);
      isFunction(onNext) && onNext(page);
    };
    const handlePrevStep = (page) => {
      setActive(page);
      isFunction(onPrev) && onPrev(page);
    };

    return (
      <MantineStepper
        {...props}
        ref={ref}
        orientation={orientation}
        iconSize={12}
        iconPosition={isVertical ? 'right' : 'left'}
        active={active}
        classNames={classes}
      >
        {data.map((item, index) => (
          <MantineStepper.Step
            key={index}
            label={item.label}
            description={item.description}
            icon={active === index ? <ProgressIcon /> : <></>}
            completedIcon={<CheckIcon />}
          >
            {React.cloneElement(item.content, {
              ...item.content.props,
              onNext: () => handleNextStep(index + 1),
              onPrevious: () => handlePrevStep(index - 1),
              setSharedData,
              sharedData,
              editable,
            })}
          </MantineStepper.Step>
        ))}
      </MantineStepper>
    );
  }
);

Stepper.defaultProps = STEPPER_DEFAULT_PROPS;
Stepper.propTypes = STEPPER_PROP_TYPES;

export { Stepper };
