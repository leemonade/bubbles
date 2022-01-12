export const mock = {
  id: 'f9dc4d76-72b0-49d6-b33a-8dd4c72e7543',
  pluginName: 'plugins.users',
  locationName: 'user-data',
  jsonSchema: {
    type: 'object',
    properties: {
      rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de: {
        frontConfig: {
          centers: ['*'],
          name: 'Input password',
          type: 'text_field',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          masked: true,
          checkboxLabels: {},
        },
        type: 'string',
        title:
          "{{@printWithOutErrors(it, 'properties.rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de.noOptionLabel')/}}",
        permissionsType: 'role',
        permissions: {},
        id: 'rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de',
      },
      rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0: {
        frontConfig: {
          centers: ['*'],
          name: 'Multiles dropdown',
          type: 'multioption',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'dropdown',
          checkboxValues: [
            { key: 1641977822914, value: '1' },
            {
              key: 1641977825186,
              value: '2',
            },
            { key: 1641977826832, value: '3' },
          ],
          checkboxLabels:
            "{{@printWithOutErrors(it, 'properties.rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.frontConfig.checkboxLabels')/}}",
          required: true,
        },
        title:
          "{{@printWithOutErrors(it, 'properties.rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.noOptionLabel')/}}",
        type: 'array',
        uniqueItems: true,
        items: {
          type: 'string',
          enum: ['1', '2', '3'],
          enumNames:
            "{{@printWithOutErrors(it, 'properties.rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.items.enumNames')/}}",
        },
        minItems: 1,
        permissionsType: 'role',
        permissions: {},
        id: 'rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0',
      },
      rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d: {
        frontConfig: {
          centers: ['*'],
          name: 'Multiple checkbox',
          type: 'multioption',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'checkboxs',
          checkboxValues: [
            { key: 1641980103208, value: '1' },
            {
              key: 1641980105712,
              value: '2',
            },
            { key: 1641980107472, value: '3' },
          ],
          minItems: 1,
          maxItems: 2,
          checkboxLabels:
            "{{@printWithOutErrors(it, 'properties.rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.frontConfig.checkboxLabels')/}}",
        },
        minItems: 1,
        maxItems: 2,
        title:
          "{{@printWithOutErrors(it, 'properties.rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.noOptionLabel')/}}",
        type: 'array',
        uniqueItems: true,
        items: {
          type: 'string',
          enum: ['1', '2', '3'],
          enumNames:
            "{{@printWithOutErrors(it, 'properties.rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.items.enumNames')/}}",
        },
        permissionsType: 'role',
        permissions: {},
        id: 'rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d',
      },
      rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5: {
        frontConfig: {
          centers: ['*'],
          name: 'Multiple radio',
          type: 'multioption',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'radio',
          checkboxValues: [
            { key: 1641980152481, value: '1' },
            {
              key: 1641980155129,
              value: '2',
            },
            { key: 1641980156594, value: '3' },
          ],
          checkboxLabels:
            "{{@printWithOutErrors(it, 'properties.rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.frontConfig.checkboxLabels')/}}",
        },
        title:
          "{{@printWithOutErrors(it, 'properties.rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.noOptionLabel')/}}",
        type: 'string',
        uniqueItems: true,
        enum: ['1', '2', '3'],
        enumNames:
          "{{@printWithOutErrors(it, 'properties.rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.enumNames')/}}",
        permissionsType: 'role',
        permissions: {},
        id: 'rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5',
      },
      rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f: {
        frontConfig: {
          centers: ['*'],
          name: 'Si no Chckbox',
          type: 'boolean',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'checkbox',
          initialStatus: 'si',
          checkboxLabels: {},
        },
        type: 'boolean',
        title:
          "{{@printWithOutErrors(it, 'properties.rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f.noOptionLabel')/}}",
        permissionsType: 'role',
        permissions: {},
        id: 'rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f',
      },
      rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f: {
        frontConfig: {
          centers: ['*'],
          name: 'Si no radio',
          type: 'boolean',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'radio',
          initialStatus: 'si',
          checkboxLabels: {},
        },
        type: 'boolean',
        enumNames:
          "{{@printWithOutErrors(it, 'properties.rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f.enumNames')/}}",
        title:
          "{{@printWithOutErrors(it, 'properties.rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f.noOptionLabel')/}}",
        permissionsType: 'role',
        permissions: {},
        id: 'rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f',
      },
      rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63: {
        frontConfig: {
          centers: ['*'],
          name: 'Si no switcher',
          type: 'boolean',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'switcher',
          initialStatus: 'si',
          checkboxLabels: {},
        },
        type: 'boolean',
        title:
          "{{@printWithOutErrors(it, 'properties.rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63.noOptionLabel')/}}",
        permissionsType: 'role',
        permissions: {},
        id: 'rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63',
      },
      rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca: {
        frontConfig: {
          centers: ['*'],
          name: 'Opciones',
          type: 'select',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          checkboxValues: [
            { key: 1641980301351, value: '1' },
            {
              key: 1641980303604,
              value: '2',
            },
            { key: 1641980305167, value: '3' },
          ],
          checkboxLabels:
            "{{@printWithOutErrors(it, 'properties.rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.frontConfig.checkboxLabels')/}}",
        },
        title:
          "{{@printWithOutErrors(it, 'properties.rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.noOptionLabel')/}}",
        type: 'string',
        enum: ['1', '2', '3'],
        enumNames:
          "{{@printWithOutErrors(it, 'properties.rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.enumNames')/}}",
        permissionsType: 'role',
        permissions: {},
        id: 'rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca',
      },
      rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8: {
        frontConfig: {
          centers: ['*'],
          name: 'Usuario',
          type: 'user',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          checkboxLabels: {},
        },
        title:
          "{{@printWithOutErrors(it, 'properties.rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8.title')/}}",
        description:
          "{{@printWithOutErrors(it, 'properties.rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8.description')/}}",
        selectPlaceholder:
          "{{@printWithOutErrors(it, 'properties.rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8.selectPlaceholder')/}}",
        optionLabel:
          "{{@printWithOutErrors(it, 'properties.rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8.optionLabel')/}}",
        yesOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8.yesOptionLabel')/}}",
        noOptionLabel:
          "{{@printWithOutErrors(it, 'properties.rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8.noOptionLabel')/}}",
        type: 'string',
        permissionsType: 'role',
        permissions: {},
        id: 'rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8',
      },
    },
    required: ['rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0'],
  },
  jsonUI: {
    rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de: {
      'ui:widget': 'password',
      'ui:help':
        "{{@printWithOutErrors(it, 'rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de.ui_help')/}}",
    },
    rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0: {
      'ui:help':
        "{{@printWithOutErrors(it, 'rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0.ui_help')/}}",
    },
    rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d: {
      'ui:widget': 'checkboxes',
      'ui:help':
        "{{@printWithOutErrors(it, 'rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d.ui_help')/}}",
    },
    rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5: {
      'ui:widget': 'radio',
      'ui:help':
        "{{@printWithOutErrors(it, 'rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5.ui_help')/}}",
    },
    rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f: {
      'ui:help':
        "{{@printWithOutErrors(it, 'rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f.ui_help')/}}",
    },
    rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f: {
      'ui:widget': 'radio',
      'ui:help':
        "{{@printWithOutErrors(it, 'rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f.ui_help')/}}",
    },
    rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63: {
      'ui:widget': 'toggle',
      'ui:help':
        "{{@printWithOutErrors(it, 'rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63.ui_help')/}}",
    },
    rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca: {
      'ui:help':
        "{{@printWithOutErrors(it, 'rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca.ui_help')/}}",
    },
    rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8: {
      'ui:help':
        "{{@printWithOutErrors(it, 'rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8.ui_help')/}}",
    },
  },
  deleted: 0,
  created_at: '2022-01-11T16:30:20.000Z',
  updated_at: '2022-01-12T11:51:01.000Z',
  deleted_at: null,
  schemaData: {
    properties: {
      rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de: {
        title: 'Input password',
        description: 'Un texto de descripcion',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
      },
      rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0: {
        frontConfig: {
          checkboxLabels: {
            1641977822914: {
              key: 1641977822914,
              label: 'unoooo',
            },
            1641977825186: { key: 1641977825186, label: 'dos' },
            1641977826832: { key: 1641977826832, label: 'tres' },
          },
        },
        title: 'Multiles dropdown',
        description: 'wefwefwef',
        selectPlaceholder: 'wefwefwef',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        items: { enumNames: ['unoooo', 'dos', 'tres'] },
      },
      rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d: {
        frontConfig: {
          checkboxLabels: {
            1641980103208: {
              key: 1641980103208,
              label: 'uno',
            },
            1641980105712: { key: 1641980105712, label: 'dos' },
            1641980107472: { key: 1641980107472, label: 'tres' },
          },
        },
        title: 'Multiple checkbox',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        items: { enumNames: ['uno', 'dos', 'tres'] },
      },
      rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5: {
        frontConfig: {
          checkboxLabels: {
            1641980152481: {
              key: 1641980152481,
              label: 'uno',
            },
            1641980155129: { key: 1641980155129, label: 'dos' },
            1641980156594: { key: 1641980156594, label: 'tres' },
          },
        },
        title: 'Multiple radio',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        enumNames: ['uno', 'dos', 'tres'],
        items: { enumNames: ['uno', 'dos', 'tres'] },
      },
      rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f: {
        title: 'Si no Chckbox',
        description: 'wefwef',
        selectPlaceholder: '',
        optionLabel: 'Esto es el label del checkbox',
        yesOptionLabel: '',
        noOptionLabel: '',
      },
      rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f: {
        enumNames: ['Si', 'No'],
        title: 'Si no radio',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: 'Si',
        noOptionLabel: 'No',
      },
      rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63: {
        title: 'Si no switcher',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: 'Si no label',
        yesOptionLabel: '',
        noOptionLabel: '',
      },
      rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca: {
        frontConfig: {
          checkboxLabels: {
            1641980301351: {
              key: 1641980301351,
              label: 'uno',
            },
            1641980303604: { key: 1641980303604, label: 'dos' },
            1641980305167: { key: 1641980305167, label: 'tres' },
          },
        },
        title: 'Opciones',
        description: 'wefwefwef',
        selectPlaceholder: 'Texto primeramopcion',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        enumNames: ['uno', 'dos', 'tres'],
        items: { enumNames: ['uno', 'dos', 'tres'] },
      },
      rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8: {
        title: 'Usuario',
        description: 'wefwefwef',
      },
    },
  },
  uiData: {
    rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de: {
      ui_help: 'Un texto de ayuda',
    },
    rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0: { ui_help: 'wefwefwefwef' },
    rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d: { ui_help: 'wefwefwef' },
    rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5: { ui_help: 'wefwefwef' },
    rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f: { ui_help: 'wefwefwef' },
    rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f: { ui_help: 'wefwefwef' },
    rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63: { ui_help: 'wefwefwef' },
    rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca: { ui_help: 'wefwefwef' },
    rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8: { ui_help: 'wefwefwef' },
  },
  compileJsonSchema: {
    type: 'object',
    properties: {
      rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de: {
        frontConfig: {
          centers: ['*'],
          name: 'Input password',
          type: 'text_field',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          masked: true,
          checkboxLabels: {},
        },
        type: 'string',
        title: 'Input password',
        description: 'Un texto de descripcion',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        permissionsType: 'role',
        permissions: {},
        id: 'rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de',
      },
      rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0: {
        frontConfig: {
          centers: ['*'],
          name: 'Multiles dropdown',
          type: 'multioption',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'dropdown',
          checkboxValues: [
            { key: 1641977822914, value: '1' },
            {
              key: 1641977825186,
              value: '2',
            },
            { key: 1641977826832, value: '3' },
          ],
          checkboxLabels: {
            1641977822914: { key: 1641977822914, label: 'unoooo' },
            1641977825186: { key: 1641977825186, label: 'dos' },
            1641977826832: { key: 1641977826832, label: 'tres' },
          },
          required: true,
        },
        title: 'Multiles dropdown',
        description: 'wefwefwef',
        selectPlaceholder: 'wefwefwef',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        type: 'array',
        uniqueItems: true,
        items: {
          type: 'string',
          enum: ['1', '2', '3'],
          enumNames: ['unoooo', 'dos', 'tres'],
        },
        minItems: 1,
        permissionsType: 'role',
        permissions: {},
        id: 'rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0',
      },
      rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d: {
        frontConfig: {
          centers: ['*'],
          name: 'Multiple checkbox',
          type: 'multioption',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'checkboxs',
          checkboxValues: [
            { key: 1641980103208, value: '1' },
            {
              key: 1641980105712,
              value: '2',
            },
            { key: 1641980107472, value: '3' },
          ],
          minItems: 1,
          maxItems: 2,
          checkboxLabels: {
            1641980103208: { key: 1641980103208, label: 'uno' },
            1641980105712: { key: 1641980105712, label: 'dos' },
            1641980107472: { key: 1641980107472, label: 'tres' },
          },
        },
        minItems: 1,
        maxItems: 2,
        title: 'Multiple checkbox',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        type: 'array',
        uniqueItems: true,
        items: { type: 'string', enum: ['1', '2', '3'], enumNames: ['uno', 'dos', 'tres'] },
        permissionsType: 'role',
        permissions: {},
        id: 'rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d',
      },
      rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5: {
        frontConfig: {
          centers: ['*'],
          name: 'Multiple radio',
          type: 'multioption',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'radio',
          checkboxValues: [
            { key: 1641980152481, value: '1' },
            {
              key: 1641980155129,
              value: '2',
            },
            { key: 1641980156594, value: '3' },
          ],
          checkboxLabels: {
            1641980152481: { key: 1641980152481, label: 'uno' },
            1641980155129: { key: 1641980155129, label: 'dos' },
            1641980156594: { key: 1641980156594, label: 'tres' },
          },
        },
        title: 'Multiple radio',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        type: 'string',
        uniqueItems: true,
        enum: ['1', '2', '3'],
        enumNames: ['uno', 'dos', 'tres'],
        permissionsType: 'role',
        permissions: {},
        id: 'rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5',
      },
      rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f: {
        frontConfig: {
          centers: ['*'],
          name: 'Si no Chckbox',
          type: 'boolean',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'checkbox',
          initialStatus: 'si',
          checkboxLabels: {},
        },
        type: 'boolean',
        title: 'Si no Chckbox',
        description: 'wefwef',
        selectPlaceholder: '',
        optionLabel: 'Esto es el label del checkbox',
        yesOptionLabel: '',
        noOptionLabel: '',
        permissionsType: 'role',
        permissions: {},
        id: 'rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f',
      },
      rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f: {
        frontConfig: {
          centers: ['*'],
          name: 'Si no radio',
          type: 'boolean',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'radio',
          initialStatus: 'si',
          checkboxLabels: {},
        },
        type: 'boolean',
        enumNames: ['Si', 'No'],
        title: 'Si no radio',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: 'Si',
        noOptionLabel: 'No',
        permissionsType: 'role',
        permissions: {},
        id: 'rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f',
      },
      rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63: {
        frontConfig: {
          centers: ['*'],
          name: 'Si no switcher',
          type: 'boolean',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          uiType: 'switcher',
          initialStatus: 'si',
          checkboxLabels: {},
        },
        type: 'boolean',
        title: 'Si no switcher',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: 'Si no label',
        yesOptionLabel: '',
        noOptionLabel: '',
        permissionsType: 'role',
        permissions: {},
        id: 'rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63',
      },
      rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca: {
        frontConfig: {
          centers: ['*'],
          name: 'Opciones',
          type: 'select',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          checkboxValues: [
            { key: 1641980301351, value: '1' },
            {
              key: 1641980303604,
              value: '2',
            },
            { key: 1641980305167, value: '3' },
          ],
          checkboxLabels: {
            1641980301351: { key: 1641980301351, label: 'uno' },
            1641980303604: { key: 1641980303604, label: 'dos' },
            1641980305167: { key: 1641980305167, label: 'tres' },
          },
        },
        title: 'Opciones',
        description: 'wefwefwef',
        selectPlaceholder: 'Texto primeramopcion',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        type: 'string',
        enum: ['1', '2', '3'],
        enumNames: ['uno', 'dos', 'tres'],
        permissionsType: 'role',
        permissions: {},
        id: 'rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca',
      },
      rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8: {
        frontConfig: {
          centers: ['*'],
          name: 'Usuario',
          type: 'user',
          permissions: [
            {
              id: '1f6413ea-3e5a-475e-836f-0d7666cd42ff',
              roles: [
                { id: 'e7624f56-ca96-48ec-9336-c6268c9f2eb7' },
                { id: '4a010b63-6206-463d-a18c-8b290a49336f' },
              ],
              view: false,
              edit: false,
            },
            {
              id: 'f8c50a5c-6b2b-4895-8112-9daa64dd03c0',
              roles: [
                { id: 'f9aff5da-bcfb-4671-bdc2-db5a7573b4b3' },
                { id: 'cdeeafb7-2c38-4f78-abed-0baa07ea805b' },
              ],
              view: false,
              edit: false,
            },
          ],
          checkboxLabels: {},
        },
        title: 'Usuario',
        description: 'wefwefwef',
        selectPlaceholder: '',
        optionLabel: '',
        yesOptionLabel: '',
        noOptionLabel: '',
        type: 'string',
        permissionsType: 'role',
        permissions: {},
        id: 'rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8',
      },
    },
    required: ['rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0'],
  },
  compileJsonUI: {
    rsd632905709b10e3bbd359433820b78a8eb624af9ddc8766b0f44bcd4c5de: {
      'ui:widget': 'password',
      'ui:help': 'Un texto de ayuda',
    },
    rseb9d6f531e9e6a9ece77f26a08ad30fcd0450fbbfa2ae0cc05a6c35f83f0: { 'ui:help': 'wefwefwefwef' },
    rs5df6f39038d9d3c9f69edb74b4e7b79a92d8d45d81d386d9ab17ae1d047d: {
      'ui:widget': 'checkboxes',
      'ui:help': 'wefwefwef',
    },
    rsae418442005ee25a238ca18b93c1dfae54ef9a2c3d6cb704a0e74af60aa5: {
      'ui:widget': 'radio',
      'ui:help': 'wefwefwef',
    },
    rs3676d7485d292453bc7471546b32a83040af91c1380107e6a7d741323c1f: { 'ui:help': 'wefwefwef' },
    rs44ebee3224529d069da7c31223a97e6eefede9a0b7703beee764e8bcba9f: {
      'ui:widget': 'radio',
      'ui:help': 'wefwefwef',
    },
    rscd59845a72d86cbd04a9ad0d6601cd6bc04018c57d82007373729b026f63: {
      'ui:widget': 'toggle',
      'ui:help': 'wefwefwef',
    },
    rs49a793f536685071e239b06cdc63084ab17714f304994d3ba99597d757ca: { 'ui:help': 'wefwefwef' },
    rsc786f7cc80352e9506ceae23f63b69cd3af52a85eb7ff2d6e0bd2b10a1d8: { 'ui:help': 'wefwefwef' },
  },
};
