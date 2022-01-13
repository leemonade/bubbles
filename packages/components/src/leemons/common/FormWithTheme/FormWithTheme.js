import React, { useRef } from 'react';
import { withTheme } from '@leemonade/rjsf-core';
import { FormWithThemeStyles } from './FormWithTheme.styles';
import { transformErrors } from './helpers/transformErrors';
import ArrayField from './components/fields/ArrayField';

import { getValidateSchema } from './helpers/getValidateSchema';
import { transformAjvErrors } from './helpers/transformAjvErrors';
import BaseInput from './components/widgets/BaseInput';
import RadioWidget from './components/widgets/RadioWidget';
import SelectWidget from './components/widgets/SelectWidget';
import TextareaWidget from './components/widgets/TextareaWidget';
import CheckboxesWidget from './components/widgets/CheckboxesWidget';
import ToggleWidget from './components/widgets/ToggleWidget';
import CheckboxWidget from './components/widgets/CheckboxWidget';
import StringField from './components/fields/StringField';
import ObjectField from './components/fields/ObjectField';
import SchemaField from './components/fields/SchemaField';

export const FORM_WITH_THEME_DEFAULT_PROPS = {};
export const FORM_WITH_THEME_PROP_TYPES = {};

export const FORM_WITH_THEME_REGEX = {
  numbers: /^\d+$/,
  phone: /^.*$/, // /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9\s]{3}[-\s\.]?[0-9\s]{4,8}$/,
};

const FormWithTheme = (schema, ui, conditions, props = {}, t) => {
  const { classes, cx } = FormWithThemeStyles({});
  const ref = useRef();

  const ThemeForm = withTheme({
    fields: {
      ArrayField,
      StringField,
      ObjectField,
      SchemaField,
    },
    widgets: {
      BaseInput,
      RadioWidget,
      SelectWidget,
      CheckboxWidget,
      TextareaWidget,
      CheckboxesWidget,
      toggle: ToggleWidget,
    },
    validateSchema: getValidateSchema(schema),
    transformAjvErrors,
  });

  return [
    schema || ui ? <ThemeForm
      {...props}
      ref={(e) => {
        ref.current = e;
        if (props.ref) props.ref = e;
      }}
      showErrorList={false}
      schema={schema}
      uiSchema={ui}
      transformErrors={(e) => transformErrors(e, t)}
      customFormats={{
        numbers: FORM_WITH_THEME_REGEX.numbers,
        phone: FORM_WITH_THEME_REGEX.phone,
      }}
    >
      <></>
    </ThemeForm> : null,
    {
      isLoaded: () => !!ref.current,
      submit: () => {
        ref.current.formElement.dispatchEvent(
          new Event('submit', {
            cancelable: true,
            bubbles: true,
          })
        );
      },
      getRef: () => ref.current,
      getErrors: () => ref.current.state.errors || [],
      getValues: () => ref.current.state.formData,
      setValue: (key, value) =>
        ref.current.onChange({
          ...ref.current.state.formData,
          [key]: value,
        }),
    },
  ];
};

FormWithTheme.defaultProps = FORM_WITH_THEME_DEFAULT_PROPS;

FormWithTheme.propTypes = FORM_WITH_THEME_PROP_TYPES;

export { FormWithTheme };
