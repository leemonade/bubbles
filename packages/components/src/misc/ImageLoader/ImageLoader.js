import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isString, isEmpty } from 'lodash';
import { Image } from '@mantine/core';
import { InlineSvg } from '../InlineSvg';
import { ImageLoaderStyles } from './ImageLoader.styles';

export const ImageLoader = ({
  src: srcProp,
  alt,
  forceImage = false,
  height: heightProp,
  withPlaceholder,
  radius,
  imageStyles,
  ...props
}) => {
  const [src, setSrc] = useState(srcProp);
  const isSvg = !forceImage && isString(src) && !isEmpty(src) && src.toLowerCase().endsWith('.svg');
  const height = !src || !isSvg || withPlaceholder ? heightProp || 50 : undefined;

  useEffect(() => {
    if (srcProp !== src) setSrc(srcProp);
  }, [srcProp]);

  const { classes, cx } = ImageLoaderStyles({ radius, imageStyles }, { name: 'ImageLoader' });
  return isSvg ? (
    <InlineSvg src={src} {...props} />
  ) : (
    <Image
      {...props}
      src={src}
      alt={alt}
      height={height}
      withPlaceholder={withPlaceholder}
      classNames={{ root: classes.inheritRadius }}
    />
  );
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  forceImage: PropTypes.bool,
  withPlaceholder: PropTypes.bool,
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
