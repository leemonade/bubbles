import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
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
import { LibraryNavbarItem as NavbarItem } from './LibraryNavbarItem';
import {
  PluginLeebraryIcon,
  PluginContentCreatorIcon,
  PluginKanbanIcon,
  StarIcon,
  PluginKimIcon,
} from '@bubbles-ui/icons/solid';
import { CloudUploadIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { LibraryNavbarStyles } from './LibraryNavbar.styles';
import { isEmpty, isFunction } from 'lodash';

export const LIBRARY_NAVBAR_DEFAULT_PROPS = {
  labels: {
    uploadButton: '',
    quickAccess: '',
    createNewTitle: '',
    fileUploadTitle: '',
    fileUploadSubtitle: '',
  },
  categories: [],
  selectedCategory: {},
};
export const LIBRARY_NAVBAR_PROP_TYPES = {
  labels: PropTypes.shape({
    uploadButton: PropTypes.string,
    quickAccess: PropTypes.string,
    createNewTitle: PropTypes.string,
    fileUploadTitle: PropTypes.string,
    fileUploadSubtitle: PropTypes.string,
  }),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.node,
      name: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
  selectedCategory: PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
  }),
  onNav: PropTypes.func,
  onFile: PropTypes.func,
  onNew: PropTypes.func,
};

const LibraryNavbar = ({
  labels,
  categories,
  selectedCategory,
  onNav,
  onFile,
  onNew,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onFileHandler = (e) => {
    isFunction(onFile) && onFile(e);
  };

  const onNewHandler = (category) => {
    isFunction(onNew) && onNew(category);
  };

  const onNavHandler = (category) => {
    isFunction(onNav) && onNav(category);
  };

  const renderNavbarItems = () => {
    return categories.map((category) => {
      return (
        <NavbarItem
          key={category.id}
          icon={category.icon}
          label={category.name}
          selected={category.id === selectedCategory.id || category.slug === selectedCategory.slug}
          onClick={() => onNavHandler(category)}
        />
      );
    });
  };

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
            spacing={5}
            className={classes.fileUploadWrapper}
            skipFlex
          >
            {isExpanded && (
              <Stack spacing={4} alignItems={'center'}>
                <Text>{labels.uploadButton}</Text>
                <IconButton icon={<RemoveIcon />} onClick={() => setIsExpanded(false)} />
              </Stack>
            )}
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
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'start'}
            className={classes.navbarTopList}
            skipFlex
          >
            <Text transform={'uppercase'}>{labels.createNewTitle}</Text>
            <NavbarItem
              icon={<PluginContentCreatorIcon height={16} width={16} />}
              label={'Document'}
              onClick={() => onNewHandler('document')}
            />
            <NavbarItem
              icon={<StarIcon height={16} width={16} />}
              label={'Bookmark'}
              onClick={() => onNewHandler('bookmark')}
            />
            <NavbarItem
              icon={<StarIcon height={16} width={16} />}
              label={'Paths'}
              onClick={() => onNewHandler('path')}
            />
            <NavbarItem
              icon={<StarIcon height={16} width={16} />}
              label={'Tasks'}
              onClick={() => onNewHandler('task')}
            />
            <NavbarItem
              icon={<StarIcon height={16} width={16} />}
              label={'Activities'}
              onClick={() => onNewHandler('activity')}
            />
          </Stack>
        </Stack>
      </Paper>
      <Stack direction={'column'} className={classes.navbarBody}>
        <NavbarItem
          icon={<PluginKimIcon />}
          label={labels.quickAccess}
          onClick={() => onNavHandler(null)}
          selected={!selectedCategory || isEmpty(selectedCategory)}
        />
        <Divider style={{ marginBlock: 8, marginInline: 10 }} />
        {renderNavbarItems()}
      </Stack>
    </Box>
  );
};

LibraryNavbar.defaultProps = LIBRARY_NAVBAR_DEFAULT_PROPS;
LibraryNavbar.propTypes = LIBRARY_NAVBAR_PROP_TYPES;

export { LibraryNavbar };
