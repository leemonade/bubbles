import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Center, SegmentedControl as MantineSegmentedControl } from '@mantine/core';
import { RadioGroupStyles } from './RadioGroup.styles';
import { Radio } from '../Radio/Radio';

const RadioGroup = forwardRef(({ ...props }, ref) => {
  const { classes, cx } = RadioGroupStyles({});

  return (
    <MantineSegmentedControl
      {...props}
      ref={ref}
      classNames={classes}
      data={[
        {
          value: 'preview',
          label: (
            <Radio helpText="Help text" withHelpText={true} variant="boxed">
              Radio button label
            </Radio>
          ),
        },
        {
          value: 'code',
          label: <Radio>Radio button label</Radio>,
        },
        {
          value: 'export',
          label: <Radio>Radio button label</Radio>,
        },
      ]}
    ></MantineSegmentedControl>
  );
});

RadioGroup.propTypes = {
  //
};

export { RadioGroup };
