import { Controller, useFormContext } from 'react-hook-form';
import { ContextContainer } from '../../ContextContainer';
import { TotalLayoutStepContainer } from '../TotalLayoutStepContainer/TotalLayoutStepContainer';
import { TextInput } from '../../../form';

const OptionalForm = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext();
  const formValues = watch();

  return (
    <TotalLayoutStepContainer stepName={'Optional Form'}>
      <form>
        <ContextContainer spacing={10}>
          <ContextContainer title="Forma Opcional" spacing={4}>
            <Controller
              name="optionalField"
              render={({ field }) => (
                <TextInput
                  label={'Información adicional'}
                  error={errors.optionalField}
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

export default OptionalForm;
