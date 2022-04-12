import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { isEmpty, isFunction } from 'lodash';
import {
  Box,
  Stack,
  FileUpload,
  Button,
  Text,
  Paper,
  IconButton,
  Divider,
} from '@bubbles-ui/components';
import { PluginLeebraryIcon, PluginKimIcon } from '@bubbles-ui/icons/solid';
import { CloudUploadIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { LibraryNavbarItem as NavbarItem } from './LibraryNavbarItem';
import { LibraryNavbarStyles } from './LibraryNavbar.styles';
import { LIBRARY_NAVBAR_DEFAULT_PROPS, LIBRARY_NAVBAR_PROP_TYPES } from './LibraryNavbar.constants';

const LibraryNavbar = ({ labels, categories, selectedCategory, onNav, onFile, onNew }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showUpload, setShowUpload] = useState(true);

  const onFileHandler = (e) => {
    isFunction(onFile) && onFile(e);
    setShowUpload(false);
    setTimeout(() => {
      setShowUpload(true);
      setIsExpanded(false);
    }, 100);
  };

  const onNewHandler = (category) => {
    isFunction(onNew) && onNew(category);
    setShowUpload(false);
    setTimeout(() => {
      setShowUpload(true);
      setIsExpanded(false);
    }, 100);
  };

  const onNavHandler = (category) => {
    isFunction(onNav) && onNav(category);
  };

  const quickAccessSelected = useMemo(
    () => !selectedCategory || selectedCategory === '' || selectedCategory < 1,
    [selectedCategory]
  );

  const renderNavbarItems = useCallback(
    (callback, onlyCreatable = false) => {
      return categories
        .filter((item) => (onlyCreatable ? item.creatable === true : true))
        .map((category) => (
          <NavbarItem
            key={category.id}
            icon={category.icon}
            label={category.name}
            selected={category.id === selectedCategory || category.key === selectedCategory}
            onClick={() => callback(category)}
          />
        ));
    },
    [categories, selectedCategory]
  );

  const { classes, cx } = LibraryNavbarStyles({ isExpanded }, { name: 'LibraryNavbar' });
  return (
    <Box className={classes.root}>
      <Stack className={classes.header} spacing={2} alignItems={'center'}>
        <PluginLeebraryIcon height={24} width={24} />
        <Text className={classes.title}>{'Library'}</Text>
      </Stack>
      <Paper className={classes.navbarTop} shadow={!isExpanded ? 'none' : 'level03'} padding={0}>
        <Box className={classes.uploadButton}>
          <Button size={'sm'} rightIcon={<CloudUploadIcon />} onClick={() => setIsExpanded(true)}>
            {labels.uploadButton}
          </Button>
        </Box>
        <Stack direction={'column'} className={classes.navbarTopSubWrapper} fullWidth>
          <Stack
            direction={'column'}
            alignItems={'center'}
            spacing={2}
            className={classes.fileUploadWrapper}
            skipFlex
          >
            {isExpanded && (
              <Stack spacing={1} alignItems={'center'} fullWidth>
                <Box style={{ flex: 1, textAlign: 'center' }}>
                  <Text>{labels.uploadButton}</Text>
                </Box>
                <Box>
                  <IconButton icon={<RemoveIcon />} onClick={() => setIsExpanded(false)} />
                </Box>
              </Stack>
            )}
            {showUpload && (
              <Box className={classes.fileUpload}>
                <FileUpload
                  icon={<CloudUploadIcon height={32} width={32} />}
                  title={labels.fileUploadTitle}
                  subtitle={labels.fileUploadSubtitle}
                  hideUploadButton
                  single
                  onChange={onFileHandler}
                />
              </Box>
            )}
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'start'}
            className={classes.navbarTopList}
            skipFlex
          >
            <Text size="xs" transform={'uppercase'} className={classes.newTitle}>
              {labels.createNewTitle}
            </Text>
            {renderNavbarItems(onNewHandler, true)}
          </Stack>
        </Stack>
      </Paper>
      <Stack direction={'column'} className={classes.navbarBody}>
        <NavbarItem
          icon={<PluginKimIcon />}
          label={labels.quickAccess}
          onClick={() => onNavHandler(null)}
          selected={quickAccessSelected}
        />
        <Divider style={{ marginBlock: 8, marginInline: 10 }} />
        {renderNavbarItems(onNavHandler)}
      </Stack>
    </Box>
  );
};

LibraryNavbar.defaultProps = LIBRARY_NAVBAR_DEFAULT_PROPS;
LibraryNavbar.propTypes = LIBRARY_NAVBAR_PROP_TYPES;

export { LibraryNavbar };
