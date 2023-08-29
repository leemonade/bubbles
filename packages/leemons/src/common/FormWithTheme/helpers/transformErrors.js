export function transformErrors(errors, t = (e) => e) {
  return errors.map((error) => {
    if (error.name === 'format' || error.keyword === 'format') {
      error.message = t(`format.${error.params.format}`);
    }
    if (error.name === 'enum' || error.keyword === 'enum') {
      const allowedValues = error.params.allowedValues.join(',');
      error.message = t('enum', { allowedValues });
    }
    if (error.name === 'type' || error.keyword === 'type') {
    }
    const types = ['maxItems', 'minItems', 'minLength', 'maxLength', 'required'];
    if (types.indexOf(error.name) >= 0 || types.indexOf(error.keyword) >= 0) {
      error.message = t(error.name || error.keyword, error.params);
    }
    error.stack = `${error.property} ${error.message}`;
    return error;
  });
}
