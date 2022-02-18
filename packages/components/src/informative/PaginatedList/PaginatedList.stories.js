import React, { useState } from 'react';
import {
  PaginatedList,
  PAGINATED_LIST_DEFAULT_PROPS,
  PAGINATED_LIST_LAYOUTS,
} from './PaginatedList';
import { createStyles } from '@mantine/core';
import { Paper, Box, Stack } from '../../layout';
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
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
    layout: { options: PAGINATED_LIST_LAYOUTS, control: { type: 'select' } },
    onSelect: { action: 'Selected item' },
  },
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

function getData({ pageIndex, pageSize }) {
  const startRow = pageSize * pageIndex;
  const endRow = startRow + pageSize;

  // Should comes from Server
  const items = serverData.slice(startRow, endRow);

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        items,
        totalPages: Math.ceil(totalCount / pageSize),
      });
    }, 1000)
  );
}

const Template = ({ layout, ...props }) => {
  const customProps = {};

  if (layout === 'grid') {
    customProps.itemRender = ({ key, item, headers, className }) => {
      return (
        <Paper key={key}>
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
      );
    };
  }

  return (
    <Paper color="solid" shadow="none" fullWidth>
      <PaginatedList {...props} {...customProps} layout={layout} fetchData={getData} />
    </Paper>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...PAGINATED_LIST_DEFAULT_PROPS,
  columns,
};
