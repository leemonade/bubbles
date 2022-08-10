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
import { ChevDownIcon, ChevUpIcon } from '@bubbles-ui/icons/outline';

const normalizeString = (string) => {
  return string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

const HeaderDropdown = ({
  data,
  placeholder,
  itemComponent,
  valueComponent,
  value,
  onChange,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useClickOutside(() => setIsOpened(false));
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState(
    data.find((item) => item?.id === value?.id) || data[0] || {}
  );
  const headerRef = useRef(null);
  const moreThanOneData = data.length > 1;

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
          className={classes.itemComponent}
          onClick={() => onChangeHandler(item)}
        >
          {!isNil(item?.image) && !isEmpty(item?.image) ? (
            <Box className={classes.itemImage}>
              <ImageLoader height={40} width={40} radius="50%" src={item?.image} />
              {!isNil(item?.icon) && !isEmpty(item?.icon) ? (
                <Box className={classes.itemComponentIcon} style={{ backgroundColor: item?.color }}>
                  <ImageLoader
                    forceImage
                    height={16}
                    imageStyles={{ width: 16 }}
                    src={item?.icon}
                  />
                </Box>
              ) : null}
            </Box>
          ) : null}
          <TextClamp lines={1} maxLines={1}>
            <Text className={classes.itemComponentLabel} color="primary" strong>
              {item?.label}
            </Text>
          </TextClamp>
          <TextClamp lines={1} maxLines={1}>
            <Text className={classes.itemComponentDescription} role="productive" size="xs" stronger>
              {item?.description}
            </Text>
          </TextClamp>
        </Box>
      )
    );
  };

  useEffect(() => {
    setSelectedItem(data.find((item) => item?.id === value?.id) || data[0] || {});
  }, [JSON.stringify(value)]);

  const { classes, cx } = HeaderDropdownStyles({ isOpened, headerRef }, { name: 'HeaderDropdown' });
  return (
    <Box ref={ref} className={classes.root} {...props}>
      <Box ref={headerRef} className={classes.header}>
        {valueComponent ? (
          React.cloneElement(valueComponent, [...selectedItem])
        ) : (
          <Box className={classes.valueComponent}>
            {!isNil(selectedItem?.image) && !isEmpty(selectedItem?.image) ? (
              <Box className={classes.itemImage}>
                <ImageLoader height={80} width={80} radius="50%" src={selectedItem?.image} />
                {!isNil(selectedItem?.icon) &&
                !isEmpty(selectedItem?.icon) &&
                !isNil(selectedItem?.color) &&
                !isEmpty(selectedItem?.color) ? (
                  <Box
                    className={classes.itemIcon}
                    style={{ backgroundColor: selectedItem?.color }}
                  >
                    <ImageLoader
                      forceImage
                      height={16}
                      imageStyles={{ width: 16 }}
                      src={selectedItem?.icon}
                    />
                  </Box>
                ) : null}
              </Box>
            ) : null}
            <Box className={classes.content}>
              <TextClamp lines={1} maxLines={1}>
                <Text color="primary" size="lg" strong>
                  {selectedItem?.label}
                </Text>
              </TextClamp>
              <Text role="productive" size="md" stronger>
                {selectedItem?.description}
              </Text>
            </Box>
          </Box>
        )}
        {moreThanOneData && (
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
          />
        )}
      </Box>
      {moreThanOneData && (
        <Box className={classes.dropDown}>
          <Box className={classes.searchInput}>
            <SearchInput
              placeholder={placeholder}
              variant="filled"
              value={filter}
              onChange={setFilter}
            />
          </Box>
          <Box className={classes.itemList}>{loadItemList()}</Box>
        </Box>
      )}
    </Box>
  );
};

HeaderDropdown.defaultProps = HEADER_DROPDOWN_DEFAULT_PROPS;
HeaderDropdown.propTypes = HEADER_DROPDOWN_PROP_TYPES;

export { HeaderDropdown };
