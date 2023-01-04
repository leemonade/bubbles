import React, { useMemo, useState } from 'react';
import { isEmpty } from 'lodash';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
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
} from '../../tool';
import { ArrowRightIcon } from '@bubbles-ui/icons/outline';
import { useEffect } from 'react';

const ContentEditorInput = ({
  error,
  required,
  value,
  onChange,
  placeholder,
  toolbars,
  children,
  labels,
  openSchema,
  useSchema,
  editorStyles,
  editorClassname,
  ...props
}) => {
  const [schema, setSchema] = useState([]);
  const [isSchemaOpened, setIsSchemaOpened] = useState(openSchema);

  // ··································································
  // STYLES
  const hasError = useMemo(() => !isEmpty(error), [error]);
  const { classes, cx } = ContentEditorInputStyles(
    { isSchemaOpened, hasError, editorStyles },
    { name: 'ContentEditorInput' }
  );

  useEffect(() => {
    if (openSchema !== isSchemaOpened) setIsSchemaOpened(openSchema);
  }, [openSchema]);

  return (
    <Box className={classes.root}>
      {useSchema && (
        <Box className={classes.schemaContainer}>
          <Box className={classes.schemaTranslate}>
            <Box className={classes.schemaHeader}>
              <Box className={classes.schemaLabel}>{labels.schema}</Box>
              <ArrowRightIcon
                className={classes.arrowIcon}
                height={20}
                width={20}
                onClick={() => setIsSchemaOpened(!isSchemaOpened)}
              />
            </Box>
            <Box className={classes.schema}>
              {schema.map((element) => {
                const level = element.attrs.level;

                //If it is a paragraph, there is no content or a title lower than h2 we do not print it.
                if (
                  element.type === 'paragraph' ||
                  !element.content ||
                  (element.type === 'heading' && level > 2)
                )
                  return;

                return (
                  <Box>
                    <TextClamp lines={1}>
                      <Box className={classes[`${level === 1 ? 'title' : 'subtitle'}`]}>
                        {element.content[0].text}
                      </Box>
                    </TextClamp>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
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
        >
          {toolbars.heading && <HeadingsTool label={labels.format} />}
          {toolbars.color && <ColorTool />}
          {toolbars.style && <TransformsTool />}
          {toolbars.align && <TextAlignTool />}
          {toolbars.list && <ListIndentTool />}
          {toolbars.formulation && <ScriptsTool />}

          {children}
        </TextEditor>
      </Box>
    </Box>
  );
};

ContentEditorInput.defaultProps = CONTENT_EDITOR_INPUT_DEFAULT_PROPS;
ContentEditorInput.propTypes = CONTENT_EDITOR_INPUT_PROP_TYPES;

export { ContentEditorInput };
