import React from 'react';
import { Box } from '@mantine/core';
import { BulletSubjectStyles } from './BulletSubject.styles';
import { BULLET_SUBJECT_DEFAULT_PROPS, BULLET_SUBJECT_PROP_TYPES } from './BulletSubject.constants';
import { ImageLoader } from '../ImageLoader';

const BulletSubject = ({ color, icon, size }) => {
  const { classes } = BulletSubjectStyles({ size });
  const iconToShow = !!icon ? icon : null;
  const handleSize = size === 'lg' ? 16 : 12;

  return (
    <Box className={classes.bubble} style={{ backgroundColor: color }}>
      {iconToShow && (
        <ImageLoader
          forceImage
          height={handleSize}
          imageStyles={handleSize}
          src={iconToShow}
          alt="subject icon"
        />
      )}
    </Box>
  );
};

BulletSubject.defaultProps = BULLET_SUBJECT_DEFAULT_PROPS;
BulletSubject.propTypes = BULLET_SUBJECT_PROP_TYPES;

export { BulletSubject };
