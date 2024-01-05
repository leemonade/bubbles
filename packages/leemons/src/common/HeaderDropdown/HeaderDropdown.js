import React, { useEffect, useRef, useState } from 'react';
import {
  ActionButton,
  Box,
  ImageLoader,
  SearchInput,
  Text,
  TextClamp,
} from '@bubbles-ui/components';
import { isEmpty, isFunction, isNil } from 'lodash';
import { useClickOutside } from '@mantine/hooks';
import { HeaderDropdownStyles } from './HeaderDropdown.styles';
import {
  HEADER_DROPDOWN_DEFAULT_PROPS,
  HEADER_DROPDOWN_PROP_TYPES,
} from './HeaderDropdown.constants';
import { CheckIcon, ChevDownIcon, ChevUpIcon } from '@bubbles-ui/icons/outline';

const normalizeString = (string) => {
  return string
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

const HeaderDropdown = ({
  data,
  placeholder,
  itemComponent,
  valueComponent,
  value,
  readOnly,
  onChange,
  withSearchInput = true,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useClickOutside(() => setIsOpened(false));
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState(
    data.find((item) => item?.id === value?.id) || data[0] || {},
  );
  const headerRef = useRef(null);

  const onChangeHandler = (item) => {
    setSelectedItem(item);
    isFunction(onChange) && onChange(item);
    setIsOpened(false);
  };

  const loadItemList = () => {
    const itemListToReturn = data.filter((item) => {
      const itemLabel = normalizeString(item?.label);
      const itemDescription = normalizeString(item?.description);
      const filterValue = normalizeString(filter);
      return itemLabel.includes(filterValue) || itemDescription.includes(filterValue);
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
            {!isNil(item?.image) && !isEmpty(item?.image) && !item?.showIcon ? (
              <ImageLoader height={32} width={32} radius="50%" src={item?.image} />
            ) : null}
            {!isNil(item?.icon) &&
            !isEmpty(item?.icon) &&
            !isNil(item?.color) &&
            !isEmpty(item?.color) &&
            item?.showIcon ? (
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

  const { classes, cx } = HeaderDropdownStyles(
    {
      isOpened,
      headerRef,
      withSearchInput,
    },
    { name: 'HeaderDropdown' },
  );

  return (
    <Box ref={ref} className={classes.root} {...props}>
      <Box ref={headerRef} className={classes.header}>
        {valueComponent ? (
          React.cloneElement(valueComponent, [...selectedItem])
        ) : (
          <Box className={classes.valueComponent}>
            {!isNil(selectedItem?.image) &&
            !isEmpty(selectedItem?.image) &&
            !selectedItem?.showIcon ? (
              <ImageLoader height={48} width={48} radius="50%" src={selectedItem?.image} />
            ) : null}
            {!isNil(selectedItem?.icon) &&
            !isEmpty(selectedItem?.icon) &&
            !isNil(selectedItem?.color) &&
            !isEmpty(selectedItem?.color) &&
            selectedItem?.showIcon ? (
              <Box className={classes.itemIcon} style={{ backgroundColor: selectedItem?.color }}>
                <ImageLoader forceImage height={20} width={20} src={selectedItem?.icon} />
              </Box>
            ) : null}
            <Box className={classes.content}>
              <TextClamp lines={1} maxLines={1}>
                <Text className={classes.title}>{selectedItem?.label}</Text>
              </TextClamp>
              {classes.description ? (
                <Text className={classes.description}>{selectedItem?.description}</Text>
              ) : null}
            </Box>
          </Box>
        )}
        {!readOnly && (
          <ActionButton
            className={classes.dropDownIcon}
            icon={
              isOpened ? (
                <ChevUpIcon height={24} width={24} />
              ) : (
                <ChevDownIcon height={24} width={24} />
              )
            }
            onClick={() => setIsOpened(!isOpened)}
            color="primary"
            active={isOpened}
          />
        )}
      </Box>
      {!readOnly && (
        <Box className={classes.dropDown}>
          {withSearchInput ? (
            <Box className={classes.searchInput}>
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
      )}
    </Box>
  );
};

HeaderDropdown.defaultProps = HEADER_DROPDOWN_DEFAULT_PROPS;
HeaderDropdown.propTypes = HEADER_DROPDOWN_PROP_TYPES;

export { HeaderDropdown };
