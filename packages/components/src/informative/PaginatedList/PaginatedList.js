import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePagination, useTable } from 'react-table';
import { Box, Paper, Stack } from '../../layout';
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
  page: 1,
  size: 10,
  sizes: [],
  paperProps: { padding: 2, fullWidth: true },
  selectable: false,
  pagerPlace: PAGINATED_LIST_PAGER_PLACES[1],
  loading: false,
  useAria: true,
};
export const PAGINATED_LIST_PROP_TYPES = {
  columns: PropTypes.arrayOf(PropTypes.any),
  layout: PropTypes.oneOf(PAGINATED_LIST_LAYOUTS),
  variant: PropTypes.oneOf(PAGINATED_LIST_VARIANTS),
  pagerPlace: PropTypes.oneOf(PAGINATED_LIST_PAGER_PLACES),
  paperProps: PropTypes.any,
  selectable: PropTypes.bool,
  onSelect: PropTypes.func,
  selected: PropTypes.string,
  page: PropTypes.number,
  size: PropTypes.number,
  sizes: PropTypes.array,
  items: PropTypes.arrayOf(PropTypes.any),
  totalCount: PropTypes.number,
  totalPages: PropTypes.number,
  loading: PropTypes.bool,
  onSizeChange: PropTypes.func,
  onPageChange: PropTypes.func,
  useAria: PropTypes.bool,
  headerStyles: PropTypes.object,
};

const PaginatedList = ({
  layout,
  columns,
  page,
  size,
  sizes,
  items,
  totalCount,
  totalPages,
  paperProps,
  selectable,
  selected,
  variant,
  pagerPlace,
  loading,
  labels,
  onSelect = () => {},
  onSizeChange = () => {},
  onPageChange = () => {},
  onStyleRow = () => {},
  style,
  useAria,
  headerStyles,
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
    // setPageSize(parseInt(val));
    onPageChange(1);
    onSizeChange(parseInt(val));
  };

  const handlePageChange = (val) => {
    onPageChange(val);
  };

  const { classes, cx } = PaginatedListStyles({ style }, { name: 'PaginatedList' });

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
                selected,
                useAria,
                headerStyles,
                onStyleRow,
              }}
            />
          ) : (
            <GridView
              {...props}
              {...{
                headerGroups,
                prepareRow,
                rows,
                selectable,
                selected,
                onSelect,
                useAria,
                onStyleRow,
              }}
            />
          )}
        </Paper>

        {totalPages > 1 && (
          <Stack fullWidth justifyContent={pagerPlace}>
            <Pager
              labels={labels}
              page={page}
              totalPages={Math.ceil(totalPages)}
              withSize={true}
              size={size}
              sizes={sizes}
              onSizeChange={handleSizeChange}
              onChange={handlePageChange}
              variant={variant}
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

PaginatedList.defaultProps = PAGINATED_LIST_DEFAULT_PROPS;
PaginatedList.propTypes = PAGINATED_LIST_PROP_TYPES;

export { PaginatedList };
