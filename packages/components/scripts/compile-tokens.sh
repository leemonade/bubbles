#!/bin/bash

# TODO: Change input tokens to the figma tokens instead of merged ones
# TODO: once they are fully unified

# Generate tokens-compiled.json file
npx token-transformer ../../merged_tokens.json tokens-compiled.json core,global,component;
# Create a new tokens-compiled.js file starting with "export default "
printf "export default " > ./src/tokens.compiled.js;
# Insert the tokens-compiled.json into tokens-compiled.js
cat ./tokens-compiled.json >> ./src/tokens.compiled.js;
# Remove the tokens-compiled.json file
rm ./tokens-compiled.json
