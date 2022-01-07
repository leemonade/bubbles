import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Col, Grid } from '@mantine/core';
import { DatasetItemDrawerStyles } from './DatasetItemDrawer.styles';
import { Drawer } from '../../../overlay';
import { useForm } from 'react-hook-form';
import DatasetItemDrawerContext from './context/DatasetItemDrawerContext';
import { Name } from './components/Name';
import { Centers } from './components/Centers';
import { Divider } from '../../../layout';
import { FieldType } from './components/FieldType';
import { FieldConfig } from './components/FieldConfig';
import { FieldConfigLocale } from './components/FieldConfigLocale';
import { Permissions } from './components/Permissions';

export const DATASET_ITEM_DRAWER_DEFAULT_PROPS = {
  messages: {
    namePlaceholder: 'New field',
    centerLabel: 'Center',
    fieldTypeLabel: 'Field Type',
    fieldTypePlaceholder: 'Select field type',
    textFieldRequiredLabel: 'Required',
    textFieldMaskedLabel: 'Masked',
    fieldLengthLabel: 'Field Length',
    fieldLengthMinLabel: 'Min',
    fieldLengthMaxLabel: 'Max',
    fieldLengthOnlyNumbersLabel: 'Only numbers',
    fieldDateLabel: 'Limited to',
    fieldDateMinLabel: 'From',
    fieldDateMaxLabel: 'to',
    multioptionShowAsLabel: 'Show as',
    fieldMultioptionLimitsLabel: 'Number of options',
    fieldMultioptionLimitsMinLabel: 'Min',
    fieldMultioptionLimitsMaxLabel: 'Max',
    fieldMultioptionShowAsPlaceholder: 'Select show as',
    fieldMultioptionOptionsLabel: 'Create options',
    fieldMultioptionAddOptionsLabel: 'Add option',
    booleanShowAsLabel: 'Show as',
    fieldBooleanShowAsPlaceholder: 'Select show as',
    booleanInitialStateLabel: 'Initial state',
    booleanInitialStateLabelPlaceholder: 'Select initial state',
    fieldSelectOptionsLabel: 'Create options',
    fieldSelectAddOptionsLabel: 'Add option',
    userCentersLabel: 'Center/s',
    userCentersDescription: 'Displays only the users of the selected center(s)',
    userProfileLabel: 'Profile/s',
    userProfileDescription: 'Displays only users of the selected profile type(s)',
    fieldConfigLocaleTitle: 'Configuration & languages',
    localeLabelLabel: 'Label',
    localeLabelDescription: 'Visible name on the file.',
    localeDescriptionLabel: 'Description',
    localeDescriptionDescription: 'Field description.',
    localeHelpLabel: 'Help text',
    localeHelpDescription: 'Use this text to orient the user to the expected content.',
    localeMultioptionSelectPlaceholderLabel: 'First option',
    translateOptionsHelpLabel: 'Untranslated content will appear in the default language',
    translateOptionsButtonLabel: 'Option translations',
    translateOptionsModalTitle: 'Options translation',
    translateOptionsModalDescription: 'Add here the translations of the options into English',
    translateOptionsValueColLabel: 'Value',
    translateOptionsTranslationColLabel: 'Translation to {code}',
    localeBooleanOptionLabel: 'Option label',
    localeBooleanOptionDescription: 'Text nex to the checkbox',
    localeBooleanYesLabel: '"Yes" Label',
    localeBooleanNoLabel: '"No" Label',
    fieldPermissionsTitle: 'Profiles permissions',
  },
  errorMessages: {
    nameRequired: 'Field required',
    fieldTypeRequired: 'Field required',
    multioptionShowAsRequired: 'Field required',
    booleanShowAsRequired: 'Field required',
    booleanInitialStateRequired: 'Field required',
    localeLabelRequired: 'Field required',
  },
  locales: [],
  selectOptions: {
    userProfiles: [],
    userCenters: [],
    centers: [],
    fieldBooleanInitialState: [
      {
        label: 'Unselected',
        value: '-',
      },
      {
        label: 'Si',
        value: 'si',
      },
      {
        label: 'No',
        value: 'no',
      },
    ],
    fieldMultioptionShowAs: [
      {
        label: 'Dropdown',
        value: 'dropdown',
      },
      {
        label: 'Checkboxs',
        value: 'checkboxs',
      },
      {
        label: 'Radio',
        value: 'radio',
      },
    ],
    fieldBooleanShowAs: [
      {
        label: 'Checkbox',
        value: 'checkbox',
      },
      {
        label: 'Radio',
        value: 'radio',
      },
      {
        label: 'Switcher',
        value: 'switcher',
      },
    ],
    fieldTypes: [
      {
        label: 'Field',
        value: 'text_field',
      },
      {
        label: 'Textarea',
        value: 'rich_text',
      },
      {
        label: 'Number',
        value: 'number',
      },
      {
        label: 'Date',
        value: 'date',
      },
      {
        label: 'Email',
        value: 'email',
      },
      {
        label: 'Phone',
        value: 'phone',
      },
      {
        label: 'Link',
        value: 'link',
      },
      {
        label: 'Multioption',
        value: 'multioption',
      },
      {
        label: 'Boolean',
        value: 'boolean',
      },
      {
        label: 'Select',
        value: 'select',
      },
      {
        label: 'User',
        value: 'user',
      },
    ],
  },
  opened: false,
  position: 'right',
  size: 1187,
  onClose: () => {},
};
export const DATASET_ITEM_DRAWER_PROP_TYPES = {
  messages: PropTypes.object,
  errorMessages: PropTypes.object,
  locales: PropTypes.shape({
    label: PropTypes.string,
    code: PropTypes.string,
  }),
  defaultLocale: PropTypes.string,
  selectOptions: PropTypes.shape({
    centers: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
    fieldTypes: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
    fieldMultioptionShowAs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
    fieldBooleanShowAs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
    fieldBooleanInitialState: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
    userCenters: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
    userProfiles: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
  }),
  opened: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.number,
  onClose: PropTypes.func,
  defaultValues: PropTypes.object,
};

