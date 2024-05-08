import React, { useEffect, useState } from 'react';
import {
  ActionButton,
  Box,
  ImageLoader,
  SearchInput,
  Text,
  TextClamp,
} from '@bubbles-ui/components';
import { Popover } from '@mantine/core';
import { isEmpty, isFunction, isNil } from 'lodash';
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

  const { classes, cx } = HeaderDropdownStyles(
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
      console.log('item', item);
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
            {!isNil(item?.image) && !isEmpty(item?.image) && !item?.showIcon && !hideIcon ? (
              <ImageLoader height={32} width={32} radius="50%" src={item?.image} />
            ) : null}
            {!isNil(item?.icon) &&
            !isEmpty(item?.icon) &&
            !isNil(item?.color) &&
            !isEmpty(item?.color) &&
            item?.showIcon &&
            !hideIcon ? (
              <Box className={classes.itemIconSmall} style={{ backgroundColor: item?.color }}>
                <ImageLoader forceImage height={16} width={16} src={item?.icon} />
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
                {!isNil(selectedItem?.image) &&
                !isEmpty(selectedItem?.image) &&
                !selectedItem?.showIcon &&
                !hideIcon ? (
                  <ImageLoader height={48} width={48} radius="50%" src={selectedItem?.image} />
                ) : null}
                {!isNil(selectedItem?.icon) &&
                !isEmpty(selectedItem?.icon) &&
                !isNil(selectedItem?.color) &&
                !isEmpty(selectedItem?.color) &&
                selectedItem?.showIcon &&
                !hideIcon ? (
                  <Box
                    className={classes.itemIcon}
                    style={{ backgroundColor: selectedItem?.color }}
                  >
                    <ImageLoader forceImage height={20} width={20} src={selectedItem?.icon} />
                  </Box>
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
