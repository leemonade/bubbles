export const mock = {
  id: '35f056d0-61c7-4c38-a4c6-b18fd4bc0cd3',
  pluginName: 'plugins.users',
  locationName: 'user-data',
  jsonSchema: {
    type: 'object',
    properties: {
      rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf: {
        frontConfig: {
          name: 'Campo',
          centers: ['*'],
          type: 'text_field',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: true,
              edit: true,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: true,
              edit: true,
            },
          ],
          isAllCenterMode: true,
          required: true,
          minLength: 1,
          maxLength: 2,
          checkboxLabels:
            "{{@printWithOutErrors(it, 'properties.rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf.frontConfig.checkboxLabels')/}}",
        },
        type: 'string',
        minLength: 1,
        maxLength: 2,
        title:
          "{{@printWithOutErrors(it, 'properties.rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf.noOptionLabel')/}}",
        permissionsType: 'profile',
        permissions: {
          '31f57c04-01e1-404c-8270-3eb4957dfcb5': ['view', 'edit'],
          '472e6a4b-7418-4bad-81f6-f57e93ec1d6f': ['view', 'edit'],
        },
        id: 'rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf',
      },
      rscce927ecf97c3723622ab69b39fa5a00509019eb482adac7e670648dfd55: {
        frontConfig: {
          centers: ['ef8bf00b-1290-4bd9-bb6f-8197e421b36c'],
          name: 'Campo numero',
          type: 'text_field',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: false,
              edit: false,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: false,
              edit: false,
            },
          ],
          isAllCenterMode: false,
          required: true,
          onlyNumbers: true,
        },
        type: 'string',
        format: 'numbers',
        title:
          "{{@printWithOutErrors(it, 'properties.rscce927ecf97c3723622ab69b39fa5a00509019eb482adac7e670648dfd55.title')/}}",
        permissionsType: 'role',
        permissions: {
          '61a0750d-3738-4829-8a2c-bf066635d7bf': [],
          '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2': [],
        },
      },
      rsddcc9b7087638f6ebdea09bc4ad9a428db0621f996b187611caebbb3d1cc: {
        frontConfig: {
          centers: ['*'],
          name: 'Textarea',
          type: 'rich_text',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: false,
              edit: false,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: false,
              edit: false,
            },
          ],
          required: true,
          minLength: 1,
          maxLength: 5,
        },
        type: 'string',
        minLength: 1,
        maxLength: 5,
        title:
          "{{@printWithOutErrors(it, 'properties.rsddcc9b7087638f6ebdea09bc4ad9a428db0621f996b187611caebbb3d1cc.title')/}}",
        permissionsType: 'role',
        permissions: {},
      },
      rsafd2eb07aafae6a732cdf4742177b1dcd52b725a0481db9260003049ac38: {
        frontConfig: {
          centers: ['*'],
          name: 'Numero',
          type: 'number',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: false,
              edit: false,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: false,
              edit: false,
            },
          ],
          required: true,
        },
        type: 'number',
        title:
          "{{@printWithOutErrors(it, 'properties.rsafd2eb07aafae6a732cdf4742177b1dcd52b725a0481db9260003049ac38.title')/}}",
        permissionsType: 'role',
        permissions: {},
      },
      rs9f0bcdd6f16e2829f3032a5db75cfcc0221a08a0db1994085fc027cd6f18: {
        frontConfig: {
          centers: ['*'],
          name: 'Eamil',
          type: 'email',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: false,
              edit: false,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: false,
              edit: false,
            },
          ],
          required: true,
        },
        type: 'string',
        format: 'email',
        title:
          "{{@printWithOutErrors(it, 'properties.rs9f0bcdd6f16e2829f3032a5db75cfcc0221a08a0db1994085fc027cd6f18.title')/}}",
        permissionsType: 'role',
        permissions: {},
      },
    },
    required: [
      'rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf',
      'rscce927ecf97c3723622ab69b39fa5a00509019eb482adac7e670648dfd55',
      'rsddcc9b7087638f6ebdea09bc4ad9a428db0621f996b187611caebbb3d1cc',
      'rsafd2eb07aafae6a732cdf4742177b1dcd52b725a0481db9260003049ac38',
      'rs9f0bcdd6f16e2829f3032a5db75cfcc0221a08a0db1994085fc027cd6f18',
    ],
  },
  jsonUI: {
    rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf: {
      'ui:help':
        "{{@printWithOutErrors(it, 'rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf.ui_help')/}}",
    },
    rscce927ecf97c3723622ab69b39fa5a00509019eb482adac7e670648dfd55: {},
    rsddcc9b7087638f6ebdea09bc4ad9a428db0621f996b187611caebbb3d1cc: { 'ui:widget': 'textarea' },
    rsafd2eb07aafae6a732cdf4742177b1dcd52b725a0481db9260003049ac38: {},
    rs9f0bcdd6f16e2829f3032a5db75cfcc0221a08a0db1994085fc027cd6f18: {},
  },
  deleted: 0,
  created_at: '2022-01-07T13:53:53.000Z',
  updated_at: '2022-01-10T14:26:54.000Z',
  deleted_at: null,
  schemaData: {
    properties: {
      rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf: {
        frontConfig: { checkboxLabels: '' },
        title: 'Nombre',
        description: '',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
      },
      rscce927ecf97c3723622ab69b39fa5a00509019eb482adac7e670648dfd55: { title: 'Campo numero' },
      rsddcc9b7087638f6ebdea09bc4ad9a428db0621f996b187611caebbb3d1cc: { title: 'Textarea' },
      rsafd2eb07aafae6a732cdf4742177b1dcd52b725a0481db9260003049ac38: { title: 'Numero' },
      rs9f0bcdd6f16e2829f3032a5db75cfcc0221a08a0db1994085fc027cd6f18: { title: 'Email' },
    },
  },
  uiData: { rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf: { ui_help: '' } },
  compileJsonSchema: {
    type: 'object',
    properties: {
      rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf: {
        frontConfig: {
          name: 'Campo',
          centers: ['*'],
          type: 'text_field',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: true,
              edit: true,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: true,
              edit: true,
            },
          ],
          isAllCenterMode: true,
          required: true,
          minLength: 1,
          maxLength: 2,
          checkboxLabels: '',
        },
        type: 'string',
        minLength: 1,
        maxLength: 2,
        title: 'Nombre',
        description: '',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        permissionsType: 'profile',
        permissions: {
          '31f57c04-01e1-404c-8270-3eb4957dfcb5': ['view', 'edit'],
          '472e6a4b-7418-4bad-81f6-f57e93ec1d6f': ['view', 'edit'],
        },
        id: 'rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf',
      },
      rscce927ecf97c3723622ab69b39fa5a00509019eb482adac7e670648dfd55: {
        frontConfig: {
          centers: ['ef8bf00b-1290-4bd9-bb6f-8197e421b36c'],
          name: 'Campo numero',
          type: 'text_field',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: false,
              edit: false,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: false,
              edit: false,
            },
          ],
          isAllCenterMode: false,
          required: true,
          onlyNumbers: true,
        },
        type: 'string',
        format: 'numbers',
        title: 'Campo numero',
        permissionsType: 'role',
        permissions: {
          '61a0750d-3738-4829-8a2c-bf066635d7bf': [],
          '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2': [],
        },
      },
      rsddcc9b7087638f6ebdea09bc4ad9a428db0621f996b187611caebbb3d1cc: {
        frontConfig: {
          centers: ['*'],
          name: 'Textarea',
          type: 'rich_text',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: false,
              edit: false,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: false,
              edit: false,
            },
          ],
          required: true,
          minLength: 1,
          maxLength: 5,
        },
        type: 'string',
        minLength: 1,
        maxLength: 5,
        title: 'Textarea',
        permissionsType: 'role',
        permissions: {},
      },
      rsafd2eb07aafae6a732cdf4742177b1dcd52b725a0481db9260003049ac38: {
        frontConfig: {
          centers: ['*'],
          name: 'Numero',
          type: 'number',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: false,
              edit: false,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: false,
              edit: false,
            },
          ],
          required: true,
        },
        type: 'number',
        title: 'Numero',
        permissionsType: 'role',
        permissions: {},
      },
      rs9f0bcdd6f16e2829f3032a5db75cfcc0221a08a0db1994085fc027cd6f18: {
        frontConfig: {
          centers: ['*'],
          name: 'Eamil',
          type: 'email',
          permissions: [
            {
              id: '31f57c04-01e1-404c-8270-3eb4957dfcb5',
              roles: [
                { id: '61a0750d-3738-4829-8a2c-bf066635d7bf' },
                { id: '38e23f4a-9e34-4983-b383-43eee5202306' },
              ],
              view: false,
              edit: false,
            },
            {
              id: '472e6a4b-7418-4bad-81f6-f57e93ec1d6f',
              roles: [
                { id: '64d32ba2-bbdb-4a6e-aa7b-6c320c946ee2' },
                { id: '91aa1e3a-743b-4cd2-a13f-a380723398e4' },
              ],
              view: false,
              edit: false,
            },
          ],
          required: true,
        },
        type: 'string',
        format: 'email',
        title: 'Email',
        permissionsType: 'role',
        permissions: {},
      },
    },
    required: [
      'rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf',
      'rscce927ecf97c3723622ab69b39fa5a00509019eb482adac7e670648dfd55',
      'rsddcc9b7087638f6ebdea09bc4ad9a428db0621f996b187611caebbb3d1cc',
      'rsafd2eb07aafae6a732cdf4742177b1dcd52b725a0481db9260003049ac38',
      'rs9f0bcdd6f16e2829f3032a5db75cfcc0221a08a0db1994085fc027cd6f18',
    ],
  },
  compileJsonUI: {
    rs4659077879749fdf970e5ae36dd16a6a5dd9048a761beb3c10b5503dcccf: { 'ui:help': '' },
    rscce927ecf97c3723622ab69b39fa5a00509019eb482adac7e670648dfd55: {},
    rsddcc9b7087638f6ebdea09bc4ad9a428db0621f996b187611caebbb3d1cc: { 'ui:widget': 'textarea' },
    rsafd2eb07aafae6a732cdf4742177b1dcd52b725a0481db9260003049ac38: {},
    rs9f0bcdd6f16e2829f3032a5db75cfcc0221a08a0db1994085fc027cd6f18: {},
  },
};