const DatasetItemDrawer = ({
  position,
  opened,
  onClose,
  size,
  defaultValues,
  messages,
  errorMessages,
  selectOptions,
  locales,
  defaultLocale,
}) => {
  const { classes, cx } = DatasetItemDrawerStyles({});
  const form = useForm({ defaultValues });
  const contextRef = useRef({
    classes,
    gridColumn: 1000,
    colSpans: [250, 375, 375],
    colOptionsSpans: [250, 450],
  });
  const [r, setR] = useState(0);

  function render() {
    setR(new Date().getTime());
  }

  useEffect(() => {
    contextRef.current.messages = messages;
    contextRef.current.errorMessages = errorMessages;
    contextRef.current.selectOptions = selectOptions;
    contextRef.current.locales = locales;
    contextRef.current.defaultLocale = defaultLocale;
    render();
  }, [messages, errorMessages, selectOptions, locales, defaultLocale]);

  return (
    <Drawer position={position} opened={opened} size={size} onClose={onClose} empty>
      <Grid className={classes.grid} grow columns={100}>
        <Col span={35} className={classes.leftColContainer}>
          <Box>Left</Box>
        </Col>

        <Col span={65} className={classes.rightColContainer}>
          <DatasetItemDrawerContext.Provider
            value={{ contextRef: contextRef.current, form, render }}
          >
            <Box>
              {/* Name */}
              <Name />
              {/* Centers */}
              <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
                <Centers />
              </Box>
              <Box className={classes.divider}>
                <Divider />
              </Box>
              {/* Field type/config */}
              <FieldType />
              <FieldConfig />
              <FieldConfigLocale />
              {/* Permissions */}
              <Permissions />
            </Box>
          </DatasetItemDrawerContext.Provider>
        </Col>
      </Grid>
    </Drawer>
  );
};

DatasetItemDrawer.defaultProps = DATASET_ITEM_DRAWER_DEFAULT_PROPS;

DatasetItemDrawer.propTypes = DATASET_ITEM_DRAWER_PROP_TYPES;

export { DatasetItemDrawer };
