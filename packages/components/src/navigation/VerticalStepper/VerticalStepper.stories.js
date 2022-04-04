import React from 'react';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { Button } from '../../form';
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
  const SimpleStepComp = ({ text, onNext, onPrevious }) => {
    return (
      <Box style={{ marginTop: 15 }}>
        <Text size="lg" strong>
          {text}
        </Text>
        <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          <Button onClick={onPrevious}>Previous</Button>
          <Button onClick={onNext}>Next</Button>
        </Box>
      </Box>
    );
  };

  const data = [
    {
      label: 'Resumen',
      badge: 'Badge',
      content: <SimpleStepComp text={'Resumen'} />,
      status: 'OK',
    },
    {
      label: 'Tarea previa',
      content: <SimpleStepComp text={'Tarea previa'} />,
      subSteps: [
        {
          label: 'Child 1',
          badge: 'Badge of child 1',
          content: <SimpleStepComp text={'Child 1'} />,
        },
        { label: 'Child 2', content: <SimpleStepComp text={'Child 2'} /> },
        { label: 'Child 3', content: <SimpleStepComp text={'Child 3'} /> },
      ],
    },
    {
      label: 'Enunciado',
      content: <SimpleStepComp text={'Enunciado'} />,
      status: 'KO',
    },
    {
      label: 'Desarrollo',
      content: <SimpleStepComp text={'Desarollo'} />,
    },
    {
      label: 'Pruebas',
      onClick: () => {
        console.log('Click on pruebas');
      },
      content: <SimpleStepComp text={'Pruebas'} />,
    },
    {
      label: 'Pruebas 2',
      onClick: () => {
        console.log('Click on pruebas 2');
      },
      status: 'KO',
      content: <SimpleStepComp text={'Pruebas 2'} />,
    },
    {
      allCompleted: true,
      content: <SimpleStepComp text={'Completed'} />,
    },
  ];

  return <VerticalStepper {...props} data={data} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...VERTICAL_STEPPER_DEFAULT_PROPS,
  calificationProps: {
    label: 'Aprobado',
    grade: 6,
    minimumGrade: 5,
  },
};
