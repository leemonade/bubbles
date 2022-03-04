import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isString, isEmpty } from 'lodash';
import { Stack } from '../Stack';
import { Divider } from '../Divider';
import { Title, Paragraph } from '../../typography';
import { ContextContainerStyles } from './ContextContainer.styles';

export const CONTEXT_CONTAINER_PADDED_TYPES = [true, false, 'vertical', 'horizontal'];

export const CONTEXT_CONTAINER_DEFAULT_PROPS = {
  title: '',
  description: '',
  padded: false,
  divided: false,
  spacing: 5,
  direction: 'column',
};
export const CONTEXT_CONTAINER_PROP_TYPES = {
  title: PropTypes.string,
  description: PropTypes.string,
  padded: PropTypes.oneOf(CONTEXT_CONTAINER_PADDED_TYPES),
  divided: PropTypes.bool,
  spacing: PropTypes.number,
};

const ContextContainer = ({
  children,
  className,
  title,
  subtitle,
  description,
  padded,
  divided,
  spacing,
  direction,
  fullHeight,
  ...props
}) => {
  const { classes, cx } = ContextContainerStyles({ padded });
  const hasTitle = useMemo(() => !isEmpty(title), [title]);
  const hasSubtitle = useMemo(() => !isEmpty(subtitle), [subtitle]);
  const hasDescription = useMemo(() => !isEmpty(description), [description]);

  const childrenNodes = useMemo(() => {
    if (divided) {
      const nodes = React.Children.toArray(children);
      const result = [];
      nodes.forEach((node, i) => {
        result.push(node);
        if (i < nodes.length - 1) {
          result.push(
            <Divider
              key={`d-${i}`}
              noFlex
              orientation={direction === 'row' ? 'vertical' : 'horizontal'}
            />
          );
        }
      });
      return result;
    }
    return children;
  }, [children, divided]);

  return (
    <Stack
      direction="column"
      spacing={5}
      fullWidth
      className={cx(classes.root, className)}
      fullHeight={fullHeight}
    >
      {(hasTitle || hasSubtitle || hasDescription) && (
        <Stack direction="column" spacing={5} noFlex fullWidth>
          {hasTitle && (
            <Box>
              <Title order={4}>{title}</Title>
            </Box>
          )}
          {hasSubtitle && (
            <Box>
              <Title order={6}>{subtitle}</Title>
            </Box>
          )}
          {hasDescription && (
            <Box>
              <Paragraph className={classes.description}>{description}</Paragraph>
            </Box>
          )}
        </Stack>
      )}
      <Stack {...props} direction={direction} spacing={spacing} fullWidth fullHeight={fullHeight}>
        {childrenNodes}
      </Stack>
    </Stack>
  );
};

ContextContainer.defaultProps = CONTEXT_CONTAINER_DEFAULT_PROPS;
ContextContainer.propTypes = CONTEXT_CONTAINER_PROP_TYPES;

export { ContextContainer };
