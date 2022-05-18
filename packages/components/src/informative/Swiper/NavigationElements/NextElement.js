import React from 'react';
import { useSwiper } from 'swiper/react';
import { ChevRightIcon } from '@bubbles-ui/icons/outline/';
import { Box } from '../../../layout';

const NextElement = ({ className }) => {
  const swiper = useSwiper();

  return (
    <Box className={className} onClick={() => swiper.slideNext()}>
      <ChevRightIcon width={32} height={32} />
    </Box>
  );
};

export { NextElement };
