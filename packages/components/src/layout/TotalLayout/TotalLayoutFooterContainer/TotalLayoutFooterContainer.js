import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../Box';
import { Stack } from '../../Stack';
import { TotalLayoutFooterContainerStyles } from './TotalLayoutFooterContainer.styles';

const TotalLayoutFooterContainer = ({
  leftOffset,
  fixed,
  scrollRef,
  leftZone,
  rightZone,
  children,
}) => {
  const [showFooterBorder, setShowFooterBorder] = React.useState(false);
  const { classes } = TotalLayoutFooterContainerStyles(
    { showFooterBorder, leftOffset, fixed },
    { name: 'TotalLayoutFooterContainer' },
  );

  // Define scroll and window resizing behavior
  const handleScroll = () => {
    const div = scrollRef?.current;
    if (div) {
      const { scrollTop, scrollHeight, clientHeight } = div;
      const totalScroll = parseInt(scrollHeight - scrollTop);
      const atTheBottom = totalScroll === clientHeight;
      const isScrollable = scrollHeight > clientHeight;
      if (isScrollable && !atTheBottom && !showFooterBorder) {
        setShowFooterBorder(true);
      } else if ((!isScrollable && showFooterBorder) || (atTheBottom && showFooterBorder)) {
        setShowFooterBorder(false);
      }
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
    <Stack justifyContent="center" fullWidth>
      <Box className={classes.footer}>
        <Stack fullWidth style={{ height: 72, padding: '16px 24px' }}>
          <Stack direction="row" spacing={2} noFlex>
            {leftZone}
          </Stack>
          <div>{children}</div>
          <Stack direction="row" spacing={2} noFlex>
            {rightZone}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

TotalLayoutFooterContainer.defaultProps = {};
TotalLayoutFooterContainer.propTypes = {
  leftOffset: PropTypes.number,
  scrollRef: PropTypes.any,
  leftZone: PropTypes.node,
  rightZone: PropTypes.node,
  children: PropTypes.node,
  fixed: PropTypes.bool,
};

export { TotalLayoutFooterContainer };