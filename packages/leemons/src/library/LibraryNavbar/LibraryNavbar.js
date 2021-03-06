import React, { useState, useCallback, useMemo } from 'react';
import { isFunction } from 'lodash';
import {
  Box,
  Stack,
  FileUpload,
  Button,
  Text,
  Paper,
  IconButton,
  Divider,
  SimpleBar,
} from '@bubbles-ui/components';
import { PluginLeebraryIcon, PluginKimIcon } from '@bubbles-ui/icons/solid';
import { CloudUploadIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { LibraryNavbarItem as NavbarItem } from './LibraryNavbarItem';
import { LibraryNavbarStyles } from './LibraryNavbar.styles';
import { LIBRARY_NAVBAR_DEFAULT_PROPS, LIBRARY_NAVBAR_PROP_TYPES } from './LibraryNavbar.constants';

const LibraryNavbar = ({ labels, categories, selectedCategory, onNav, onFile, onNew, loading }) => {
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
    (callback, onlyCreatable = false, ignoreSelected = false) => {
      return categories
        .filter((item) => (onlyCreatable ? item.creatable === true : true))
        .map((category) => (
          <NavbarItem
            key={category.id}
            icon={category.icon}
            label={category.name}
            loading={loading}
            selected={
              !ignoreSelected &&
              (category.id === selectedCategory || category.key === selectedCategory)
            }
            onClick={() => callback(category)}
          />
        ));
    },
    [categories, selectedCategory, loading]
  );

  const { classes, cx } = LibraryNavbarStyles({ isExpanded }, { name: 'LibraryNavbar' });
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <PluginLeebraryIcon height={24} width={24} />
        <Text className={classes.title}>{labels.title}</Text>
      </Box>
      <SimpleBar className={classes.navItems}>
        <Stack direction={'column'} fullWidth>
          <NavbarItem
            icon={<PluginKimIcon />}
            label={labels.quickAccess}
            onClick={() => onNavHandler(null)}
            selected={quickAccessSelected}
          />
          <Divider style={{ marginBlock: 8, marginInline: 10 }} />
          {renderNavbarItems(onNavHandler)}
        </Stack>
        <Paper
          className={classes.navbarBottom}
          shadow={!isExpanded ? 'none' : 'level03'}
          padding={0}
        >
          <Box className={classes.uploadButton}>
            <Button
              size={'sm'}
              fullWidth
              rightIcon={<CloudUploadIcon />}
              onClick={() => setIsExpanded(true)}
            >
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
                  <Box style={{ flex: 1 }}>
                    <Text transform="uppercase" className={classes.sectionTitle}>
                      {labels.createNewTitle}
                    </Text>
                  </Box>
                  <Box>
                    <IconButton icon={<RemoveIcon />} onClick={() => setIsExpanded(false)} />
                  </Box>
                </Stack>
              )}
            </Stack>
            <Stack
              direction={'column'}
              alignItems={'start'}
              className={classes.navbarTopList}
              skipFlex
            >
              {renderNavbarItems(onNewHandler, true, true)}
              <Text transform="uppercase" className={classes.sectionTitle}>
                {labels.uploadTitle}
              </Text>
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
          </Stack>
        </Paper>
      </SimpleBar>
    </Box>
  );
};

LibraryNavbar.defaultProps = LIBRARY_NAVBAR_DEFAULT_PROPS;
LibraryNavbar.propTypes = LIBRARY_NAVBAR_PROP_TYPES;

export { LibraryNavbar };
