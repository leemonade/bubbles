export const TREE_DATA_1 = [
  {
    id: 'ID1',
    parent: 0,
    text: 'Organization A',
    actions: [
      {
        name: 'rename',
        showOnHover: false,
        icon: () => <span>R</span>,
        handler: () => alert('Handler works'),
      },
      'edit',
      {
        name: 'delete',
      },
    ],
  },
  {
    id: 'ID2',
    parent: 'ID1',
    text: 'Center A (Master)',
  },
  {
    id: 'ID3',
    parent: 'ID2',
    text: '2002 Lengua Castellana y Literatura 1',
    actions: [
      {
        name: 'rename',
        showOnHover: false,
        icon: () => <span>R</span>,
        handler: () => alert('Handler works'),
      },
      'edit',
      {
        name: 'delete',
      },
    ],
  },
  {
    id: 'ID4',
    parent: 'ID2',
    text: 'Class 2',
  },
  {
    id: 'ID2-ADD',
    parent: 'ID2',
    text: 'Add Class',
    type: 'button',
    draggable: false,
    data: {
      action: 'add',
    },
  },
  {
    id: 'ID5',
    parent: 'ID1',
    text: 'Center B',
  },
  {
    id: 'ID5-ADD',
    parent: 'ID5',
    text: 'Add Class',
    type: 'button',
    draggable: false,
    data: {
      action: 'add',
    },
  },
  {
    id: 'ID1-ADD',
    parent: 'ID1',
    text: 'Add Center',
    type: 'button',
    draggable: false,
    data: {
      action: 'add',
    },
  },
];

export const TREE_DATA_2 = [
  {
    id: 'ID1',
    parent: 0,
    text: 'Organization A',
  },
  {
    id: 'ID2',
    parent: 'ID1',
    text: 'Center A (Master)',
  },
  {
    id: 'ID-TEMP',
    parent: 'ID2',
    draggable: false,
    text: 'New Level',
  },
];

export const TREE_DATA_3 = [
  {
    id: 'ID1',
    parent: 0,
    text: 'Organization A',
  },
  {
    id: 'ID2',
    parent: 'ID1',
    text: 'Center A (Master)',
  },
  {
    id: 'ID3',
    parent: 'ID2',
    text: 'Grade 1',
  },
  {
    id: 'ID3-ADD',
    parent: 'ID3',
    text: 'Add Class',
    type: 'button',
    draggable: false,
    data: {
      action: 'add',
    },
  },
  {
    id: 'ID4',
    parent: 'ID2',
    text: 'Grade 2',
  },
  {
    id: 'ID4-ADD',
    parent: 'ID4',
    text: 'Add Class',
    type: 'button',
    draggable: false,
    data: {
      action: 'add',
    },
  },
  {
    id: 'ID2-ADD',
    parent: 'ID2',
    text: 'Add Grade',
    type: 'button',
    draggable: false,
    data: {
      action: 'add',
    },
  },
  {
    id: 'ID5',
    parent: 'ID1',
    text: 'Center B',
  },
  {
    id: 'ID5-ADD',
    parent: 'ID5',
    text: 'Add Class',
    type: 'button',
    draggable: false,
    data: {
      action: 'add',
    },
  },
  {
    id: 'ID1-ADD',
    parent: 'ID1',
    text: 'Add Center',
    type: 'button',
    draggable: false,
    data: {
      action: 'add',
    },
  },
];
