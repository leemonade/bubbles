import React from 'react';
import { capitalize, isFunction } from 'lodash';
import { AvatarsGroup, Box, Button, FileIcon, Text } from '@bubbles-ui/components';
import { LibraryCardFooterStyles } from './LibraryCardFooter.styles';
import {
  LIBRARY_CARD_FOOTER_DEFAULT_PROPS,
  LIBRARY_CARD_FOOTER_PROP_TYPES
} from './LibraryCardFooter.constants';

const LibraryCardFooter = ({
                             fileType,
                             fileExtension,
                             created,
                             canAccess,
                             classesCanAccess,
                             action,
                             onAction,
                             locale,
                             className,
                             style,
                             variant,
                             variantTitle,
                             variantIcon,
                             ...props
                           }) => {
  const { classes, cx } = LibraryCardFooterStyles(
    { action, size: 12, color: '#636D7D' },
    { name: 'LibraryCardFooter' }
  );

  const formatDate = () => {
    try {
      return new Date(created).toLocaleDateString(locale);
    } catch (e) {
      return new Date(2010, 8, 21).toLocaleDateString(locale);
    }
  };

  const handleOnAction = () => {
    isFunction(onAction) && onAction();
  };

  let component;
  if (action) {
    component = (
      <Button variant={'link'} onClick={handleOnAction} size={'xs'}>
        {action}
      </Button>
    );
  } else if (variantIcon) {
    const label = capitalize(fileType || variantTitle || variant);
    component = (
      <Box className={classes.FileIconRoot}>
        {variantIcon}
        {label && <Text className={classes.FileIconLabel}>{label}</Text>}
      </Box>
    );
  } else {
    component = (
      <FileIcon
        size={12}
        fileType={fileType || variant}
        fileExtension={fileExtension}
        color={'#636D7D'}
        label={capitalize(fileType || variantTitle || variant)}
        hideExtension
      />
    );
  }

  return (
    <Box className={cx(classes.root, className)} style={style}>
      {action ? (
        { component }
      ) : (
        <>
          {component}

          {created ? (
            <Text role='productive' className={classes.date}>
              {formatDate()}
            </Text>
          ) : <Box sx={(theme) => ({ paddingRight: theme.spacing[2] })}>
            <AvatarsGroup size='xs' data={canAccess} moreThanUsersAsMulti={2}
                          classesData={classesCanAccess}
                          numberFromClassesAndData
                          limit={3} />
          </Box>}
        </>
      )}
    </Box>
  );
};

LibraryCardFooter.defaultProps = LIBRARY_CARD_FOOTER_DEFAULT_PROPS;
LibraryCardFooter.propTypes = LIBRARY_CARD_FOOTER_PROP_TYPES;

export { LibraryCardFooter };
