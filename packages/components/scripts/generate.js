const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create Bubbles Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './scripts/templates/default',
    },
    stringReplacers: [
      { question: 'Insert folder name (inside ./src)', slot: '__folder__' },
      { question: 'Insert your component name', slot: '__name__' },
    ],
    output: {
      path: './src/__folder__(kebabCase)/__name__(pascalCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
  {
    option: 'Create Bubbles Component (Mantine Based)',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './scripts/templates/mantine',
    },
    stringReplacers: [
      { question: 'Insert folder name (inside ./src)', slot: '__folder__' },
      { question: 'Insert base component name (Mantine)', slot: '__mantine__' },
      { question: 'Insert your component name', slot: '__name__' },
    ],
    output: {
      path: './src/__folder__(kebabCase)/__name__(pascalCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
]);
