import React from 'react';
import { Box, TextClamp, FileItemDisplay } from '@bubbles-ui/components';
import { ArrowRightIcon } from '@bubbles-ui/icons/outline';
import { SchemaStyles } from './Schema.styles';
import { SCHEMA_DEFAULT_PROPS, SCHEMA_PROP_TYPES } from './Schema.constants';

// eslint-disable-next-line import/prefer-default-export
export const Schema = ({ schema, schemaLabel, isSchemaOpened, setIsSchemaOpened }) => {
  const { classes } = SchemaStyles({ isSchemaOpened }, { name: 'ContentEditor-Schema' });

  return (
    <Box className={classes.schemaContainer}>
      <Box className={classes.schemaTranslate}>
        <Box className={classes.schemaHeader}>
          <Box className={classes.schemaLabel}>{schemaLabel}</Box>
          <ArrowRightIcon
            className={classes.arrowIcon}
            height={20}
            width={20}
            onClick={() => setIsSchemaOpened(!isSchemaOpened)}
          />
        </Box>
        <Box className={classes.schema}>
          {schema.map((element, index) => {
            const acceptedElements = ['library', 'heading'];
            const isLibrary = element.type === 'library';
            // If the element is not a heading level 1 or 2, is not an accepted element or it has no content return false.
            if (
              !acceptedElements.includes(element.type) ||
              (element.type === 'heading' && element.attrs?.level > 2) ||
              !element.content
            )
              return false;

            const schemaElementName = isLibrary
              ? `${element.attrs.asset.name}.${element.attrs.asset.fileExtension}`.toLowerCase()
              : element.content[0].text;

            return (
              <Box key={index}>
                {isLibrary ? (
                  <Box style={{ overflow: 'hidden', paddingLeft: 10 }}>
                    <FileItemDisplay size={18} filename={schemaElementName} />
                  </Box>
                ) : (
                  <TextClamp lines={1}>
                    <Box className={classes[`${level === 1 ? 'title' : 'subtitle'}`]}>
                      {schemaElementName}
                    </Box>
                  </TextClamp>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

Schema.defaultProps = SCHEMA_DEFAULT_PROPS;
Schema.propTypes = SCHEMA_PROP_TYPES;
