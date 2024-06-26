import React from 'react';
import { isFunction } from 'lodash';
import { HoverCard } from '@mantine/core';
import { Box } from '../../layout/Box';
import { Button } from '../../form/Button';
import { ContextHelpStyles } from './ContextHelp.styles';
import { CONTEXT_HELP_DEFAULT_PROPS, CONTEXT_HELP_PROP_TYPES } from './ContextHelp.constants';

const ContextHelp = ({ target, title, content, link, onLink, ...props }) => {
  const onLinkHandler = () => {
    if (isFunction(onLink)) onLink();
  };

  const { classes, cx } = ContextHelpStyles({}, { name: 'ContextHelp' });
  return (
    <HoverCard {...props} width={240} classNames={classes}>
      <HoverCard.Target>{target}</HoverCard.Target>
      <HoverCard.Dropdown>
        <Box className={classes.contextRoot}>
          {title && <Box className={classes.title}>{title}</Box>}
          {content && typeof content === 'string' ? (
            <Box className={classes.content}>{content}</Box>
          ) : (
            content
          )}
          {link && (
            <Box>
              <Button onClick={onLinkHandler} variant="link">
                {link}
              </Button>
            </Box>
          )}
        </Box>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

ContextHelp.defaultProps = CONTEXT_HELP_DEFAULT_PROPS;
ContextHelp.propTypes = CONTEXT_HELP_PROP_TYPES;

export { ContextHelp };
