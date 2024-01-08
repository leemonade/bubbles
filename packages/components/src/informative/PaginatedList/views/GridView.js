import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { useElementSize } from '@mantine/hooks';
import { Stack } from '../../../layout/Stack';
import { GridItemRender } from './GridItemRender';
import { TableStyles } from '../../Table/Table.styles';

const GRID_VIEW_DEFAULT_PROPS = {
  itemRender: ({ key, ...props }) => <GridItemRender key={key} {...props} />,
  itemMinWidth: 360,
  style: {},
};
const GRID_VIEW_PROP_TYPES = {
  itemRender: PropTypes.func,
  itemMinWidth: PropTypes.number,
  style: PropTypes.any,
  useAria: PropTypes.bool,
  onStyleRow: PropTypes.func,
  onSelect: PropTypes.func,
  selectable: PropTypes.bool,
  selected: PropTypes.any,
  rows: PropTypes.array,
  headerGroups: PropTypes.array,
  prepareRow: PropTypes.func,
  staticColumnWidth: PropTypes.bool,
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
  onStyleRow,
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

    if (props.staticColumnWidth)
      return {
        ...style,
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, ${itemMinWidth})`,
      };

    return {
      ...style,
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, ${colWidth})`,
    };
  }, [itemMinWidth, style, rows, width]);

  const { theme } = TableStyles();

  return (
    <Stack ref={ref} wrap="wrap" {...props} style={gridStyle} role={useAria ? 'grid' : undefined}>
      {itemRender &&
        rows.map((row, i) => {
          prepareRow(row);
          return itemRender({
            key: `mitem-${i}`,
            item: row,
            style: onStyleRow({ row, theme }),
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
