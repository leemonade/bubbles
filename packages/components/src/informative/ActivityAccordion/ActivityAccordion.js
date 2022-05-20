import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '@mantine/core';
import { Box, Stack } from '../../layout';
import { Text } from '../../typography';
import { ActivityAccordionStyles } from './ActivityAccordion.styles';
import {
  ACTIVITY_ACCORDION_DEFAULT_PROPS,
  ACTIVITY_ACCORDION_PROP_TYPES,
} from './ActivityAccordion.constants';

function AccordionLabel({ label, icon, rightSection }) {
  return (
    <Stack fullWidth alignItems="center">
      <Stack fullWidth justifyContent="start" alignItems="center" spacing={4}>
        {icon ? React.cloneElement(icon, { width: 22, height: 22 }) : null}
        <Text size="md" strong color="primary" role="productive">
          {label}
        </Text>
      </Stack>
      <Box skipFlex>{rightSection || null}</Box>
    </Stack>
  );
}

const ActivityAccordion = ({ children, ...props }) => {
  const { classes, cx } = ActivityAccordionStyles({}, { name: 'ActivityAccordion' });

  return (
    <Accordion className={classes.root} classNames={classes} iconPosition="right">
      {React.Children.map(children, (child) => {
        const { children: panelContent, color, ...panelProps } = child.props;
        return (
          <Accordion.Item label={<AccordionLabel {...panelProps} />}>
            <Box className={cx(classes.content, { [classes.contentSolid]: color === 'solid' })}>
              {panelContent}
            </Box>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

ActivityAccordion.defaultProps = ACTIVITY_ACCORDION_DEFAULT_PROPS;
ActivityAccordion.propTypes = ACTIVITY_ACCORDION_PROP_TYPES;

export { ActivityAccordion };
