import React, { useContext, useRef } from 'react';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import { TextEditorContext } from '../TextEditorProvider';
import { MathBlockStyles } from './MathBlockComponent.styles';

const MathBlockComponent = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);
  const mathBlockRef = useRef(null);
  const { classes } = MathBlockStyles();

  return (
    <NodeViewWrapper ref={mathBlockRef} className={classes.root}>
      <NodeViewContent className={classes.content} />
    </NodeViewWrapper>
  );
};

export { MathBlockComponent };
