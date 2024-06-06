import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isString } from 'lodash';
import { Image } from '@mantine/core';
import { InlineSvg } from '../InlineSvg';
import { ImageLoaderStyles } from './ImageLoader.styles';

const ImageLoader = ({
  src: srcProp,
  alt,
  forceImage,
  height: heightProp,
  width,
  withPlaceholder,
  radius,
  imageStyles,
  useAria,
  bordered,
  objectFit,
  ...props
}) => {
  const [src, setSrc] = useState(srcProp);
  const isSvg = !forceImage && isString(src) && !isEmpty(src) && src.toLowerCase().endsWith('.svg');
  const height = !src || !isSvg || withPlaceholder ? heightProp || 50 : undefined;

  useEffect(() => {
    if (srcProp !== src) setSrc(srcProp);
  }, [srcProp]);

  const { classes, cx } = ImageLoaderStyles(
    { radius, imageStyles, height, bordered, objectFit },
    { name: 'ImageLoader' },
  );

  return isSvg ? (
    <InlineSvg src={src} {...props} />
  ) : (
    <Image
      {...props}
      src={src}
      alt={alt}
      radius={radius}
      height={height ?? '100%'}
      width={width ?? '100%'}
      withPlaceholder={withPlaceholder}
      classNames={{
        root: classes.root,
        imageWrapper: classes.imageWrapper,
        figure: classes.figure,
      }}
      role={useAria ? 'image' : undefined}
    />
  );
};

ImageLoader.defaultProps = {
  forceImage: false,
  bordered: false,
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  forceImage: PropTypes.bool,
  withPlaceholder: PropTypes.bool,
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageStyles: PropTypes.object,
  useAria: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bordered: PropTypes.bool,
  objectFit: PropTypes.string,
};

export { ImageLoader };
