import React from 'react';
import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';
import { ChevLeftIcon } from '@bubbles-ui/icons/outline/';
import { Box } from '@bubbles-ui/components';

const PrevElement = ({ className, useAria, ariaLabel }) => {
  const swiper = useSwiper();

  return (
    <Box
      className={className}
      onClick={() => swiper.slidePrev()}
      role={useAria ? 'button' : undefined}
      aria-label={ariaLabel}
    >
      <ChevLeftIcon width={32} height={32} />
    </Box>
  );
};

PrevElement.propTypes = {
  className: PropTypes.string,
  useAria: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export { PrevElement };
