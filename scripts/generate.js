const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create Bubbles Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './scripts/templates/default',
    },
    stringReplacers: [
      {
        question: 'Insert package name ( leemons | editors | calendars | notifications )',
        slot: '__package__',
      },
      { question: 'Insert folder name (inside ./src)', slot: '__folder__' },
      { question: 'Insert your component name', slot: '__name__' },
      { question: 'Atomic design level (atom | molecule | organism)', slot: '__atomicity__' },
    ],
    output: {
      path: './packages/__package__(lowerCase)/src/__folder__(kebabCase)/__name__(pascalCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
]);
