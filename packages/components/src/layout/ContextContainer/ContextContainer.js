import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Divider } from '../Divider';
import { Paragraph, Title } from '../../typography';
import { ContextContainerStyles } from './ContextContainer.styles';

export const CONTEXT_CONTAINER_PADDED_TYPES = [true, false, 'vertical', 'horizontal'];
const FLEX_ALIGNS = ['flex-start', 'center', 'flex-end'];
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
  direction: PropTypes.oneOf(['row', 'column']),
  fullHeight: PropTypes.bool,
  alignItems: PropTypes.oneOf(FLEX_ALIGNS),
  justifyContent: PropTypes.oneOf(FLEX_ALIGNS),
  wrap: PropTypes.oneOf(['wrap', 'nowrap']),
  alignContent: PropTypes.oneOf(FLEX_ALIGNS),
  className: PropTypes.string,
  style: PropTypes.object,
  subtitle: PropTypes.any,
  children: PropTypes.any,
  titleRightZone: PropTypes.any,
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
  titleRightZone,
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
            />,
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
      spacing={3}
      fullWidth
      className={cx(classes.root, className, 'section-wrapper')}
      fullHeight={fullHeight}
      style={style}
      {...props}
    >
      {(hasTitle || hasSubtitle || hasDescription) && (
        <Stack className={'section-header-wrapper'} direction="column" spacing={2} noFlex fullWidth>
          {hasTitle && (
            <Box
              className={'section-title'}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Box>
                {typeof title === 'string' ? (
                  <Title order={3} dangerouslySetInnerHTML={{ __html: title }} />
                ) : (
                  subtitle
                )}
              </Box>
              {titleRightZone ? <Box>{titleRightZone}</Box> : null}
            </Box>
          )}
          {hasSubtitle && (
            <Box className={'section-subtitle'}>
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
        className={'section-content-wrapper'}
      >
        {childrenNodes}
      </Stack>
    </Stack>
  );
};

ContextContainer.defaultProps = CONTEXT_CONTAINER_DEFAULT_PROPS;
ContextContainer.propTypes = CONTEXT_CONTAINER_PROP_TYPES;

export { ContextContainer };
