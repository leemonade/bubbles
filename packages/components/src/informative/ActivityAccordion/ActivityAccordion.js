import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '@mantine/core';
import { Box } from '../../layout/Box';
import { Stack } from '../../layout/Stack';
import { Text } from '../../typography';
import { ActivityAccordionStyles } from './ActivityAccordion.styles';
import {
  ACTIVITY_ACCORDION_DEFAULT_PROPS,
  ACTIVITY_ACCORDION_PROP_TYPES,
} from './ActivityAccordion.constants';
import { Divider } from '../../../lib/layout/Divider/Divider';

function AccordionLabel({ label, title, icon, hideIcon, rightSection, compact, classes }) {
  return (
    <Stack fullWidth alignItems="center">
      <Stack fullWidth justifyContent="start" alignItems="center" spacing={4}>
        {!hideIcon ? (
          <Box className={classes.iconWrapper}>
            {icon
              ? React.cloneElement(icon, {
                  width: compact ? 16 : 22,
                  height: compact ? 16 : 22,
                  className: classes.labelIcon,
                })
              : null}
          </Box>
        ) : null}

        {label ? (
          <Text size="md" strong color="primary" role="productive" className={classes.label}>
            {label}
          </Text>
        ) : null}
        {title || null}
      </Stack>
      <Box skipFlex>{rightSection || null}</Box>
    </Stack>
  );
}

AccordionLabel.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.node,
  hideIcon: PropTypes.bool,
  rightSection: PropTypes.any,
  compact: PropTypes.bool,
  classes: PropTypes.any,
};

const ActivityAccordion = ({ children, compact, withoutDivider, ...props }) => {
  const { classes, cx } = ActivityAccordionStyles({ compact }, { name: 'ActivityAccordion' });

  return (
    <Accordion {...props} className={classes.root} classNames={classes} iconPosition="right">
      {React.Children.map(children, (child, index) => {
        if (!child) return null;
        const { children: panelContent, color, ...panelProps } = child.props;
        return (
          <>
            <Accordion.Item value={panelProps.itemValue || panelProps.label || `Panel ${index}`}>
              <Accordion.Control>
                <AccordionLabel {...panelProps} compact={compact} classes={classes} />
              </Accordion.Control>
              <Accordion.Panel>
                <Box className={cx(classes.content, { [classes.contentSolid]: color === 'solid' })}>
                  {panelContent}
                </Box>
              </Accordion.Panel>
            </Accordion.Item>
            {!withoutDivider && <Divider />}
          </>
        );
      })}
    </Accordion>
  );
};

ActivityAccordion.defaultProps = ACTIVITY_ACCORDION_DEFAULT_PROPS;
ActivityAccordion.propTypes = ACTIVITY_ACCORDION_PROP_TYPES;

export { ActivityAccordion };
