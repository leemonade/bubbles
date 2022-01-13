import { forIn } from 'lodash';

export function getValidateSchema(jsonSchema) {
  const schema = {
    type: 'object',
    additionalProperties: false,
    required: jsonSchema?.required,
    properties: {},
  };

  if (jsonSchema) {
    forIn(jsonSchema.properties, (value, key) => {
      const isRequired = jsonSchema.required.indexOf(key) !== -1;
      if (value.type === 'array') {
        schema.properties[key] = {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: isRequired ? ['value'] : [],
            properties: {
              id: {
                type: 'string',
              },
              value: value.items,
              metadata: {
                type: 'object',
                additionalProperties: true,
              },
            },
          },
        };
      } else {
        schema.properties[key] = {
          type: 'object',
          additionalProperties: false,
          required: isRequired ? ['value'] : [],
          properties: {
            id: {
              type: 'string',
            },
            value,
          },
        };
      }
    });

  }

  return schema;
}
