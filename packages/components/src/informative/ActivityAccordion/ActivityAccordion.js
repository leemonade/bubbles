import React from 'react';
import { Accordion } from '@mantine/core';
import { Box, Stack } from '../../layout';
import { Text } from '../../typography';
import { ActivityAccordionStyles } from './ActivityAccordion.styles';
import {
  ACTIVITY_ACCORDION_DEFAULT_PROPS,
  ACTIVITY_ACCORDION_PROP_TYPES,
} from './ActivityAccordion.constants';

function AccordionLabel({ label, icon, rightSection, compact, classes }) {
  return (
    <Stack fullWidth alignItems="center">
      <Stack fullWidth justifyContent="start" alignItems="center" spacing={4}>
        <Box className={classes.iconWrapper}>
          {icon
            ? React.cloneElement(icon, {
                width: compact ? 16 : 22,
                height: compact ? 16 : 22,
                className: classes.labelIcon,
              })
            : null}
        </Box>
        <Text size="md" strong color="primary" role="productive" className={classes.label}>
          {label}
        </Text>
      </Stack>
      <Box skipFlex>{rightSection || null}</Box>
    </Stack>
  );
}

const ActivityAccordion = ({ children, compact, ...props }) => {
  const { classes, cx } = ActivityAccordionStyles({ compact }, { name: 'ActivityAccordion' });

  return (
    <Accordion {...props} className={classes.root} classNames={classes} iconPosition="right">
      {React.Children.map(children, (child) => {
        const { children: panelContent, color, ...panelProps } = child.props;
        return (
          <Accordion.Item
            label={<AccordionLabel {...panelProps} compact={compact} classes={classes} />}
          >
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
