import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import { cloneDeep } from 'lodash';
import { Tree, useTree } from './Tree';
import mdx from './Tree.mdx';
import { TREE_DATA_1, TREE_DATA_2, TREE_DATA_3 } from './mocks/treeData';
import { Switch } from '../../form';

export default {
  title: 'BB1/Tree',
  parameters: {
    component: Tree,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3629%3A23871',
    },
  },
  argTypes: {
    onSelect: { action: 'Node selected' },
    onAdd: { action: 'Add Node clicked' },
    onDelete: { action: 'Delete Node clicked' },
    onEdit: { action: 'Edit Node clicked' },
  },
};

const Template = ({ test_data, ...props }) => {
  const [showTree, setShowTree] = useState(true);
  const treeProps = useTree();
  useEffect(() => treeProps.setTreeData(cloneDeep(test_data)), []);
  /*
  useEffect(() => {
    const newTreeData = cloneDeep(test_data);
    newTreeData[0].text = `${newTreeData[0].text} ${Math.floor(Math.random() * 1000)}`;
    treeProps.setTreeData(newTreeData);
  }, [showTree]);
  */

  return (
    <Box>
      {/*
      <Switch
        label="Show Tree"
        checked={showTree}
        onChange={(ev) => setShowTree(ev.currentTarget.checked)}
      />
      */}
      <Box mt={10}>{showTree && <Tree {...props} {...treeProps} />}</Box>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  rootId: 0,
  initialOpen: [],
  allowDragParents: false,
  test_data: TREE_DATA_1,
};

export const InitialOpen = Template.bind({});

InitialOpen.args = {
  rootId: 0,
  initialOpen: ['ID2'],
  allowDragParents: false,
  test_data: TREE_DATA_1,
};

export const InitialSelected = Template.bind({});

InitialSelected.args = {
  rootId: 0,
  initialSelected: ['ID-TEMP'],
  allowDragParents: false,
  test_data: TREE_DATA_2,
};
