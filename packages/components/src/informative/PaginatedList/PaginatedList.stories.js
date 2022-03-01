import React, { useState, useEffect } from 'react';
import {
  PaginatedList,
  PAGINATED_LIST_DEFAULT_PROPS,
  PAGINATED_LIST_LAYOUTS,
  PAGINATED_LIST_PAGER_PLACES,
  PAGINATED_LIST_VARIANTS,
} from './PaginatedList';
import { Box, Paper, Stack } from '../../layout';
import { Text } from '../../typography';
import { makeData } from './mocks/makeData';
import mdx from './PaginatedList.mdx';

export default {
  title: 'Molecules/Informative/PaginatedList',
  parameters: {
    component: PaginatedList,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    layout: { options: PAGINATED_LIST_LAYOUTS, control: { type: 'select' } },
    pagerPlace: { options: PAGINATED_LIST_PAGER_PLACES, control: { type: 'select' } },
    variant: { options: PAGINATED_LIST_VARIANTS, control: { type: 'select' } },
    onSelect: { action: 'Selected item' },
    onSizeChange: { action: 'Page Size Changed' },
    onPageChange: { action: 'Page Changed' },
  },
};

const CustomItemRender = ({ key, item, headers, selected, className, ...props }) => {
  return (
    <Box key={key} {...props}>
      <Paper
        style={{
          border: selected ? '1px solid cornflowerblue' : '1px solid transparent',
          cursor: 'pointer',
        }}
        fullWidth
      >
        <Stack direction="column" spacing={3}>
          {item.cells.map((cell, index) => {
            return (
              <Stack
                direction="column"
                key={`i-${index}`}
                {...cell.getCellProps({
                  className,
                })}
              >
                <Text strong size="xs" role="productive" color="primary">
                  {headers[index]?.Header}
                </Text>
                <Text role="productive" size="md">
                  {cell.render('Cell')}
                </Text>
              </Stack>
            );
          })}
        </Stack>
      </Paper>
    </Box>
  );
};

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Visits',
    accessor: 'visits',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Profile Progress',
    accessor: 'progress',
  },
];

// Let's simulate a large dataset on the server (outside of our component)
const totalCount = 10000;
const serverData = makeData(totalCount);

function getData({ page, size }) {
  const startRow = page * size;
  const endRow = startRow + size;

  // Should comes from Server
  const items = serverData.slice(startRow, endRow);

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        items,
        page,
        size,
        totalCount,
        totalPages: Math.ceil(totalCount / size),
      });
    }, 1000)
  );
}

const Template = ({
  layout,
  onPageChange,
  onSizeChange,
  loading: loadingProp,
  size: sizeProp,
  page: pageProp,
  ...props
}) => {
  const [page, setPage] = useState(pageProp);
  const [size, setSize] = useState(sizeProp);
  const [serverData, setServerData] = useState({});
  const [loading, setLoading] = useState(loadingProp);

  useEffect(() => setPage(pageProp), [pageProp]);
  useEffect(() => setSize(sizeProp), [sizeProp]);
  useEffect(() => setLoading(loadingProp), [loadingProp]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getData({ page, size });
      setServerData(result);
      setLoading(false);
    })();
  }, [page, size]);

  // ·······················································
  // CUSTOM PROPS

  const customProps = {};

  if (layout === 'grid') {
    customProps.itemRender = CustomItemRender;
  }

  return (
    <Paper color="solid" shadow="none" fullWidth>
      <PaginatedList
        {...props}
        {...customProps}
        {...serverData}
        loading={loading}
        layout={layout}
        onPageChange={(e) => {
          setPage(e);
          onPageChange(e);
        }}
        onSizeChange={(e) => {
          setSize(e);
          onSizeChange(e);
        }}
      />
    </Paper>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...PAGINATED_LIST_DEFAULT_PROPS,
  columns,
};
