import React, { useEffect, useState, useRef } from 'react';
import {
  ActionButton,
  AvatarSubject,
  Box,
  SearchInput,
  Text,
  TextClamp,
} from '@bubbles-ui/components';
import { Popover } from '@mantine/core';
import { isEmpty, isFunction } from 'lodash';
import { useId } from '@mantine/hooks';
import { CheckIcon, ChevDownIcon, ChevUpIcon } from '@bubbles-ui/icons/outline';
import { HeaderDropdownStyles } from './HeaderDropdown.styles';
import {
  HEADER_DROPDOWN_DEFAULT_PROPS,
  HEADER_DROPDOWN_PROP_TYPES,
} from './HeaderDropdown.constants';

const normalizeString = (string) =>
  string
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const HeaderDropdown = ({
  data,
  placeholder,
  itemComponent,
  valueComponent,
  value,
  readOnly,
  onChange,
  withSearchInput,
  hideIcon,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [filter, setFilter] = useState('');
  const [isOnlyOneItem, setIsOnlyOneItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    data.find((item) => item?.id === value?.id) || data[0] || {},
  );
  const headerRef = useRef(null);
  const dropdownId = useId();
  React.useEffect(() => {
    setIsOnlyOneItem(data.length === 1);
  }, [data]);

  const { classes } = HeaderDropdownStyles(
    {
      withSearchInput,
      hasDescription: !isEmpty(selectedItem?.description),
      itemSelectedFontSize: props.itemSelectedFontSize || '18px',
      itemSelectedFontWeight: props.itemSelectedFontWeight || '600',
    },
    { name: 'HeaderDropdown' },
  );

  const onChangeHandler = (item) => {
    setSelectedItem(item);
    if (isFunction(onChange)) onChange(item);
    setIsOpened(false);
  };

  const handleItemKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onChangeHandler(item);
      event.preventDefault();
    }
  };

  const loadItemList = () => {
    const itemListToReturn = data.filter((item) => {
      const itemLabel = normalizeString(item?.label);
      const itemDescription = normalizeString(item?.description);
      const filterValue = normalizeString(filter);
      return itemLabel?.includes(filterValue) || itemDescription?.includes(filterValue);
    });
    return itemListToReturn.map((item, index) =>
      itemComponent ? (
        React.cloneElement(itemComponent, [...item])
      ) : (
        <Box
          key={`${index} ${item?.id}`}
          className={
            selectedItem?.id === item?.id ? classes.itemComponentSelected : classes.itemComponent
          }
          onClick={() => onChangeHandler(item)}
          tabIndex={0}
          role="option"
          aria-selected={selectedItem?.id === item?.id}
          onKeyDown={(e) => handleItemKeyDown(e, item)}
        >
          <Box className={classes.itemComponentContent}>
            {!hideIcon ? (
              <Box className={classes.itemIconSmall} style={{ backgroundColor: item?.color }}>
                <AvatarSubject color={item?.color} icon={item?.icon} size="lg" name={item?.label} />
              </Box>
            ) : null}
            <Box className={classes.valueItemContent}>
              <TextClamp lines={1} maxLines={1}>
                <Text className={classes.itemComponentLabel} color="primary" strong>
                  {item?.label}
                </Text>
              </TextClamp>
              {item?.description ? (
                <TextClamp lines={1} maxLines={1}>
                  <Text
                    className={classes.itemComponentDescription}
                    role="productive"
                    size="xs"
                    stronger
                  >
                    {item?.description}
                  </Text>
                </TextClamp>
              ) : null}
            </Box>
          </Box>
          <Box className={classes.itemComponentIcon}>
            {selectedItem?.id === item?.id ? <CheckIcon /> : null}
          </Box>
        </Box>
      ),
    );
  };

  useEffect(() => {
    setSelectedItem(data.find((item) => item?.id === value?.id) || data[0] || {});
  }, [JSON.stringify(value)]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOpened(!isOpened);
      event.preventDefault();
    }
  };

  return (
    <Box ref={headerRef} className={classes.root} {...props}>
      <Popover
        opened={isOpened}
        onClose={() => setIsOpened(false)}
        onChange={setIsOpened}
        position="bottom-start"
        shadow="lg"
        withinPortal
        classNames={{ dropdown: classes.dropDown }}
        trapFocus
        returnFocus
      >
        <Popover.Target>
          <Box
            className={classes.header}
            onClick={() => !readOnly && setIsOpened(!isOpened)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-haspopup="listbox"
            aria-expanded={isOpened}
            aria-controls={dropdownId}
          >
            {valueComponent ? (
              React.cloneElement(valueComponent, [...selectedItem])
            ) : (
              <Box className={classes.valueComponent}>
                {!hideIcon ? (
                  <AvatarSubject
                    color={selectedItem?.color}
                    icon={selectedItem?.icon}
                    size="lg"
                    name={selectedItem?.label}
                  />
                ) : null}
                <Box className={classes.content}>
                  <TextClamp lines={1} maxLines={1}>
                    <Text className={classes.title}>{selectedItem?.label}</Text>
                  </TextClamp>
                  {selectedItem?.description ? (
                    <Text className={classes.description}>{selectedItem?.description}</Text>
                  ) : null}
                </Box>
              </Box>
            )}
            {!readOnly && !isOnlyOneItem && (
              <Box>
                <ActionButton
                  className={classes.dropDownIcon}
                  icon={
                    isOpened ? (
                      <ChevUpIcon
                        height={props.chevronSize || 24}
                        width={props.chevronSize || 24}
                      />
                    ) : (
                      <ChevDownIcon
                        height={props.chevronSize || 24}
                        width={props.chevronSize || 24}
                      />
                    )
                  }
                  onClick={() => setIsOpened(!isOpened)}
                  color="primary"
                  active={isOpened}
                  aria-hidden="true"
                />
              </Box>
            )}
          </Box>
        </Popover.Target>

        <Popover.Dropdown>
          <Box className={classes.dropDownContent}>
            {withSearchInput ? (
              <Box
                className={classes.searchInput}
                onFocusCapture={() => setIsOpened(true)}
                onBlurCapture={() => setIsOpened(false)}
              >
                <SearchInput
                  placeholder={placeholder}
                  variant="filled"
                  value={filter}
                  onChange={setFilter}
                />
              </Box>
            ) : null}

            <Box className={classes.itemList}>{loadItemList()}</Box>
          </Box>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
};

HeaderDropdown.defaultProps = HEADER_DROPDOWN_DEFAULT_PROPS;
HeaderDropdown.propTypes = HEADER_DROPDOWN_PROP_TYPES;

export { HeaderDropdown };
