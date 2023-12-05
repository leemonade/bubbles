import { Controller, useFormContext } from 'react-hook-form';
import { Button, Switch, Textarea } from '../../../form';
import { ContextContainer } from '../../ContextContainer';
import { Stack } from '../../Stack';
import { TotalLayoutStepContainer } from '../TotalLayoutStepContainer/TotalLayoutStepContainer';

const ContentForm = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const form = watch();
  return (
    <TotalLayoutStepContainer stepName={'Contenidos'}>
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
            <Controller
              name="addOptionalStep"
              render={({ field }) => (
                <Switch label="Añadir paso opcional" checked={form.addOptionalStep} {...field} />
              )}
            />
          </ContextContainer>
          <ContextContainer title="Entregables" spacing={4}>
            <Controller
              name="deliverables"
              render={({ field }) => (
                <Switch
                  label="Esta tarea requiere de la entrega de algún tipo de archivo, documento o enlace"
                  checked={form.deliverables}
                  {...field}
                />
              )}
            />
          </ContextContainer>
        </ContextContainer>
      </form>
    </TotalLayoutStepContainer>
  );
};

export default ContentForm;
