import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { find, isNil } from 'lodash';
import { Tree as ReactTree } from '@leemonade/react-dnd-treeview';
import { Box } from '../../layout/Box';
import { NodeRenderer } from './NodeRenderer';
import { NodePlaceholderRenderer } from './NodePlaceholderRenderer';
import { NodeDragPreview } from './NodeDragPreview';
import { TreeStyles } from './Tree.styles';

const TreeContext = createContext();

const useTree = () => {
  const [treeData, setTreeData] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  return { treeData, setTreeData, selectedNode, setSelectedNode };
};

const Tree = ({
  treeData,
  setTreeData,
  selectedNode,
  setSelectedNode,
  onSelect,
  onAdd,
  onDelete,
  ...props
}) => {
  const [data, setData] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const state = {
    selectedNode: selectedNode || currentNode,
    setSelectedNode: setSelectedNode || setCurrentNode,
    treeData: treeData || data,
    setTreeData: setTreeData || setData,
    onDelete,
    onAdd,
    onSelect,
  };
  return (
    <TreeContext.Provider value={state}>
      <TreeView {...props} />
    </TreeContext.Provider>
  );
};

const TreeView = ({
  allowDropOutside,
  allowMultipleOpen,
  allowDragParents,
  initialSelected,
  initialOpen,
  rootId,
  className,
  canToggleItems = true,
  canSelectItems = true,
  ...props
}) => {
  const [initialized, setInitialized] = useState(false);
  const currentNode = useRef(null);
  const { treeData, setTreeData, selectedNode, setSelectedNode, onAdd, onDelete, onSelect } =
    useContext(TreeContext);

  const treeRef = useRef(null);

  const closeAllNodes = useCallback(() => {
    treeRef.current.closeAll();
  }, [treeRef]);

  const openBranch = useCallback(
    (nodeId, inclusive, replace) => {
      if (treeRef.current) {
        treeRef.current.openBranch(
          nodeId,
          inclusive, // this open the pass node as well
          replace // this replace the entire tree open Ids
        );
      } else {
        console.info('Not TreeRef.current loaded');
      }
    },
    [treeRef]
  );

  useEffect(() => {
    // Open the branch when a node is selected (through code)
    if (selectedNode?.id) {
      openBranch(selectedNode.id, selectedNode.inclusive || false, selectedNode.replace || false);
    } else if (selectedNode?.fold) {
      // Fold into the specified branch when deselect (through code)
      openBranch(selectedNode.fold, selectedNode.inclusive || false, selectedNode.replace || true);
    } else {
      openBranch(selectedNode, false, false);
    }
  }, [selectedNode]);

  // ------------------------------------------------------------------
  // HANDLERS
  const handleDrop = (newTree) => setTreeData(newTree);
  const handleCanDrop = (tree, { dragSource, dropTargetId, dropTarget }) => {
    if (allowDropOutside || dragSource?.parent === dropTargetId) {
      return true;
    }
    return false;
  };
  const handleCanDrag = (node) => {
    const hasChild = !isNil(find(treeData, { parent: node.id }));
    if (hasChild && !allowDragParents) {
      return false;
    }
    return !!node.draggable;
  };
  const handleOnToggle = (node, isOpen, onToggle) => {
    if (canToggleItems) {
      if (!isOpen) {
        openBranch(node.id, true, !allowMultipleOpen);
      } else if (isOpen && node.parent === 0 && !allowMultipleOpen) {
        closeAllNodes();
      } else {
        onToggle(node.id);
      }
      currentNode.current = node;
    }
    /*
    else if (currentNode.current && currentNode.current.id === node.id) {
      onToggle(node.id);
    } else if (allowMultipleOpen) {
      onToggle(node.id);
    }
    */
  };

  const handleSelect = (node, onSelect, e, onToggle) => {
    if (canSelectItems) {
      if (onSelect) {
        onSelect(node, onToggle);
      } else {
        onToggle();
      }
    }
    return false;
  };

  const { classes, cx } = TreeStyles({}, { name: 'Tree' });

  return (
    <Box className={cx(classes.root, className)}>
      <ReactTree
        ref={treeRef}
        tree={treeData}
        rootId={rootId || 0}
        render={(
          node,
          {
            depth,
            isOpen,
            hasChild,
            onToggle,
            // onSelect,
            lowerSiblingsCount,
            hasOpenSiblings,
            siblingIndex,
            isSelected,
          }
        ) => {
          const Renderer = node.render || NodeRenderer;

          return (
            <Renderer
              {...props}
              node={node}
              treeData={treeData}
              setTreeData={setTreeData}
              depth={depth}
              isOpen={isOpen}
              hasChild={hasChild}
              lowerSiblingsCount={lowerSiblingsCount}
              hasOpenSiblings={hasOpenSiblings}
              siblingIndex={siblingIndex}
              onToggle={(e) => handleOnToggle(node, isOpen, onToggle, e)}
              isSelected={isSelected || selectedNode === node.id || selectedNode?.id === node.id}
              onSelect={(e, onToggle) => handleSelect(node, onSelect, e, onToggle)}
              allowDropOutside={allowDropOutside}
              allowMultipleOpen={allowMultipleOpen}
              allowDragParents={allowDragParents}
              canToggleItems={canToggleItems}
              onAdd={onAdd}
              onDelete={onDelete}
            />
          );
        }}
        dragPreviewRender={(monitorProps) => {
          let DragPreview = NodeDragPreview;
          if (monitorProps.item.dragPreview) {
            DragPreview = monitorProps.item.dragPreview;
          }
          return <DragPreview monitorProps={monitorProps} />;
        }}
        classes={{
          root: classes.tree,
          draggingSource: classes.treeDraggingSource,
          placeholder: classes.treePlaceholderContainer,
          dropTarget: classes.treeDropTarget,
        }}
        sort={false}
        insertDroppableFirst={false}
        canDrop={handleCanDrop}
        canDrag={handleCanDrag}
        onDrop={handleDrop}
        initialOpen={initialOpen}
        initialSelected={initialSelected}
        dropTargetOffset={20}
        placeholderRender={(node, { depth }) => {
          const PlaceholderRenderer = node.placeholderRender || NodePlaceholderRenderer;
          return <PlaceholderRenderer node={node} depth={depth} />;
        }}
      />
    </Box>
  );
};

Tree.defaultProps = {
  rootId: 0,
};

Tree.propTypes = {
  treeData: PropTypes.any,
  setTreeData: PropTypes.func,
  rootId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  allowMultipleOpen: PropTypes.bool,
  allowDragParents: PropTypes.bool,
  selectedNode: PropTypes.string,
  setSelectedNode: PropTypes.func,
  initialOpen: PropTypes.arrayOf(PropTypes.string),
  initialSelected: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export { Tree, useTree };
