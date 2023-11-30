import { Controller, useForm } from 'react-hook-form';
import { TotalLayoutStepContainer } from './TotalLayoutStepContainer';
import { TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS } from './TotalLayoutStepContainer.constants';
import mdx from './TotalLayoutStepContainer.mdx';
import { ContextContainer } from '../../ContextContainer';
import { TextInput, Textarea } from '../../../form';
import { Stack } from '../../Stack';

export default {
  title: 'Atoms/Layout/TotalLayout/TotalLayoutStepContainer',
  parameters: {
    component: TotalLayoutStepContainer,
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

const MockStep = () => {
  const form = useForm();

  return (
    <Stack fullWidth>
      <form>
        <ContextContainer spacing={10}>
          <ContextContainer title="Presentación" subtitle="Imagen destacada" spacing={4}>
            <Controller
              name="title"
              control={form.control}
              render={({ field }) => (
                <TextInput label={'Título'} error={form.errors?.title} {...field} />
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field }) => <Textarea label={'Descripción'} {...field} />}
            />
          </ContextContainer>
          <ContextContainer title="Otros" spacing={4}>
            <Controller
              name="color"
              control={form.control}
              render={({ field }) => <Textarea label={'Color'} {...field} />}
            />
          </ContextContainer>
        </ContextContainer>
      </form>
    </Stack>
  );
};

const Template = (props) => (
  <Stack fullWidth fulHeight style={{ margin: '-16px', background: '#f8f9fb' }}>
    <TotalLayoutStepContainer {...props}>
      <MockStep />
    </TotalLayoutStepContainer>
  </Stack>
);

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS,
};
