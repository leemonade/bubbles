import React from 'react';
import { VerticalStepper } from './VerticalStepper';
import { VERTICAL_STEPPER_DEFAULT_PROPS } from './VerticalStepper.constants';
import mdx from './VerticalStepper.mdx';

export default {
  title: 'Organisms/Navigation/VerticalStepper',
  parameters: {
    component: VerticalStepper,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <VerticalStepper {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...VERTICAL_STEPPER_DEFAULT_PROPS,
  data: [
    {
      label: 'Resumen',
      badge: 'Badge',
      status: 'OK',
    },
    {
      label: 'Tarea previa',
      subSteps: [
        {
          label: 'Child 1',
          badge: 'Badge of child 1',
        },
        { label: 'Child 2' },
        { label: 'Child 3' },
      ],
    },
    {
      label: 'Enunciado',
      status: 'KO',
    },
    {
      label: 'Desarrollo',
    },
    {
      label: 'Pruebas',
      onClick: () => {
        console.log('Click on pruebas');
      },
    },
    {
      label: 'Pruebas 2',
      onClick: () => {
        console.log('Click on pruebas 2');
      },
      status: 'KO',
    },
    {
      allCompleted: true,
    },
  ],
  calificationProps: {
    label: 'Por los pelos',
    grade: 5,
    minimumGrade: 5,
  },
};
