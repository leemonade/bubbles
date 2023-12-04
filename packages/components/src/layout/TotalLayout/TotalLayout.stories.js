import React from 'react';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mantine/core';
import { PluginAssignmentsIcon } from '@bubbles-ui/icons/solid';
import { ContextContainer } from '../ContextContainer';
import { TotalLayout, useTotalLayout } from './TotalLayout';
import { TotalLayoutHeader } from './TotalLayoutHeader/TotalLayoutHeader';
import { TotalLayoutStepContainer as StepContainer } from './TotalLayoutStepContainer/TotalLayoutStepContainer';
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

// Every step must use the useFormContext() hook in order to access the form state, (to show errors, i.e), and methods
const BasicDataForm = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext();
  const formValues = watch();

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
              render={({ field }) => <TextInput label={'Título'} error={errors.title} {...field} />}
            />
            <Controller
              name="description"
              render={({ field }) => <Textarea label={'Descripción'} {...field} />}
            />
          </ContextContainer>
          <ContextContainer title="Programas y Asignaturas" spacing={4}>
            <Controller
              name="program"
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
              render={({ field }) => <TextInput label={'Etiquetas'} {...field} />}
            />
            <Controller
              name="color"
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

// The page must take care of wrapping the TotalLayout within a FormProvider
const Template = () => {
  const totalLayoutProps = useTotalLayout();

  // Prepare StepsInfo & Form
  const stepsInfo = [
    {
      label: 'Basic Data',
      badge: null,
      status: null,
      validationSchema: z.object({
        title: z.string({ required_error: 'Title is required' }).min(1),
        description: z.string().optional(),
        program: z.string().optional(),
        tags: z.string().optional(),
        color: z.string().optional(),
      }),
      stepComponent: <BasicDataForm key={'basicDataForm'} />,
    },
    {
      label: 'Content',
      badge: null,
      status: null,
      validationSchema: z.object({
        instructions: z.string({ required_error: 'Instructions are required' }).min(1),
        deliverables: z.boolean().optional(),
      }),
      stepComponent: <ContentsForm key={'contentsForm'} />,
    },
  ];

  const formMethods = useForm({
    resolver: zodResolver(stepsInfo[totalLayoutProps.activeStep].validationSchema),
  });
  const formValues = formMethods.watch();
  const Steps = React.useMemo(() => stepsInfo.map((step) => step.stepComponent), [formMethods]);

  // Prepare Header
  const buildHeader = () => (
    <TotalLayoutHeader
      title={'Nueva Tarea'}
      icon={<PluginAssignmentsIcon />}
      formTitlePlaceholder={'Título de la tarea'}
    />
  );

  // Prepare Actions. TotalLayout validates the form on every step and for every action
  const handleOnSave = async () => {
    console.log('Form values to SAVE as draft', formValues);
  };

  const handlePublish = async () => {
    console.log('Form values to PUBLISH:', formValues);
  };

  const handlePublishAndAssign = async () => {
    console.log('Form values to PUBLISH AND ASSIGN:', formValues);
  };

  const handlePreview = async () => {
    console.log('Form values to PREVIEW:', formValues);
  };

  // Define common footer action labels
  const footerActionsLabels = {
    back: 'Anterior',
    save: 'Guardar borrador',
    next: 'Siguiente',
    dropdownLabel: 'Dropdown final',
  };

  // Footer Final actions: When more than one action is defined, a dropdown button will be shown
  const footerFinalActions = [
    { label: 'Publicar', action: handlePublish },
    { label: 'Publicar y Asignar', action: handlePublishAndAssign },
    { label: 'Vista previa', action: handlePreview },
  ];

  // Alternatively, define only one action for it to be shown as a button
  // const handleFinalize = async () => {
  //   console.log('FINALIZE WITH SINGLE ACTION, form values =>', formValues);
  // };
  // const footerFinalAction = [{ label: 'Finalize with single action', action: handleFinalize }];

  return (
    <FormProvider {...formMethods}>
      <Box style={{ margin: '-16px' }}>
        <TotalLayout
          {...totalLayoutProps}
          Header={() => buildHeader()}
          showStepper
          stepsInfo={stepsInfo}
          Steps={Steps}
          footerActionsLabels={footerActionsLabels}
          footerFinalActions={footerFinalActions}
          // Pass the index of the step from wich a draft can be save. Don't pass the prop when no save functionality is needed
          stepNumberForDraftSave={1}
          onSave={handleOnSave}
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
