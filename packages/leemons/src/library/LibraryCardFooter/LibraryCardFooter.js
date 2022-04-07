import React from 'react';
import { capitalize, isFunction } from 'lodash';
import { Box, Stack, FileIcon, Text, Button } from '@bubbles-ui/components';
import { AssetBookmarkIcon } from '@bubbles-ui/icons/solid';
import { LibraryCardFooterStyles } from './LibraryCardFooter.styles';
import {
  LIBRARY_CARD_FOOTER_DEFAULT_PROPS,
  LIBRARY_CARD_FOOTER_PROP_TYPES,
} from './LibraryCardFooter.constants';

const LibraryCardFooter = ({
  fileType,
  fileExtension,
  created,
  action,
  onAction,
  locale,
  className,
  style,
  variant,
  ...props
}) => {
  const { classes, cx } = LibraryCardFooterStyles({ action }, { name: 'LibraryCardFooter' });

  const formatDate = () => {
    try {
      return new Date(created).toLocaleDateString('en-GB');
    } catch (e) {
      return new Date(2010, 8, 21).toLocaleDateString('en-GB');
    }
  };

  console.log(fileType, action, variant);

  const handleOnAction = () => {
    isFunction(onAction) && onAction();
  };

  return (
    <Box className={cx(classes.root, className)} style={style}>
      {action ? (
        <Button variant={'link'} onClick={handleOnAction} size={'xs'}>
          {action}
        </Button>
      ) : (
        <>
          <FileIcon
            size={12}
            fileType={fileType}
            fileExtension={fileExtension}
            color={'#636D7D'}
            label={capitalize(fileType)}
            hideExtension
          />
          {created && (
            <Text role="productive" className={classes.date}>
              {formatDate()}
            </Text>
          )}
        </>
      )}
    </Box>
  );
};

LibraryCardFooter.defaultProps = LIBRARY_CARD_FOOTER_DEFAULT_PROPS;
LibraryCardFooter.propTypes = LIBRARY_CARD_FOOTER_PROP_TYPES;

export { LibraryCardFooter };
