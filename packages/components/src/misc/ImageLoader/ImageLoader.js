import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Image } from '@mantine/core';
import { InlineSvg } from '../InlineSvg';

export const ImageLoader = ({
  src,
  alt,
  forceImage = false,
  height: heightProp,
  withPlaceholder,
  ...props
}) => {
  const isSvg = !forceImage && src.toLowerCase().endsWith('.svg');
  const height = !src && !isSvg && withPlaceholder ? heightProp || 50 : undefined;

  return isSvg ? (
    <InlineSvg src={src} {...props} />
  ) : (
    <Image {...props} src={src} alt={alt} height={height} withPlaceholder={withPlaceholder} />
  );
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  forceImage: PropTypes.bool,
  withPlaceholder: PropTypes.bool,
};
