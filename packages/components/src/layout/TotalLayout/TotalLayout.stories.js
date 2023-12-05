import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mantine/core';
import { PluginAssignmentsIcon } from '@bubbles-ui/icons/solid';
import { TotalLayout, useTotalLayout } from './TotalLayout';
import { TotalLayoutHeader } from './TotalLayoutHeader/TotalLayoutHeader';
import { TOTAL_LAYOUT_DEFAULT_PROPS } from './TotalLayout.constants';
import mdx from './TotalLayout.mdx';
import BasicDataForm from './mock/BasicDataForm';
import ContentForm from './mock/ContentForm';
import OptionalForm from './mock/OptionalForm';

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

// The page must take care of wrapping the TotalLayout within a FormProvider
const Template = () => {
  const totalLayoutProps = useTotalLayout();

  // React.useEffect(() => {
  //   if (totalLayoutProps.activeStep === 0) {
  //     totalLayoutProps.setCompletedSteps([]);
  //   }
  // }, [totalLayoutProps.activeStep]);

  const initialStepsInfo = [
    {
      label: 'Basic Data',
      badge: null,
      status: null,
      showStep: true, // Define if by default this step must be shown, it's expected/recommended that the fisrt step is always set to true
      validationSchema: z.object({
        title: z.string({ required_error: 'Title is required' }).min(1),
        description: z.string().optional(),
        program: z.string().optional(),
        tags: z.string().optional(),
        color: z.string().optional(),
      }),
      // Steps can use the any form methods with the useFormContext hook (from react-hook-form)
      stepComponent: <BasicDataForm key={'basicDataForm'} />,
    },
    {
      label: 'Content',
      badge: null,
      status: null,
      showStep: true,
      validationSchema: z.object({
        instructions: z.string({ required_error: 'Instructions are required' }).min(1),
        deliverables: z.boolean().optional(),
      }),
      stepComponent: <ContentForm key={'contentForm'} />,
    },
    {
      label: 'Optional',
      badge: null,
      status: null,
      showStep: false,
      validationSchema: z.object({
        optionalField: z.string().min(1),
      }),
      stepComponent: <OptionalForm key={'optionalForm'} />,
    },
    {
      label: 'tal cosa',
      badge: null,
      status: null,
      showStep: true,
      validationSchema: z.object({}),
    },
  ];

  // Prepare Form
  const formMethods = useForm({
    resolver: zodResolver(initialStepsInfo[totalLayoutProps.activeStep]?.validationSchema),
  });
  const formValues = formMethods.watch();

  React.useEffect(() => {
    if (formValues.addOptionalStep !== undefined) {
      const current = [...totalLayoutProps.stepsInfo];
      const updatedStepsInfo = current.map((step, i) =>
        i === 2 ? { ...step, showStep: formValues.addOptionalStep } : step,
      );
      totalLayoutProps.setStepsInfo(updatedStepsInfo);
    }
  }, [formValues.addOptionalStep]);

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
          footerActionsLabels={footerActionsLabels}
          footerFinalActions={footerFinalActions}
          minStepNumberForDraftSave={1}
          onSave={handleOnSave}
          initialStepsInfo={initialStepsInfo}
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
