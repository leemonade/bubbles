import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Masonry } from '../../../layout';
import { GridItemRender } from './GridItemRender';

const GRID_VIEW_DEFAULT_PROPS = {
  itemRender: ({ key, ...props }) => <GridItemRender key={key} {...props} />,
};
const GRID_VIEW_PROP_TYPES = {
  itemRender: PropTypes.func,
};

const GridView = ({
  headerGroups,
  rows,
  prepareRow,
  itemRender,
  onSelect,
  selectable,
  ...props
}) => {
  const [currentItem, setCurrentItem] = useState(null);

  const handleOnSelect = (item) => {
    if (selectable) {
      setCurrentItem(item);
      if (isFunction(onSelect)) {
        onSelect(item);
      }
    }
  };

  return (
    <Masonry {...props}>
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
    </Masonry>
  );
};

GridView.defaultProps = GRID_VIEW_DEFAULT_PROPS;
GridView.propTypes = GRID_VIEW_PROP_TYPES;

export { GridView };
