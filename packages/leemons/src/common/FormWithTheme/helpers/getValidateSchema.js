import { flatten, forIn, uniq } from 'lodash';

function getValidateSchema(jsonSchema) {
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
        const property = {
          type: 'object',
          additionalProperties: false,
          properties: {
            id: {
              type: 'string',
            },
            value,
          },
        };

        if (isRequired) {
          property.required = ['value'];
        } else {
          property.properties.value.type = uniq([
            ...flatten([property.properties.value.type]),
            'null',
          ]);
          // property.properties.value.nullable = true;
        }

        schema.properties[key] = property;
      }
    });
  }

  return schema;
}

export { getValidateSchema };
