import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { useTable, usePagination } from 'react-table';
import { Box, Stack, Paper, Masonry } from '../../layout';
import { LoadingOverlay } from '../../overlay';
import { Pager } from '../../navigation';
import { TableView } from './views/TableView';
import { GridView } from './views/GridView';
import { PaginatedListStyles } from './PaginatedList.styles';

export const PAGINATED_LIST_LAYOUTS = ['table', 'grid'];

export const PAGINATED_LIST_DEFAULT_PROPS = {
  columns: [],
  layout: PAGINATED_LIST_LAYOUTS[0],
  currentPage: 0,
  size: 10,
  paperProps: { padding: 2, fullWidth: true },
  selectable: false,
};
export const PAGINATED_LIST_PROP_TYPES = {
  columns: PropTypes.arrayOf(PropTypes.any),
  layout: PropTypes.oneOf(PAGINATED_LIST_LAYOUTS),
  currentPage: PropTypes.number,
  size: PropTypes.number,
  paperProps: PropTypes.any,
  selectable: PropTypes.bool,
  onSelect: PropTypes.func,
};

const PaginatedList = ({
  layout,
  listWrapper,
  columns,
  fetchData,
  currentPage,
  size,
  paperProps,
  selectable,
  onSelect,
  ...props
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [controlledPageCount, setPageCount] = useState(0);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    pageCount,
    gotoPage,
    setPageSize,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: currentPage, pageSize: size }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination
  );

  // Listen for changes in pagination and use the state to fetch our new data
  useEffect(() => {
    let mounted = true;
    if (isFunction(fetchData)) {
      (async () => {
        try {
          setLoading(true);
          const serverData = await fetchData({ pageIndex, pageSize });
          if (mounted) {
            setData(serverData.items);
            setPageCount(serverData.totalPages);
            setLoading(false);
          }
        } catch (e) {
          setLoading(false);
        }
      })();
    }
    return () => {
      mounted = false;
    };
  }, [fetchData, pageIndex, pageSize]);

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

        <Stack fullWidth justifyContent="center">
          <Pager
            page={pageIndex}
            total={pageCount}
            withSize={true}
            onChange={(val) => gotoPage(val - 1)}
            onSizeChange={setPageSize}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

PaginatedList.defaultProps = PAGINATED_LIST_DEFAULT_PROPS;
PaginatedList.propTypes = PAGINATED_LIST_PROP_TYPES;

export { PaginatedList };
