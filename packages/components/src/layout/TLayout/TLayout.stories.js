import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { TLayout } from './TLayout';
import { Button } from '../../form';
import { ContextContainer } from '../ContextContainer';
import { Paragraph } from '../../typography';

export default {
  title: 'Molecules/Layout/TLayout',
  parameters: {
    component: TLayout,
    docs: {},
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    fullWidth: {
      type: 'boolean',
      default: false,
    },
  },
};

function MockContent() {
  return (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>
  );
}

// The page must take care of wrapping the TotalLayout within a FormProvider
const Template = ({ fullWidth }) => {
  const onCancel = () => {
    console.log('Redirecting after cancel');
  };

  return (
    <Box style={{ margin: -16 }}>
      <TLayout>
        <TLayout.Header title="Nueva Tarea" subtitle="Título de la tarea" onCancel={onCancel} />
        <TLayout.Content title="Contenido" fullWidth={fullWidth}>
          <ContextContainer title="Drawer Content - Part I">
            <MockContent />
          </ContextContainer>
          <ContextContainer title="Drawer Content - Part II">
            <MockContent />
          </ContextContainer>
          <ContextContainer title="Drawer Content - Part III">
            {[...Array(10).keys()].map((i) => (
              <MockContent key={i} />
            ))}
          </ContextContainer>
        </TLayout.Content>
        <TLayout.Footer fullWidth={fullWidth} skipOffset>
          <TLayout.Footer.LeftActions>
            <Button variant="outline">Volver</Button>
          </TLayout.Footer.LeftActions>
          <TLayout.Footer.RightActions>
            <Button>Siguiente</Button>
          </TLayout.Footer.RightActions>
        </TLayout.Footer>
      </TLayout>
    </Box>
  );
};

Template.propTypes = {
  fullWidth: PropTypes.bool,
};

export const Playground = Template.bind({});

Playground.args = {
  fullWidth: false,
};
