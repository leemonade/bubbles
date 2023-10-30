import React from 'react';
import { Box } from '@mantine/core';
import { AvatarSubjectStyles } from './AvatarSubject.styles';
import { AVATAR_SUBJECT_DEFAULT_PROPS, AVATAR_SUBJECT_PROP_TYPES } from './AvatarSubject.constants';
import { ImageLoader } from '../ImageLoader';

const AvatarSubject = ({ color, icon, size, altText }) => {
  const { classes } = AvatarSubjectStyles({ size });
  const iconToShow = !!icon ? icon : null;
  const handleSize = {
    xs: { height: '0px' },
    sm: { height: '9px' },
    md: { height: '12px' },
    lg: { height: '18px' },
    xlg: { height: '30px' },
  };

  return (
    <Box className={classes.bubble} style={{ backgroundColor: color }}>
      {iconToShow && (
        <ImageLoader
          forceImage
          height={handleSize[size].height}
          imageStyles={handleSize[size].height}
          src={iconToShow}
          alt={altText}
        />
      )}
    </Box>
  );
};

AvatarSubject.defaultProps = AVATAR_SUBJECT_DEFAULT_PROPS;
AvatarSubject.propTypes = AVATAR_SUBJECT_PROP_TYPES;
AvatarSubject.displayName = 'AvatarSubject';

export { AvatarSubject };
export default AvatarSubject;