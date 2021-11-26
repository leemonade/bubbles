const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create Bubbles React Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './scripts/templates/',
    },
    stringReplacers: [
      { question: 'Insert folder name (inside ./src)', slot: '__folder__' },
      { question: 'Insert component name', slot: '__name__' },
    ],
    output: {
      path: './src/__folder__(kebabCase)/__name__(pascalCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
]);
