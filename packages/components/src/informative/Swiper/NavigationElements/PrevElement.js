import React from 'react';
import { useSwiper } from 'swiper/react';
import { ChevLeftIcon } from '@bubbles-ui/icons/outline/';
import { Box } from '../../../layout';

const PrevElement = ({ className }) => {
  const swiper = useSwiper();

  return (
    <Box className={className} onClick={() => swiper.slidePrev()}>
      <ChevLeftIcon width={32} height={32} />
    </Box>
  );
};

export { PrevElement };
