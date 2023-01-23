import React, { useMemo, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Box } from '@bubbles-ui/components';
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
import { ContentEditorInputStyles } from './ContentEditorInput.styles';
import {
  CONTENT_EDITOR_INPUT_DEFAULT_PROPS,
  CONTENT_EDITOR_INPUT_PROP_TYPES,
} from './ContentEditorInput.constants';
import { Schema } from './Schema/Schema';

const ContentEditorInput = ({
  error,
  required,
  value,
  onChange,
  placeholder,
  toolbars,
  children,
  toolLabels,
  schemaLabel,
  openSchema,
  useSchema,
  editorStyles,
  editorClassname,
  acceptedTags,
  ...props
}) => {
  const [schema, setSchema] = useState([]);
  const [isSchemaOpened, setIsSchemaOpened] = useState(openSchema);

  // ··································································
  // STYLES
  const hasError = useMemo(() => !isEmpty(error), [error]);
  const { classes, cx } = ContentEditorInputStyles(
    { hasError, editorStyles },
    { name: 'ContentEditorInput' }
  );

  useEffect(() => {
    if (openSchema !== isSchemaOpened) setIsSchemaOpened(openSchema);
  }, [openSchema]);

  return (
    <Box className={classes.root}>
      {useSchema && (
        <Schema
          schema={schema}
          schemaLabel={schemaLabel}
          isSchemaOpened={isSchemaOpened}
          setIsSchemaOpened={setIsSchemaOpened}
        />
      )}
      <Box className={classes.textEditorContainer}>
        <TextEditor
          {...props}
          placeholder={placeholder}
          content={value}
          onChange={onChange}
          onSchemaChange={(json) => setSchema(json.content)}
          editorClassname={cx(classes.editor, editorClassname)}
          toolbarClassname={classes.toolbarRoot}
          editorContainerClassname={classes.editorContainer}
          acceptedTags={acceptedTags}
          useSchema
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
    </Box>
  );
};

ContentEditorInput.defaultProps = CONTENT_EDITOR_INPUT_DEFAULT_PROPS;
ContentEditorInput.propTypes = CONTENT_EDITOR_INPUT_PROP_TYPES;

export { ContentEditorInput };
