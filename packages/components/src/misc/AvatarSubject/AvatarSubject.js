import React from 'react';
import { Box, Stack } from '@mantine/core';
import { AvatarSubjectStyles } from './AvatarSubject.styles';
import { AVATAR_SUBJECT_DEFAULT_PROPS, AVATAR_SUBJECT_PROP_TYPES } from './AvatarSubject.constants';
import { MultiSubjectIcon } from './MultiSubjectIcon/MultiSubjectIcon';
import { ImageLoader } from '../ImageLoader';
import { Text } from '../../typography';

const SIZES = {
  xs: { height: '0px' },
  sm: { height: '9px' },
  md: { height: '12px' },
  lg: { height: '18px' },
  xlg: { height: '30px' },
  xxlg: { height: '22px' },
};

const INIT_SIZES = {
  xs: 'xs',
  sm: 'sm',
  md: 'xs',
  lg: 'sm',
  xlg: 'xl',
  xxlg: 'lg',
};

const getInitials = (texts) => {
  if (texts.length === 0) return '';
  const firstInitial = texts[0][0].toUpperCase();
  const secondInitial = texts[1] ? texts[1][0].toUpperCase() : '';
  return `${firstInitial}${secondInitial}`;
};

const verifySize = (size) => (size in SIZES ? size : 'lg');

const AvatarSubject = ({ color, icon, size: sizeProp, isMultiSubject, name }) => {
  const size = verifySize(sizeProp);
  const { classes } = AvatarSubjectStyles({ size });
  const iconToShow = icon || null;
  const handleColor = isMultiSubject ? '#878D96' : color;

  const texts = name ? name.split(' ') : [];
  const initials = getInitials(texts);

  const itemsWithoutIcon = size === 'xs' || size === 'sm';
  const iconSize = SIZES[size]?.height ?? SIZES[AVATAR_SUBJECT_DEFAULT_PROPS.size].height;

  const IconOrInitalsComp =
    icon && size ? (
      <ImageLoader forceImage height={iconSize} imageStyles={iconSize} src={iconToShow} />
    ) : (
      <Text size={INIT_SIZES[size]} className={classes.text}>
        {itemsWithoutIcon ? '' : name && initials}
      </Text>
    );

  return (
    <Box className={classes.bubble} style={{ backgroundColor: handleColor }}>
      {isMultiSubject ? (
        <MultiSubjectIcon width={iconSize} height={iconSize} />
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
