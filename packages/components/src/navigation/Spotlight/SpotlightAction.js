import React from 'react';
import { createStyles } from '@mantine/styles';
import { Link } from 'react-router-dom';
import { closeSpotlight } from '.';
import { Box, Stack } from '../../layout';
import { Text } from '../../typography';
import { ImageLoader } from '../../misc';

const useStyles = createStyles((theme, { isGroup, isChild }) => {
  const inputTheme = theme.other.input;
  const helpTextTheme = theme.other.helpText;

  return {
    action: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      padding: '10px 12px',
      textDecoration: 'none',
      cursor: !isGroup && 'pointer',
      backgroundColor: inputTheme.background.color.default,
      borderRadius: inputTheme.border.radius.md,
      paddingLeft: isChild && 42,
      color: isGroup
        ? theme.other.global.content.color.text.subtle
        : inputTheme.content.color.default,
      ...inputTheme.content.typo,
    },

    actionHovered: {
      backgroundColor: inputTheme.background.color.hover,
    },

    iconBox: {
      position: 'relative',
      width: 20,
      height: 20,
      marginRight: 10,
    },

    title: {
      color: isGroup
        ? theme.other.global.content.color.text.subtle
        : inputTheme.content.color.default,
    },

    description: {
      ...helpTextTheme.content.typo,
      lineHeight: 1,
      color: helpTextTheme.content.color.default,
    },
  };
});

const SpotlightAction = ({ action, styles, classNames, hovered, onTrigger, query, ...props }) => {
  const { classes, cx } = useStyles(
    { isGroup: action.isGroup, isChild: action.isChild },
    { styles, classNames, name: 'SpotlightAction' }
  );

  const Wrapper = action.isGroup ? Box : action.useRouter ? Link : 'a';
  const wrapperProps = action.isGroup
    ? {}
    : action.useRouter
    ? { to: action.url }
    : { href: action.url };

  return (
    <Wrapper
      className={cx(classes.action, { [classes.actionHovered]: !action.isGroup && hovered })}
      tabIndex={-1}
      onClick={(event) => {
        if (action.isChild || !action.isGroup) {
          closeSpotlight();
        }
      }}
      {...props}
      {...wrapperProps}
    >
      {action.icon && (
        <Box className={classes.iconBox}>
          <ImageLoader
            className={cx(classes.icon)}
            src={action.icon}
            alt={action.title}
            strokeCurrent
            ignoreFill
          />
        </Box>
      )}

      <Stack direction="column">
        <Text highlight={query} className={classes.title}>
          {action.title}
        </Text>
        {action.description && (
          <Text highlight={query} className={classes.description}>
            {action.description}
          </Text>
        )}
      </Stack>
    </Wrapper>
  );
};

export { SpotlightAction };
