export function transformErrors(errors, t = (e) => e) {
  return errors.map((error) => {
    if (error.name === 'format') {
      error.message = t(`format.${error.params.format}`);
    }
    if (error.name === 'type') {
    }
    const types = ['maxItems', 'minItems', 'minLength', 'maxLength', 'required'];
    if (types.indexOf(error.name) >= 0) {
      error.message = t(error.name, error.params);
    }
    error.stack = `${error.property} ${error.message}`;
    return error;
  });
}
