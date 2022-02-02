import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Stack, Stepper, Title } from '@bubbles-ui/components';
import { SetupStyles } from './Setup.styles';

export const SETUP_DEFAULT_PROPS = {
  labels: {},
  values: {},
  editable: true,
};
export const SETUP_PROP_TYPES = {
  labels: PropTypes.object,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  values: PropTypes.object,
  editable: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onSave: PropTypes.func,
};

const Setup = ({ labels, data, values, editable, onNext, onPrev, onSave, ...props }) => {
  const [sharedData, setSharedData] = useState(values);
  const [active, setActive] = useState(0);
  const [callOnSave, setCallOnSave] = useState(false);

  const { classes, cx } = SetupStyles({}, { name: 'APSetup' });

  useEffect(() => {
    if (callOnSave) {
      isFunction(onSave) && onSave(sharedData);
      setCallOnSave(false);
    }
  }, [callOnSave]);

  useEffect(() => {
    if (JSON.stringify(sharedData) !== JSON.stringify(values)) {
      setSharedData(values);
    }
  }, [values]);

  const handleOnNext = () => {
    if (active < data.length - 1) {
      setActive(active + 1);
      isFunction(onNext) && onNext(sharedData);
    } else {
      setCallOnSave(true);
    }
  };

  const handleOnPrev = () => {
    if (active > 0) {
      setActive(active - 1);
      isFunction(onPrev) && onPrev(sharedData);
    }
  };

  return (
    <Stack className={classes.root} direction="column" spacing={7} fullWidth>
      <Stack justifyContent="space-between" fullWidth>
        <Title order={2}>{labels.title}</Title>
      </Stack>
      <Stepper
        {...props}
        active={active}
        data={data}
        onNext={handleOnNext}
        onPrev={handleOnPrev}
        sharedData={sharedData}
        setSharedData={setSharedData}
        editable={editable}
        classNames={classes}
      />
    </Stack>
  );
};

Setup.defaultProps = SETUP_DEFAULT_PROPS;
Setup.propTypes = SETUP_PROP_TYPES;

export { Setup };
