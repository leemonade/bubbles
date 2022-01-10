import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isString } from 'lodash';
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
};
export const CONTEXT_CONTAINER_PROP_TYPES = {
  title: PropTypes.string,
  description: PropTypes.string,
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(CONTEXT_CONTAINER_PADDED_TYPES)]),
  divided: PropTypes.bool,
};

const ContextContainer = ({
  children,
  className,
  title,
  description,
  padded,
  divided,
  ...props
}) => {
  const { classes, cx } = ContextContainerStyles({ padded });
  const hasTitle = useMemo(() => isString(title) && title !== '', [title]);
  const hasDescription = useMemo(() => isString(description) && description !== '', [description]);

  const childrenNodes = useMemo(() => {
    if (divided) {
      const nodes = React.Children.toArray(children);
      const result = [];
      nodes.forEach((node, i) => {
        result.push(node);
        if (i < nodes.length - 1) {
          result.push(<Divider />);
        }
      });
      return result;
    }
    return children;
  }, [children, divided]);

  return (
    <Stack
      className={cx(classes.root, className)}
      direction="column"
      spacing={5}
      fullWidth
      {...props}
    >
      {(hasTitle || hasDescription) && (
        <Stack direction="column" spacing={5} fullWidth>
          {hasTitle && (
            <Box>
              <Title order={3}>{title}</Title>
            </Box>
          )}
          {hasDescription && (
            <Box>
              <Paragraph className={classes.description}>{description}</Paragraph>
            </Box>
          )}
        </Stack>
      )}
      {childrenNodes}
    </Stack>
  );
};

ContextContainer.defaultProps = CONTEXT_CONTAINER_DEFAULT_PROPS;
ContextContainer.propTypes = CONTEXT_CONTAINER_PROP_TYPES;

export { ContextContainer };
