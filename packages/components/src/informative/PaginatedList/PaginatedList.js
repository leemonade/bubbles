import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTable, usePagination } from 'react-table';
import { Box, Stack, Paper } from '../../layout';
import { LoadingOverlay } from '../../overlay';
import { Pager, PAGER_VARIANTS } from '../../navigation/Pager';
import { TableView } from './views/TableView';
import { GridView } from './views/GridView';
import { PaginatedListStyles } from './PaginatedList.styles';

export const PAGINATED_LIST_LAYOUTS = ['table', 'grid'];
export const PAGINATED_LIST_VARIANTS = PAGER_VARIANTS;
export const PAGINATED_LIST_PAGER_PLACES = ['start', 'center', 'end'];

export const PAGINATED_LIST_DEFAULT_PROPS = {
  columns: [],
  layout: PAGINATED_LIST_LAYOUTS[0],
  variant: PAGINATED_LIST_VARIANTS[0],
  page: 0,
  size: 10,
  paperProps: { padding: 2, fullWidth: true },
  selectable: false,
  pagerPlace: PAGINATED_LIST_PAGER_PLACES[1],
  loading: false,
};
export const PAGINATED_LIST_PROP_TYPES = {
  columns: PropTypes.arrayOf(PropTypes.any),
  layout: PropTypes.oneOf(PAGINATED_LIST_LAYOUTS),
  variant: PropTypes.oneOf(PAGINATED_LIST_VARIANTS),
  pagerPlace: PropTypes.oneOf(PAGINATED_LIST_PAGER_PLACES),
  paperProps: PropTypes.any,
  selectable: PropTypes.bool,
  onSelect: PropTypes.func,
  page: PropTypes.number,
  size: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.any),
  totalCount: PropTypes.number,
  loading: PropTypes.bool,
  onSizeChange: PropTypes.func,
  onPageChange: PropTypes.func,
};

const PaginatedList = ({
  layout,
  columns,
  page,
  size,
  items,
  totalCount,
  totalPages,
  paperProps,
  selectable,
  variant,
  pagerPlace,
  loading,
  onSelect = () => {},
  onSizeChange = () => {},
  onPageChange = () => {},
  ...props
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    gotoPage,
    setPageSize,
    // pageCount,
    // page,
    // canPreviousPage,
    // canNextPage,
    // pageOptions,
    // nextPage,
    // previousPage,
    state: { pageIndex, pageSize }, // Get the state from the instance
  } = useTable(
    {
      columns,
      data: items || [],
      initialState: { pageIndex: page, pageSize: size }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: totalCount,
    },
    usePagination
  );

  useEffect(() => {
    if (pageIndex !== page) gotoPage(page);
  }, [page]);

  useEffect(() => {
    if (pageSize !== size) setPageSize(size);
  }, [size]);

  const handleSizeChange = (val) => {
    setPageSize(val);
    onSizeChange(parseInt(val));
  };

  const handlePageChange = (val) => {
    onPageChange(val);
  };

  const { classes, cx } = PaginatedListStyles({}, { name: 'PaginatedList' });

  return (
    <Box className={classes.root}>
      <LoadingOverlay visible={loading} />
      <Stack direction="column" spacing={5} fullWidth>
        <Paper {...paperProps}>
          {layout === PAGINATED_LIST_LAYOUTS[0] ? (
            <TableView
              {...props}
              {...{
                getTableProps,
                getTableBodyProps,
                headerGroups,
                prepareRow,
                rows,
                selectable,
                onSelect,
              }}
            />
          ) : (
            <GridView {...props} {...{ headerGroups, prepareRow, rows, selectable, onSelect }} />
          )}
        </Paper>

        <Stack fullWidth justifyContent={pagerPlace}>
          <Pager
            page={page}
            totalPages={totalPages}
            withSize={true}
            onSizeChange={handleSizeChange}
            onChange={handlePageChange}
            variant={variant}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

PaginatedList.defaultProps = PAGINATED_LIST_DEFAULT_PROPS;
PaginatedList.propTypes = PAGINATED_LIST_PROP_TYPES;

export { PaginatedList };
