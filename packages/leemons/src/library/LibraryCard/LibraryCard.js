import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FileIcon } from '@bubbles-ui/components';
import { LibraryCardCover, LibraryCardContent } from '../';
import { LibraryCardStyles } from './LibraryCard.styles';

export const LIBRARYCARD_ROLES = ['owner', 'editor', 'commentor', 'viewer'];
export const LIBRARYCARD_VARIANTS = ['media', 'task'];

export const LIBRARY_CARD_DEFAULT_PROPS = {};
export const LIBRARY_CARD_PROP_TYPES = {
  asset: PropTypes.shape({
    id: PropTypes.string,
    fileType: PropTypes.string,
    fileExtension: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    metadata: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
    ),
    created: PropTypes.string,
    version: PropTypes.string,
    cover: PropTypes.string,
    color: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })),
    role: PropTypes.oneOf(LIBRARYCARD_ROLES),
  }),
  variant: PropTypes.oneOf(LIBRARYCARD_VARIANTS),
};

const LibraryCard = ({ asset, variant, ...props }) => {
  const { classes, cx } = LibraryCardStyles({});
  return (
    <Box className={classes.root}>
      <LibraryCardCover
        name={asset.name}
        color={asset.color}
        cover={asset.cover}
        fileIcon={<FileIcon size={64} fileType={asset.fileType} color={'#B9BEC4'} />}
      />
      <LibraryCardContent
        description={asset.description}
        metadata={asset.metadata}
        tags={asset.tags}
      />
    </Box>
  );
};

LibraryCard.defaultProps = LIBRARY_CARD_DEFAULT_PROPS;
LibraryCard.propTypes = LIBRARY_CARD_PROP_TYPES;

export { LibraryCard };
