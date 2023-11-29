import React from 'react';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import { Box } from '@mantine/core';
import { PluginAssignmentsIcon } from '@bubbles-ui/icons/solid';
import { ContextContainer } from '../ContextContainer';
import { TotalLayout, useTotalLayout } from './TotalLayout';
import { TotalLayoutHeader } from './TotalLayoutHeader/TotalLayoutHeader';
import { TotalLayoutStepContainer as StepContainer } from './TotalLayoutStepContainer';
import { Button, DropdownButton, InputWrapper, Switch, TextInput, Textarea } from '../../form';
import { TOTAL_LAYOUT_DEFAULT_PROPS } from './TotalLayout.constants';
import { Stack } from '../Stack';
import mdx from './TotalLayout.mdx';

export default {
  title: 'Molecules/Layout/TotalLayout',
  parameters: {
    component: TotalLayout,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

// * Los steps deben usar useFormContext() hook o recibir la forma con props
const BasicDataForm = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext();
  const formValues = watch();
  // que cada step añada su validation scheema
  // que cada step valide su parte de la forma seleccionando su validation scheema

  return (
    <StepContainer stepName={'Basic Data'}>
      <form>
        <ContextContainer spacing={10}>
          <ContextContainer title="Presentación" subtitle="Imagen destacada" spacing={4}>
            <Stack direction="row" spacing={3}>
              <Button variant={'link'} onClick={() => console.log('Showing library drawer')} noFlex>
                Buscar en la biblioteca
              </Button>
              <Button variant={'link'} onClick={() => console.log('Subiendo imagen')} noFlex>
                Subir Imagen
              </Button>
            </Stack>
            <Controller
              name="title"
              rules={{ required: 'Field required' }}
              render={({ field }) => <TextInput label={'Título'} error={errors.title} {...field} />}
            />
            <Controller
              name="description"
              // control={form.control}
              render={({ field }) => <Textarea label={'Descripción'} {...field} />}
            />
          </ContextContainer>
          <ContextContainer title="Programas y Asignaturas" spacing={4}>
            <Controller
              name="program"
              // control={form.control} NOT NEEDED when using FormProvider
              render={({ field }) => (
                <InputWrapper label={'Programa'}>
                  <DropdownButton
                    style={{ width: '30%' }}
                    variant="outline"
                    data={[
                      {
                        label: 'Program 1',
                        onClick: () => console.log('Item 1 clicked', formValues),
                      },
                      {
                        label: 'Program 2',
                        onClick: () => console.log('Program 2 clicked', formValues),
                      },
                    ]}
                    {...field}
                  >
                    Seleccionar Programa
                  </DropdownButton>
                </InputWrapper>
              )}
            />
          </ContextContainer>
          <ContextContainer title="Otros" spacing={4}>
            <Controller
              name="tags"
              // control={form.control}
              render={({ field }) => <TextInput label={'Etiquetas'} {...field} />}
            />
            <Controller
              name="color"
              // control={form.control}
              render={({ field }) => <Textarea label={'Color'} {...field} />}
            />
          </ContextContainer>
        </ContextContainer>
      </form>
    </StepContainer>
  );
};

const ContentsForm = () => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <StepContainer stepName={'Contenidos'}>
      <form>
        <ContextContainer spacing={10}>
          <ContextContainer title="Enunciado" subtitle="Imagen de apoyo" spacing={4}>
            <Stack direction="row" spacing={3}>
              <Button
                variant={'link'}
                onClick={() => console.log('Buscando imagen en biblioteca')}
                noFlex
              >
                Buscar en la biblioteca
              </Button>
              <Button variant={'link'} onClick={() => console.log('Subiendo imagen')} noFlex>
                Subir Imagen
              </Button>
            </Stack>
            <Controller
              name="instructions"
              rules={{ required: 'Field required' }}
              render={({ field }) => (
                <Textarea label={'Texto del enunciado'} error={errors.instructions} {...field} />
              )}
            />
            <Switch label="Añadir desarrollo" />
          </ContextContainer>
          <ContextContainer title="Entregables" spacing={4}>
            <Controller
              name="deliverables"
              render={({ field }) => (
                <Switch
                  label="Esta tarea requiere de la entrega de algún tipo de archivo, documento o enlace"
                  {...field}
                />
              )}
            />
          </ContextContainer>
        </ContextContainer>
      </form>
    </StepContainer>
  );
};

//* La página es la responsable de crear el FormProvider y envolver al total layout
const Template = () => {
  const totalLayoutProps = useTotalLayout();

  // * Prepare Steps
  const stepsInfo = [
    {
      label: 'Basic Data',
      badge: null,
      status: null,
      fields: ['title', 'description', 'program', 'tags', 'color'], // All step fields
      validationSchema: {},
      stepComponent: null, // ? El elemento aquí. Too much?
    },
    {
      label: 'Content',
      badge: null,
      status: null,
      fields: ['instructions', 'deliverables'],
      validationSchema: {},
      stepComponent: null, // ? El elemento aquí. Too much?
    },
  ];

  const formMethods = useForm();
  const formValues = formMethods.watch();

  // * Prepare Steps
  const Steps = React.useMemo(
    () => [<BasicDataForm key={'basicDataForm'} />, <ContentsForm key={'contenidosForm'} />],
    [formMethods],
  );

  // * Prepare Header
  const buildHeader = () => (
    <TotalLayoutHeader
      title={'Nueva Tarea'}
      icon={<PluginAssignmentsIcon />}
      formTitlePlaceholder={'Título de la tarea'}
    />
  );

  // * TotalLayout validates the form on every step and for every action
  const handleOnSave = async () => {
    console.log('Form values to SAVE as draft', formValues);
  };

  const handlePublish = async (assign) => {
    console.log('Form values to PUBLISH:', formValues);
    if (assign) console.log('...and ASSIGN!');
  };

  const handlePreview = async () => {
    console.log('Form values to PREVIEW:', formValues);
  };

  return (
    <FormProvider {...formMethods}>
      <Box style={{ margin: '-16px' }}>
        <TotalLayout
          {...totalLayoutProps}
          Header={() => buildHeader()}
          showStepper
          stepsInfo={stepsInfo}
          Steps={Steps}
          onSave={handleOnSave}
          onPublish={handlePublish}
          onPreview={handlePreview}
        />
      </Box>
    </FormProvider>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TOTAL_LAYOUT_DEFAULT_PROPS,
};
