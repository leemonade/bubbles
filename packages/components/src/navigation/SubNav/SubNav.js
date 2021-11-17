import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, List } from '@mantine/core';
import SimpleBar from 'simplebar-react';
import { useDrop } from 'react-dnd';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { SubNavStyles } from './SubNav.styles';
import { SubNavItem } from './SubNavItem/SubNavItem';
import { DndSortItem, DndDropZone, registerDndLayer } from './dnd';
import { IconButton } from './../../form';

const MAINNAV_WIDTH = 52;

export const SubNav = ({ children, item, onClose, activeItem, state, setState, ...props }) => {
  const { classes, cx } = SubNavStyles({ itemWidth: MAINNAV_WIDTH });

  const setEditingItem = (submenuEditingItem) => {
    setState({ ...state, submenuEditingItem });
  };

  const onDrop = useCallback(
    async (droppedItem) => {
      const { _tempId, ...saveItem } = droppedItem;
      const order = _.map(item.customChildrens, 'id');
      const index = _.findIndex(order, (id) => id === _tempId);
      // Rest of logic
    },
    [item?.customChildrens]
  );

  const [, drop] = useDrop(() => ({ accept: 'menu-item-sort' }));

  return item ? (
    <Box className={classes.root}>
      {/* Header */}
      <Box className={classes.navHeader}>
        <Box className={classes.navHeaderLabel}>{item.label}</Box>
        {/* Close button */}
        <Box className={classes.navHeaderAction}>
          <IconButton
            rounded
            color="negative"
            icon={<ChevronLeftIcon className={classes.navHeaderActionIcon} />}
            onClick={onClose}
          />
        </Box>
      </Box>
      {/* SubNav Items */}
      <DndDropZone type="menu-item" onDrop={onDrop} className={classes.navDropZone}>
        {() => (
          <SimpleBar className={classes.navBar}>
            <Box component="nav">
              <List classNames={{ root: classes.navList, item: classes.navListItem }}>
                {item.childrens.map((child) => (
                  <List.Item key={child.id}>
                    <SubNavItem
                      state={state}
                      setState={setState}
                      item={child}
                      active={activeItem?.id === child.id}
                    />
                  </List.Item>
                ))}

                {item.customChildrens.length ? (
                  <Box className="h-px bg-neutral-focus my-3"></Box>
                ) : (
                  ''
                )}

                <Box ref={drop}>
                  {item.customChildrens.map((child) => (
                    <List.Item key={child.id}>
                      <DndSortItem
                        id={child.id}
                        find={find}
                        move={move}
                        type={'menu-item-sort'}
                        accept={['menu-item-sort', 'menu-item']}
                        emptyLayout={true}
                        disableDrag={!state.submenuEditMode || !!state.submenuEditingItem}
                      >
                        {({ isDragging }) => (
                          <SubNavItem
                            item={child}
                            remove={remove}
                            editMode={state.submenuEditMode && !state.submenuEditingItem}
                            changeToEditItem={(e) => setEditingItem(e)}
                            editItemMode={state.submenuEditingItem === child}
                            isDragging={!!child._tempId || isDragging}
                            active={activeItem?.id === child.id}
                            updateItem={updateItem}
                            state={state}
                            setState={setState}
                          />
                        )}
                      </DndSortItem>
                    </List.Item>
                  ))}
                </Box>
              </List>
            </Box>
          </SimpleBar>
        )}
      </DndDropZone>
    </Box>
  ) : null;
};

SubNav.propTypes = {};
