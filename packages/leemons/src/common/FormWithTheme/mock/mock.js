export const mock = {
  jsonSchema: {
    type: 'object',
    properties: {
      rsfbbe337534da1075770d218c576a27e0f65856abfd1b13addb40daa6c7a7: {
        frontConfig: {
          centers: [],
          isAllCenterMode: true,
          masked: false,
          required: true,
          blockData: { name: 'dfg', type: 'textarea' },
          name: 'dfg',
          groupType: 'textarea',
          type: 'rich_text',
        },
        permissions: {
          '*': ['view'],
          '0c8489a3-f41a-4b2b-a694-5f8819451945': ['view', 'edit'],
          '91428328-5e0d-41af-874f-94fa8bf0c2a3': ['view', 'edit'],
        },
        permissionsType: 'profile',
        title: 'dfg',
        type: 'string',
        id: 'rsfbbe337534da1075770d218c576a27e0f65856abfd1b13addb40daa6c7a7',
      },
      rsf4d15b066c16f5e5a2ae2be80a0c5f1271d038cbc64dd4871962d8ccb487: {
        frontConfig: {
          centers: [],
          isAllCenterMode: true,
          masked: false,
          required: true,
          blockData: {
            name: 'Listado',
            type: 'list',
            listType: 'field',
            listOrdered: 'style-1',
          },
          name: 'Listado',
          groupType: 'list',
          type: 'list',
        },
        permissions: {
          '*': ['view'],
          '0c8489a3-f41a-4b2b-a694-5f8819451945': ['view', 'edit'],
          '91428328-5e0d-41af-874f-94fa8bf0c2a3': ['view', 'edit'],
        },
        permissionsType: 'profile',
        title: 'Listado',
        type: 'array',
        items: { type: 'string' },
      },
    },
    required: [
      'rsfbbe337534da1075770d218c576a27e0f65856abfd1b13addb40daa6c7a7',
      'rsf4d15b066c16f5e5a2ae2be80a0c5f1271d038cbc64dd4871962d8ccb487',
    ],
  },
  jsonUI: {
    rsfbbe337534da1075770d218c576a27e0f65856abfd1b13addb40daa6c7a7: {
      'ui:widget': 'wysiwyg',
      'ui:readonly': true,
    },
    rsf4d15b066c16f5e5a2ae2be80a0c5f1271d038cbc64dd4871962d8ccb487: { 'ui:readonly': true },
  },
};
