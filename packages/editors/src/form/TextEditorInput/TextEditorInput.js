import React, { useMemo } from 'react';
import { isEmpty } from 'lodash';
import { Box, InputWrapper, useId } from '@bubbles-ui/components';
import {
  TEXT_EDITOR_INPUT_DEFAULT_PROPS,
  TEXT_EDITOR_INPUT_PROP_TYPES,
  TEXT_EDITOR_DEFAULT_TOOLBARS,
  TEXT_EDITOR_TEXTAREA_TOOLBARS,
} from './TextEditorInput.constants';
import { TextEditorInputStyles } from './TextEditorInput.styles';
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

const TextEditorInput = ({
  label,
  description,
  toolLabels,
  help,
  error,
  required,
  value,
  onChange,
  placeholder,
  toolbars: propToolbars,
  children,
  editorStyles,
  editorClassname,
  readOnly,
  preset,
  ...props
}) => {
  const uuid = useId();

  // ··································································
  // STYLES
  const hasError = useMemo(() => !isEmpty(error), [error]);
  const { classes, cx } = TextEditorInputStyles(
    { hasError, editorStyles, readOnly },
    { name: 'TextEditorInput' },
  );

  const presetToolbars = useMemo(() => {
    if (preset === 'textArea') {
      return TEXT_EDITOR_TEXTAREA_TOOLBARS;
    }
    return TEXT_EDITOR_DEFAULT_TOOLBARS;
  }, [preset]);

  const toolbars = useMemo(() => {
    if (preset) {
      return presetToolbars;
    }
    return propToolbars;
  }, [preset, presetToolbars, propToolbars]);

  return (
    <InputWrapper
      uuid={uuid}
      label={label}
      description={description}
      error={error}
      help={help}
      required={required}
    >
      <Box className={classes.root}>
        <TextEditor
          {...props}
          readOnly={readOnly}
          placeholder={placeholder}
          content={value}
          onChange={onChange}
          editorClassname={cx(classes.editor, editorClassname)}
        >
          {toolbars.heading && <HeadingsTool labels={toolLabels.headingsTool} />}
          {toolbars.color && <ColorTool label={toolLabels.colorTool} />}
          {toolbars.style && <TransformsTool labels={toolLabels.transformsTool} />}
          {toolbars.align && <TextAlignTool labels={toolLabels.textAlignTool} />}
          {toolbars.list && <ListIndentTool labels={toolLabels.listIndentTool} />}
          {toolbars.formulation && <ScriptsTool labels={toolLabels.scriptsTool} />}
          {toolbars.link && <LinkTool {...toolLabels.linkTool} />}
          {children}
        </TextEditor>
      </Box>
    </InputWrapper>
  );
};

TextEditorInput.defaultProps = TEXT_EDITOR_INPUT_DEFAULT_PROPS;
TextEditorInput.propTypes = TEXT_EDITOR_INPUT_PROP_TYPES;

export { TextEditorInput };
