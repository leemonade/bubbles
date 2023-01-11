import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Box } from '@bubbles-ui/components';
import { ContentEditorInputStyles } from './ContentEditorInput.styles';
import {
  CONTENT_EDITOR_INPUT_DEFAULT_PROPS,
  CONTENT_EDITOR_INPUT_PROP_TYPES,
} from './ContentEditorInput.constants';
import { TextEditor } from '../TextEditor';
import {
  ColorTool,
  TransformsTool,
  HeadingsTool,
  ListIndentTool,
  TextAlignTool,
  ScriptsTool,
  LinkTool,
} from '../../tool';

const ContentEditorInput = ({
  error,
  required,
  value,
  onChange,
  placeholder,
  toolbars,
  children,
  editorStyles,
  editorClassname,
  ...props
}) => {
  // ··································································
  // STYLES
  const hasError = useMemo(() => !isEmpty(error), [error]);
  const { classes, cx } = ContentEditorInputStyles(
    { hasError, editorStyles },
    { name: 'ContentEditorInput' }
  );

  return (
    <Box className={classes.root}>
      <TextEditor
        {...props}
        placeholder={placeholder}
        content={value}
        onChange={onChange}
        editorClassname={cx(classes.editor, editorClassname)}
      >
        {toolbars.heading && <HeadingsTool />}
        {toolbars.color && <ColorTool />}
        {toolbars.style && <TransformsTool />}
        {toolbars.align && <TextAlignTool />}
        {toolbars.list && <ListIndentTool />}
        {toolbars.formulation && <ScriptsTool />}

        {children}
      </TextEditor>
    </Box>
  );
};

ContentEditorInput.defaultProps = CONTENT_EDITOR_INPUT_DEFAULT_PROPS;
ContentEditorInput.propTypes = CONTENT_EDITOR_INPUT_PROP_TYPES;

export { ContentEditorInput };
