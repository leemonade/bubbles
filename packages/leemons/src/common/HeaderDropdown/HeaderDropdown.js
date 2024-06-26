import React, { useEffect, useState } from 'react';
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
import { useClickOutside } from '@mantine/hooks';
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
  const ref = useClickOutside(() => setIsOpened(false));
  const [filter, setFilter] = useState('');
  const [isOnlyOneItem, setIsOnlyOneItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    data.find((item) => item?.id === value?.id) || data[0] || {},
  );
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

  return (
    <Box ref={ref} className={classes.root} {...props}>
      <Popover
        opened={isOpened}
        onClose={() => setIsOpened(false)}
        onChange={setIsOpened}
        position="bottom-start"
        shadow="lg"
        withinPortal
        classNames={{ dropdown: classes.dropDown }}
      >
        <Popover.Target>
          <Box className={classes.header}>
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
