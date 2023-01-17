import React from 'react';
import { INPUT_WRAPPER_ORIENTATIONS, INPUT_WRAPPER_SIZES } from '../InputWrapper';
import { ColorInput, COLOR_INPUT_DEFAULT_PROPS } from './ColorInput';
import { Box } from '../../layout';
import { isFunction } from 'lodash';
import mdx from './ColorInput.mdx';

export default {
  title: 'BB1/ColorInput',
  parameters: {
    component: ColorInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { options: INPUT_WRAPPER_SIZES, control: { type: 'select' } },
    orientation: { options: INPUT_WRAPPER_ORIENTATIONS, control: { type: 'select' } },
    onChange: { action: 'Color Changed' },
  },
};

const Template = ({ withCustomColorPicker, ...props }) => {
  /** Custom ColorPicker component */
  const colorPickerComponent = ({ onChange, inputValue }) => {
    const getSwatchStyles = (backgroundColor) => {
      return {
        backgroundColor,
        height: 24,
        width: 24,
        borderRadius: 4,
        cursor: 'pointer',
        position: 'relative',
      };
    };

    const getSwatchBorders = () => {
      const commonStyles = { position: 'absolute', height: 8, width: 8 };

      return (
        <>
          <Box
            style={{
              ...commonStyles,
              top: 0,
              left: 0,
              borderTop: '3px solid black',
              borderLeft: '3px solid black',
              borderTopLeftRadius: 4,
            }}
          />
          <Box
            style={{
              ...commonStyles,
              top: 0,
              right: 0,
              borderTop: '3px solid black',
              borderRight: '3px solid black',
              borderTopRightRadius: 4,
            }}
          />
          <Box
            style={{
              ...commonStyles,
              bottom: 0,
              left: 0,
              borderBottom: '3px solid black',
              borderLeft: '3px solid black',
              borderBottomLeftRadius: 4,
            }}
          />
          <Box
            style={{
              ...commonStyles,
              bottom: 0,
              right: 0,
              borderBottom: '3px solid black',
              borderRight: '3px solid black',
              borderBottomRightRadius: 4,
            }}
          />
        </>
      );
    };

    const onChangeHandler = (colorValue) => {
      isFunction(onChange) && onChange(colorValue);
    };

    return (
      <Box style={{ display: 'flex', flexWrap: 'wrap', padding: 8, gap: 8, width: 136 }}>
        <Box style={{ ...getSwatchStyles('#D9DCF9') }} onClick={() => onChangeHandler('#D9DCF9')}>
          {inputValue === '#D9DCF9' && getSwatchBorders()}
        </Box>
        <Box style={{ ...getSwatchStyles('#DEE9F9') }} onClick={() => onChangeHandler('#DEE9F9')}>
          {inputValue === '#DEE9F9' && getSwatchBorders()}
        </Box>
        <Box style={{ ...getSwatchStyles('#DAF1F9') }} onClick={() => onChangeHandler('#DAF1F9')}>
          {inputValue === '#DAF1F9' && getSwatchBorders()}
        </Box>
        <Box style={{ ...getSwatchStyles('#E2F9F3') }} onClick={() => onChangeHandler('#E2F9F3')}>
          {inputValue === '#E2F9F3' && getSwatchBorders()}
        </Box>
        <Box style={{ ...getSwatchStyles('#F5F9DE') }} onClick={() => onChangeHandler('#F5F9DE')}>
          {inputValue === '#F5F9DE' && getSwatchBorders()}
        </Box>
        <Box style={{ ...getSwatchStyles('#F5F0DC') }} onClick={() => onChangeHandler('#F5F0DC')}>
          {inputValue === '#F5F0DC' && getSwatchBorders()}
        </Box>
        <Box style={{ ...getSwatchStyles('#F4E2D9') }} onClick={() => onChangeHandler('#F4E2D9')}>
          {inputValue === '#F4E2D9' && getSwatchBorders()}
        </Box>
        <Box style={{ ...getSwatchStyles('#F3DFE3') }} onClick={() => onChangeHandler('#F3DFE3')}>
          {inputValue === '#F3DFE3' && getSwatchBorders()}
        </Box>
      </Box>
    );
  };

  return (
    <ColorInput
      colorPickerComponent={withCustomColorPicker ? colorPickerComponent : undefined}
      {...props}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...COLOR_INPUT_DEFAULT_PROPS,
  label: 'Label for color input',
  description: 'Optional descriptive text for this color input',
  placeholder: 'Pick a color',
  help: 'Help text for color input',
  error: 'Descriptive text for error ',
  withCustomColorPicker: false,
};
