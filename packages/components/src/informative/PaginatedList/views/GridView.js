import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Masonry, Stack } from '../../../layout';
import { GridItemRender } from './GridItemRender';

const GRID_VIEW_DEFAULT_PROPS = {
  itemRender: ({ key, ...props }) => <GridItemRender key={key} {...props} />,
  itemMinWidth: 360,
  style: {},
};
const GRID_VIEW_PROP_TYPES = {
  itemRender: PropTypes.func,
  itemMinWidth: PropTypes.number,
  style: PropTypes.any,
};

const GridView = ({
  headerGroups,
  rows,
  prepareRow,
  itemRender,
  onSelect,
  selectable,
  selected,
  style,
  itemMinWidth,
  ...props
}) => {
  const [currentItem, setCurrentItem] = useState(selected);

  useEffect(() => {
    if (selected?.id !== currentItem?.id) setCurrentItem(selected);
  }, [selected]);

  const handleOnSelect = (item) => {
    if (selectable) {
      setCurrentItem(item);
      if (isFunction(onSelect)) {
        onSelect(item);
      }
    }
  };

  const gridStyle = useMemo(() => {
    const colWidth =
      rows.length < 3
        ? `minmax(${itemMinWidth}px, ${itemMinWidth}px)`
        : `minmax(${itemMinWidth}px, 1fr)`;
    return {
      ...style,
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, ${colWidth})`,
    };
  }, [itemMinWidth, style, rows]);

  return (
    <Stack wrap="wrap" {...props} style={gridStyle}>
      {itemRender &&
        rows.map((row, i) => {
          prepareRow(row);
          return itemRender({
            key: `mitem-${i}`,
            item: row,
            headers: headerGroups[0]?.headers,
            selected: row.original.id === currentItem?.id,
            onClick: () => handleOnSelect(row.original),
          });
        })}
    </Stack>
  );
};

GridView.defaultProps = GRID_VIEW_DEFAULT_PROPS;
GridView.propTypes = GRID_VIEW_PROP_TYPES;

export { GridView };
