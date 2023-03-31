import React, { useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
import { Box } from '../../layout';
import { Button } from '../../form';
import { Tree, useTree } from './Tree';
import mdx from './Tree.mdx';
import { TREE_DATA_1, TREE_DATA_2, TREE_DATA_3 } from './mocks/treeData';

export default {
  title: 'Molecules/Navigation/Tree',
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
  useEffect(() => {
    treeProps.setTreeData(cloneDeep(test_data))
  }, []);

  return (
    <Box style={{ maxWidth: 300}}>
      <Box mt={10}>{showTree && <Tree {...treeProps} {...props} />}</Box>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  rootId: 0,
  allowDragParents: false,
  test_data: TREE_DATA_1,
};

const InitialOpenTemplate = ({ test_data, ...props }) => {
  const treeProps = useTree();
  useEffect(() => {
    treeProps.setTreeData(cloneDeep(test_data))
    // treeProps.setInitialOpen(['ID2']);
  }, []);
  return (
    <Box style={{ maxWidth: 300}}>
      <Button onClick={() => treeProps.setInitialOpen(['ID2'])}>Initial Open Nodes</Button>
      <Box mt={10}><Tree {...treeProps} {...props} /></Box>
    </Box>
  );
};
export const InitialOpen = InitialOpenTemplate.bind({});

InitialOpen.args = {
  rootId: 0,
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

const OpenBranchTemplate = ({ test_data, ...props }) => {
  const treeProps = useTree();
  useEffect(() => {
    treeProps.setTreeData(cloneDeep(test_data))
    // treeProps.setInitialOpen(['ID2']);
  }, []);
  return (
    <Box style={{ maxWidth: 300}}>
      <Button onClick={() => treeProps.setOpenNode('ID1')}>Open Node</Button>
      <Button onClick={() => treeProps.setOpenAll(true)}>Open All</Button>
      <Box mt={10}><Tree {...treeProps} {...props} /></Box>
    </Box>
  );
};
export const OpenBranch = OpenBranchTemplate.bind({});

OpenBranch.args = {
  rootId: 0,
  allowDragParents: false,
  allowMultipleOpen: true,
  test_data: TREE_DATA_1,
};