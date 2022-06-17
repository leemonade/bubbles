import React from 'react';
import PropTypes from 'prop-types';
import { Box, HeroBg, Logo, Paragraph, Text, Stack } from '@bubbles-ui/components';
import { LoginBgStyles } from './LoginBg.styles';

export const LOGIN_BG_DEFAULT_PROPS = {
  backgroundColor: '#F0F5FC',
  foregroundColor: '#FFFFFF',
  dobleQuoted: true,
};
export const LOGIN_BG_PROP_TYPES = {
  quote: PropTypes.string,
  author: PropTypes.string,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  dobleQuoted: PropTypes.bool,
};

const LoginBg = ({ quote, author, backgroundColor, foregroundColor, dobleQuoted, ...props }) => {
  const { classes, cx } = LoginBgStyles({});

  return (
    <Box className={classes.root}>
      <HeroBg size="x-md" style={{ backgroundColor, color: foregroundColor }} />
      <Box className={classes.content}>
        <Logo className={classes.logo} />
        <Stack direction="column" spacing={2}>
          <Paragraph size="xl" color="secondary">
            {dobleQuoted ? `"${quote}"` : quote}
          </Paragraph>
          <Text size="md">{author}</Text>
        </Stack>
        <Box className={classes.footer}></Box>
      </Box>
    </Box>
  );
};

LoginBg.defaultProps = LOGIN_BG_DEFAULT_PROPS;
LoginBg.propTypes = LOGIN_BG_PROP_TYPES;

export { LoginBg };
