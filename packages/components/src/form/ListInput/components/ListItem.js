import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RemoveIcon, SortDragIcon } from '@bubbles-ui/icons/outline';
import { CheckIcon, DeleteBinIcon, EditWriteIcon } from '@bubbles-ui/icons/solid';
import { isFunction } from 'lodash';
import { Box, Stack } from '../../../layout';
import { ActionButton } from '../../ActionButton';

const ItemValueRender2 = ({ item }) => (
  <Box sx={() => ({ width: '100%' })} dangerouslySetInnerHTML={{ __html: item }} />
);

ItemValueRender2.propTypes = {
  item: PropTypes.string,
};

export const ItemWrapperWithBorder = ({ children }) => (
  <Box sx={() => ({ width: '100%', padding: '4px 0' })}>
    <Box
      sx={(theme) => ({
        border: `1px solid ${theme.other.global.border.color.line.subtle}`,
        borderRadius: 4,
        padding: theme.spacing[4],
        backgroundColor: 'white',
      })}
    >
      {children}
    </Box>
  </Box>
);

ItemWrapperWithBorder.propTypes = {
  children: PropTypes.node,
};

const getRenderComponent = (Component) => (isFunction(Component) ? <Component /> : Component);

const ListItem = forwardRef(
  (
    {
      provided,
      item,
      removeItem,
      editItem,
      inputRender: IInputRender,
      itemContainerRender: IItemContainerRender = <Stack alignItems="center" fullWidth />,
      itemValueRender: IItemValueRender = ItemValueRender2,
      editingKey,
      valueKey,
      stopEdit,
      classes,
      onChange,
      readonly,
      errorRequiredMessage,
      index,
      withBorder,
    },
    ref,
  ) => {
    const [value, setValue] = useState(item[valueKey]);
    const [hasError, setHasError] = useState(false);

    const InputRender = getRenderComponent(IInputRender);
    const ItemContainerRender = getRenderComponent(IItemContainerRender);
    const ItemValueRender = getRenderComponent(IItemValueRender);

    function update() {
      if (value) {
        onChange(value);
        if (hasError) setHasError(false);
      } else {
        setHasError(true);
      }
    }

    useEffect(() => {
      setValue(item[valueKey]);
    }, [item]);

    const renderSortableIcon = () => (
      <Box key={1} sx={(theme) => ({ marginRight: theme.spacing[4] })}>
        <SortDragIcon className={classes.sortableIcon} />
      </Box>
    );

    const renderActionButtons = () => (
      <Stack key={3}>
        <ActionButton
          icon={<EditWriteIcon width={18} height={18} />}
          disabled={!!editingKey}
          onClick={editItem}
        />
        <ActionButton
          icon={<DeleteBinIcon width={18} height={18} />}
          disabled={!!editingKey}
          onClick={removeItem}
        />
      </Stack>
    );

    const renderChildren = () => {
      let children = [
        !readonly ? renderSortableIcon() : null,
        React.cloneElement(ItemValueRender, {
          item: item[valueKey],
          index,
          key: 2,
        }),
        !readonly ? renderActionButtons() : null,
      ];

      if (editingKey === item.__key) {
        children = [
          renderSortableIcon(),
          <Box sx={(theme) => ({ width: '100%', marginRight: theme.spacing[4] })} key={2}>
            {React.cloneElement(InputRender, {
              value,
              onChange: (event) => {
                setValue(event);
                if (event) setHasError(false);
              },
              index,
              required: true,
              error: hasError ? errorRequiredMessage : null,
            })}
          </Box>,
          <Stack key={3}>
            <ActionButton icon={<CheckIcon />} onClick={update} />
            <ActionButton
              icon={<RemoveIcon />}
              onClick={() => {
                setValue(item.value);
                stopEdit();
              }}
            />
          </Stack>,
        ];
      }

      return React.cloneElement(ItemContainerRender, { children });
    };

    const Wrapper = withBorder ? ItemWrapperWithBorder : React.Fragment;

    return (
      <Box
        ref={(e) => {
          provided.innerRef(e);
          if (ref) ref(e);
        }}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        sx={() => ({ display: 'flex' })}
      >
        <Wrapper>{renderChildren()}</Wrapper>
      </Box>
    );
  },
);

ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  provided: PropTypes.any,
  item: PropTypes.any,
  removeItem: PropTypes.any,
  editItem: PropTypes.any,
  inputRender: PropTypes.any,
  itemContainerRender: PropTypes.any,
  itemValueRender: PropTypes.any,
  editingKey: PropTypes.any,
  valueKey: PropTypes.any,
  stopEdit: PropTypes.any,
  classes: PropTypes.any,
  onChange: PropTypes.any,
  readonly: PropTypes.any,
  errorRequiredMessage: PropTypes.any,
  index: PropTypes.any,
  withBorder: PropTypes.bool,
};

export { ListItem };
