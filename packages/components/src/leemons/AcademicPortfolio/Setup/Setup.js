import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { useScrollIntoView } from '@mantine/hooks';
import { Box, Stack } from '../../../layout';
import { Stepper } from '../../../navigation/';
import { Title } from '../../../typography';
import { Button } from '../../../form';
import { SetupStyles } from './Setup.styles';

export const SETUP_DEFAULT_PROPS = {};
export const SETUP_PROP_TYPES = {
  labels: PropTypes.shape({ title: PropTypes.string, buttonSave: PropTypes.string }),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onSave: PropTypes.func,
};

const Setup = ({ labels, data, onNext, onPrev, onSave, ...props }) => {
  const [sharedData, setSharedData] = useState(null);
  const [active, setActive] = useState(0);

  const { scrollIntoView, targetRef } = useScrollIntoView({ duration: 0 });

  const { classes, cx } = SetupStyles({}, { name: 'APSetup' });

  const handleSave = () => {
    isFunction(onSave) && onSave(sharedData);
  };

  const handleOnNext = () => {
    if (active < data.length - 1) {
      setActive(active + 1);
      scrollIntoView({ alignment: 'top' });
      isFunction(onNext) && onNext(sharedData);
    } else {
      handleSave();
    }
  };

  const handleOnPrev = () => {
    if (active > 0) {
      setActive(active - 1);
      scrollIntoView({ alignment: 'top' });
      isFunction(onPrev) && onPrev(sharedData);
    }
  };

  return (
    <Stack ref={targetRef} className={classes.root} direction="column" spacing={7} fullWidth>
      <Stack justifyContent="space-between" fullWidth>
        <Title>{labels.title}</Title>
      </Stack>
      <Stepper
        {...props}
        active={active}
        data={data}
        onNext={handleOnNext}
        onPrev={handleOnPrev}
        sharedData={sharedData}
        setSharedData={setSharedData}
        classNames={classes}
      />
    </Stack>
  );
};

Setup.defaultProps = SETUP_DEFAULT_PROPS;
Setup.propTypes = SETUP_PROP_TYPES;

export { Setup };
