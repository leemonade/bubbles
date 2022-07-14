import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Stack } from '../../../layout';
import { GridItemRender } from './GridItemRender';
import { useElementSize } from '@mantine/hooks';

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
  useAria,
  ...props
}) => {
  const [currentItem, setCurrentItem] = useState(selected);
  const { ref, width } = useElementSize();
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
    let columns = 3;
    if (width) {
      // Calculamos el número de columnas que caben en la pantalla
      columns = Math.floor(width / itemMinWidth);
    }
    const colWidth =
      rows.length < columns
        ? `minmax(${itemMinWidth}px, ${itemMinWidth}px)`
        : `minmax(${itemMinWidth}px, 1fr)`;
    return {
      ...style,
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, ${colWidth})`,
    };
  }, [itemMinWidth, style, rows, width]);

  return (
    <Stack ref={ref} wrap="wrap" {...props} style={gridStyle} role={useAria ? 'grid' : undefined}>
      {itemRender &&
        rows.map((row, i) => {
          prepareRow(row);
          return itemRender({
            key: `mitem-${i}`,
            item: row,
            headers: headerGroups[0]?.headers,
            selected: row.original.id === currentItem?.id,
            onClick: () => handleOnSelect(row.original),
            useAria,
          });
        })}
    </Stack>
  );
};

GridView.defaultProps = GRID_VIEW_DEFAULT_PROPS;
GridView.propTypes = GRID_VIEW_PROP_TYPES;

export { GridView };
