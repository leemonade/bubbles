import React from 'react';
import PropTypes from 'prop-types';
import { Masonry } from '../../../layout';
import { GridItemRender } from './GridItemRender';

const GRID_VIEW_DEFAULT_PROPS = {
  itemRender: ({ key, ...props }) => <GridItemRender key={key} {...props} />,
};
const GRID_VIEW_PROP_TYPES = {
  itemRender: PropTypes.func,
};

const GridView = ({ headerGroups, rows, prepareRow, itemRender, ...props }) => {
  return (
    <Masonry {...props}>
      {itemRender &&
        rows.map((row, i) => {
          prepareRow(row);
          return itemRender({ key: `mitem-${i}`, item: row, headers: headerGroups[0]?.headers });
        })}
    </Masonry>
  );
};

GridView.defaultProps = GRID_VIEW_DEFAULT_PROPS;
GridView.propTypes = GRID_VIEW_PROP_TYPES;

export { GridView };
