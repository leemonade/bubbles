import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Divider } from '../Divider';
import { Paragraph } from '../../typography/Paragraph';
import { Title } from '../../typography/Title';
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
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  padded: PropTypes.oneOf(CONTEXT_CONTAINER_PADDED_TYPES),
  divided: PropTypes.bool,
  spacing: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  direction: PropTypes.oneOf(['row', 'column']),
  fullHeight: PropTypes.bool,
  style: PropTypes.object,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  wrap: PropTypes.bool,
  alignContent: PropTypes.string,
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
  style,
  alignItems,
  justifyContent,
  wrap,
  alignContent,
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
      style={style}
      {...props}
    >
      {(hasTitle || hasSubtitle || hasDescription) && (
        <Stack direction="column" spacing={2} noFlex fullWidth>
          {hasTitle && (
            <Box>
              {typeof title === 'string' ? (
                <Title order={3} dangerouslySetInnerHTML={{ __html: title }} />
              ) : (
                subtitle
              )}
            </Box>
          )}
          {hasSubtitle && (
            <Box>
              {typeof subtitle === 'string' ? (
                <Title order={5} dangerouslySetInnerHTML={{ __html: subtitle }} />
              ) : (
                subtitle
              )}
            </Box>
          )}
          {hasDescription && (
            <Box>
              {typeof description === 'string' ? (
                <Paragraph
                  className={classes.description}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              ) : (
                description
              )}
            </Box>
          )}
        </Stack>
      )}
      <Stack
        alignItems={alignItems}
        justifyContent={justifyContent}
        direction={direction}
        spacing={spacing}
        fullWidth
        fullHeight={fullHeight}
        wrap={wrap}
        alignContent={alignContent}
      >
        {childrenNodes}
      </Stack>
    </Stack>
  );
};

ContextContainer.defaultProps = CONTEXT_CONTAINER_DEFAULT_PROPS;
ContextContainer.propTypes = CONTEXT_CONTAINER_PROP_TYPES;

export { ContextContainer };
