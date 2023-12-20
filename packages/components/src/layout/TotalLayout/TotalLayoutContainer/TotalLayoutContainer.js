import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Box } from '../../Box';
import { Stack } from '../../Stack';
import { TotalLayoutContainerStyles } from './TotalLayoutContainer.styles';

const TotalLayoutContainer = ({ Header, Footer, scrollRef, children }) => {
  const [topScroll, setTopScroll] = React.useState(false);
  const { classes } = TotalLayoutContainerStyles({ topScroll }, { name: 'TotalLayoutContainer' });

  // Define scroll and window resizing behavior
  const handleScroll = () => {
    const div = scrollRef?.current;
    if (div) {
      const { scrollTop } = div;
      if (scrollTop > 5 && !topScroll) setTopScroll(true);
      else if (scrollTop === 0 && topScroll) setTopScroll(false);
    }
  };
  React.useEffect(() => {
    const body = scrollRef?.current;
    if (body) {
      handleScroll();
      body.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      return () => {
        body.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
    return () => {};
  }, [scrollRef?.current, handleScroll]);

  return (
    <Box id="TotalLayout" className={classes.root}>
      <Stack fullWidth fullHeight direction="column">
        <Box className={classes.header} noFlex>
          {isFunction(Header) ? <Header /> : Header}
        </Box>
        {children}
        {!!Footer && (
          <Box className={classes.footerContainer} noFlex>
            {isFunction(Footer) ? <Footer /> : Footer}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

TotalLayoutContainer.defaultProps = {
  Header: <div />,
};
TotalLayoutContainer.propTypes = {
  Header: PropTypes.any,
  Footer: PropTypes.any,
  children: PropTypes.any,
  scrollRef: PropTypes.object,
};

export { TotalLayoutContainer };
