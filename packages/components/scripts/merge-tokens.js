const { defaultsDeep } = require('lodash');
const fs = require('fs');
const path = require('path');

const oldTokens = require('../../../old_tokens.json');
const newTokens = require('../../../tokens.json');

const output = defaultsDeep(newTokens, oldTokens);

fs.writeFileSync(
  path.join(__dirname, '../../../merged_tokens.json'),
  JSON.stringify(output, '', 2)
);
