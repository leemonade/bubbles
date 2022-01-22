import React from 'react';
import PropTypes from 'prop-types';
import { Box, HeroBg, Logo, Paragraph, Text } from '@bubbles-ui/components';
import { LoginBgStyles } from './LoginBg.styles';

export const LOGIN_BG_DEFAULT_PROPS = {
  backgroundColor: '#F0F5FC',
  foregroundColor: '#FFFFFF',
};
export const LOGIN_BG_PROP_TYPES = {
  quote: PropTypes.string,
  author: PropTypes.string,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
};

const LoginBg = ({ quote, author, backgroundColor, foregroundColor, ...props }) => {
  const { classes, cx } = LoginBgStyles({});

  return (
    <Box className={classes.root}>
      <HeroBg size="x-md" style={{ backgroundColor, color: foregroundColor }} />
      <Box className={classes.content}>
        <Logo className={classes.logo} />
        <Box>
          <Paragraph size="xl" color="secondary">
            "{quote}"
          </Paragraph>
          <Text size="md">{author}</Text>
        </Box>
        <Box className={classes.footer}></Box>
      </Box>
    </Box>
  );
};

LoginBg.defaultProps = LOGIN_BG_DEFAULT_PROPS;
LoginBg.propTypes = LOGIN_BG_PROP_TYPES;

export { LoginBg };
