import React, { useState } from 'react';
import { isNil } from 'lodash';
import { Box, FileIcon } from '@bubbles-ui/components';
import { LibraryCardCover } from '../LibraryCardCover';
import { LibraryCardContent } from '../LibraryCardContent';
import { LibraryCardFooter } from '../LibraryCardFooter';
import { LibraryCardStyles } from './LibraryCard.styles';
import { LIBRARY_CARD_DEFAULT_PROPS, LIBRARY_CARD_PROP_TYPES } from './LibraryCard.constants';

const LibraryCard = ({
  asset,
  assigment,
  variant,
  deadlineProps,
  action,
  onAction,
  locale,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const { classes, cx } = LibraryCardStyles({});
  return (
    <Box
      className={classes.root}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LibraryCardCover
        name={asset.name}
        color={asset.color}
        cover={asset.cover}
        fileIcon={
          <FileIcon
            size={64}
            fileExtension={asset.fileExtension}
            fileType={asset.fileType}
            color={'#B9BEC4'}
            hideExtension
          />
        }
        deadlineProps={!isNil(deadlineProps) ? { ...deadlineProps, locale } : null}
        direction={variant === 'assigment' ? 'vertical' : null}
        parentHovered={isHovered}
      />
      <LibraryCardContent
        subtitle={asset.subtitle}
        description={asset.description}
        metadata={asset.metadata}
        tags={asset.tags}
        locale={locale}
        variant={variant}
        assigment={assigment}
      />
      <LibraryCardFooter
        fileType={asset.fileType}
        fileExtension={asset.fileExtension}
        created={asset.created}
        action={action}
        onAction={onAction}
        locale={locale}
      />
    </Box>
  );
};

LibraryCard.defaultProps = LIBRARY_CARD_DEFAULT_PROPS;
LibraryCard.propTypes = LIBRARY_CARD_PROP_TYPES;

export { LibraryCard };
