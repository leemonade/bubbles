import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryForm, LIBRARY_FORM_DEFAULT_PROPS } from './LibraryForm';
import mdx from './LibraryForm.mdx';

export default {
  title: 'leemons/Library/LibraryForm',
  parameters: {
    component: LibraryForm,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
};

const Template = ({ children, ...props }) => {
  return <LibraryForm {...props}>{children}</LibraryForm>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_FORM_DEFAULT_PROPS,
  labels: {
    title: 'Upload file',
    featuredImage: 'Featured image',
    tags: 'Tags',
    addBadge: 'Add tag',
    changeImage: 'Change image',
    uploadButton: 'Upload image',
    submitForm: 'Add to library',
    name: 'Name',
    description: 'Description',
  },
  placeholders: {
    tagsInput: 'Name of tag',
    name: 'Name of the resource',
    description: 'Description of the resource',
    color: 'Select a color',
  },
  errorMessages: {
    name: 'Name is required',
    file: 'File is required',
    tags: 'Write a tag to add it',
  },
  // asset: {
  //   id: '5e9f8f9b8f9d8b1c8c8b4567',
  //   file: new File([], 'pepe.png'),
  //   name: 'Pepe',
  //   description: 'Pepe is a cat',
  //   color: '#ff0000',
  //   cover:
  //     'https://static5.depositphotos.com/1000270/486/i/600/depositphotos_4869272-stock-photo-cute-bengal-kitten-looks-pensively.jpg',
  //   tags: ['Cat', 'Cute'],
  // },
};
