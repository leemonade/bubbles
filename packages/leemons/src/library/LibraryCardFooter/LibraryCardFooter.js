import React from 'react';
import PropTypes from 'prop-types';
import { capitalize, isFunction } from 'lodash';
import { Box, FileIcon, Text, Button } from '@bubbles-ui/components';
import { LibraryCardFooterStyles } from './LibraryCardFooter.styles';

export const LIBRARY_CARD_FOOTER_DEFAULT_PROPS = {};
export const LIBRARY_CARD_FOOTER_PROP_TYPES = {
  fileType: PropTypes.string,
  fileExtension: PropTypes.string,
  created: PropTypes.string,
  action: PropTypes.string,
  onAction: PropTypes.func,
  locale: PropTypes.string,
};

const LibraryCardFooter = ({
  fileType,
  fileExtension,
  created,
  action,
  onAction,
  locale,
  ...props
}) => {
  const { classes, cx } = LibraryCardFooterStyles({ action });

  const formatDate = () => {
    try {
      return new Date(created).toLocaleDateString('en-GB');
    } catch (e) {
      return new Date(2010, 8, 21).toLocaleDateString('en-GB');
    }
  };

  const handleOnAction = () => {
    isFunction(onAction) && onAction();
  };

  return (
    <Box className={classes.root}>
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
          <Text role="productive" className={classes.date}>
            {formatDate()}
          </Text>
        </>
      )}
    </Box>
  );
};

LibraryCardFooter.defaultProps = LIBRARY_CARD_FOOTER_DEFAULT_PROPS;
LibraryCardFooter.propTypes = LIBRARY_CARD_FOOTER_PROP_TYPES;

export { LibraryCardFooter };
