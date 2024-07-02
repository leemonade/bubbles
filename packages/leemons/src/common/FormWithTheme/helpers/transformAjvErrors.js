import { isArray } from 'lodash';

function transformAjvErrors(errors) {
  if (!isArray(errors)) {
    return [];
  }

  return errors.map((e) => {
    const { dataPath, keyword, message, params, schemaPath } = e;
    const regex = /(?<=#\/properties\/)[\w-]+(?=\/required)/;
    const match = schemaPath.match(regex);
    let property = match[0];

    if (!property) {
      property = `${dataPath.split('.')[1]}`;
    }

    // put data in expected format
    return {
      name: keyword,
      property,
      message,
      params, // specific to ajv
      stack: `${property} ${message}`.trim(),
      schemaPath,
    };
  });
}
export { transformAjvErrors };
