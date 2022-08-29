import React from 'react';
import { Box, TextClamp, Title, Text, ImageLoader, FileIcon } from '@bubbles-ui/components';
import { LibraryCardBasicStyles } from './LibraryCardBasic.styles';
import {
  LIBRARY_CARD_BASIC_DEFAULT_PROPS,
  LIBRARY_CARD_BASIC_PROP_TYPES,
} from './LibraryCardBasic.constants';

const LibraryCardBasic = ({ asset, height, blur, children, ...props }) => {
  const { name, tagline, color, cover, fileExtension, fileType } = asset;

  const { classes, cx } = LibraryCardBasicStyles(
    { height, color, blur },
    { name: 'LibraryCardBasic' }
  );
  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.blurryBox}>
        <Box>
          <Box className={classes.color} />
        </Box>
        <Box className={classes.titleWrapper}>
          <TextClamp lines={3}>
            <Title order={3} className={classes.title}>
              {name}
            </Title>
          </TextClamp>
          <TextClamp lines={1}>
            <Text role="productive" color="primary" size="xs">
              {tagline}
            </Text>
          </TextClamp>
        </Box>
        <Box className={classes.childrenWrapper}>{children}</Box>
      </Box>
      {cover ? (
        <ImageLoader src={cover} height={height} forceImage />
      ) : (
        <Box className={classes.fileIcon}>
          {
            <FileIcon
              size={64}
              fileExtension={fileExtension}
              fileType={fileType}
              color={'#B9BEC4'}
              hideExtension
            />
          }
        </Box>
      )}
    </Box>
  );
};

LibraryCardBasic.defaultProps = LIBRARY_CARD_BASIC_DEFAULT_PROPS;
LibraryCardBasic.propTypes = LIBRARY_CARD_BASIC_PROP_TYPES;

export { LibraryCardBasic };
