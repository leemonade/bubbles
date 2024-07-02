import React from 'react';
import { Box, Stack } from '@mantine/core';
import { AvatarSubjectStyles } from './AvatarSubject.styles';
import { AVATAR_SUBJECT_DEFAULT_PROPS, AVATAR_SUBJECT_PROP_TYPES } from './AvatarSubject.constants';
import { MultiSubjectIcon } from './MultiSubjectIcon/MultiSubjectIcon';
import { ImageLoader } from '../ImageLoader';
import { Text } from '../../typography';

const AvatarSubject = ({ color, icon, size, isMultiSubject, name }) => {
  const { classes } = AvatarSubjectStyles({ size });
  const iconToShow = icon || null;
  const handleColor = isMultiSubject ? '#878D96' : color;
  const handleSize = {
    xs: { height: '0px' },
    sm: { height: '9px' },
    md: { height: '12px' },
    lg: { height: '18px' },
    xlg: { height: '30px' },
    xxlg: { height: '24px' },
  };

  const handleInitialsSize = {
    xs: 'xs',
    sm: 'sm',
    md: 'xs',
    lg: 'sm',
    xlg: 'xl',
    xxlg: 'xl',
  };

  const texts = name ? name.split(' ') : [];
  const initials =
    texts.length >= 1
      ? `${texts[0][0].toUpperCase()}${texts[1] ? texts[1][0].toUpperCase() : ''}`
      : '';

  const itemsWithoutIcon = size === 'xs' || size === 'sm';

  const IconOrInitalsComp =
    icon && size ? (
      <ImageLoader
        forceImage
        height={handleSize[size].height}
        imageStyles={handleSize[size].height}
        src={iconToShow}
      />
    ) : (
      <Text size={handleInitialsSize[size]} className={classes.text}>
        {itemsWithoutIcon ? '' : name && initials}
      </Text>
    );

  return (
    <Box className={classes.bubble} style={{ backgroundColor: handleColor }}>
      {isMultiSubject ? (
        <MultiSubjectIcon width={handleSize[size].height} height={handleSize[size].height} />
      ) : (
        <Stack>{IconOrInitalsComp}</Stack>
      )}
    </Box>
  );
};

AvatarSubject.defaultProps = AVATAR_SUBJECT_DEFAULT_PROPS;
AvatarSubject.propTypes = AVATAR_SUBJECT_PROP_TYPES;
AvatarSubject.displayName = 'AvatarSubject';

export { AvatarSubject };
export default AvatarSubject;
