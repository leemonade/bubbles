import { Controller, useFormContext } from 'react-hook-form';
import { Button, DropdownButton, InputWrapper, TextInput, Textarea } from '../../../form';
import { ContextContainer } from '../../ContextContainer';
import { Stack } from '../../Stack';
import { TotalLayoutStepContainer } from '../TotalLayoutStepContainer/TotalLayoutStepContainer';

const BasicDataForm = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext();
  const formValues = watch();

  return (
    <TotalLayoutStepContainer stepName={'Basic Data'}>
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
    </TotalLayoutStepContainer>
  );
};

export default BasicDataForm;
