import React from 'react';
import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';
import { ChevRightIcon } from '@bubbles-ui/icons/outline/';
import { Box } from '../../../layout/Box';

const NextElement = ({ className, useAria, ariaLabel }) => {
  const swiper = useSwiper();

  return (
    <Box
      className={className}
      onClick={() => swiper.slideNext()}
      role={useAria ? 'button' : undefined}
      aria-label={ariaLabel}
    >
      <ChevRightIcon width={32} height={32} />
    </Box>
  );
};

NextElement.propTypes = {
  className: PropTypes.string,
  useAria: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export { NextElement };
