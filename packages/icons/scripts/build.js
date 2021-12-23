const fs = require('fs').promises;
const camelcase = require('camelcase');
const { promisify } = require('util');
const rimraf = promisify(require('rimraf'));
const svgr = require('@svgr/core').default;
const babel = require('@babel/core');
const replace = require('replace-in-file');

const replaceOptions = {
  from: /stroke-width=\"1.5\"/g,
  to: 'stroke-width="2"',
};

let transform = {
  react: async (svg, componentName, format) => {
    let component = await svgr(svg, { icon: true }, { componentName });
    let { code } = await babel.transformAsync(component, {
      plugins: [[require('@babel/plugin-transform-react-jsx'), { useBuiltIns: true }]],
    });

    if (format === 'esm') {
      return code;
    }

    return code
      .replace('import * as React from "react"', 'const React = require("react")')
      .replace('export default', 'module.exports =');
  },
};

async function getIcons(style) {
  // First, replace some SVG attrs
  await replace({ ...replaceOptions, files: `./optimized/${style}/*.svg` });

  let files = await fs.readdir(`./optimized/${style}`);
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./optimized/${style}/${file}`, 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}Icon`,
    }))
  );
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? '.js' : '';
      if (format === 'esm') {
        return `export { default as ${componentName} } from './${componentName}${extension}'`;
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`;
    })
    .join('\n');
}

async function buildIcons(package, style, format) {
  let outDir = `./${style}`;
  if (format === 'esm') {
    outDir += '/esm';
  }

  await fs.mkdir(outDir, { recursive: true });

  let icons = await getIcons(style);

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transform[package](svg, componentName, format);
      let types =
        package === 'react'
          ? `import * as React from 'react';\ndeclare function ${componentName}(props: React.ComponentProps<'svg'>): JSX.Element;\nexport default ${componentName};\n`
          : '';

      return [
        fs.writeFile(`${outDir}/${componentName}.js`, content, 'utf8'),
        ...(types ? [fs.writeFile(`${outDir}/${componentName}.d.ts`, types, 'utf8')] : []),
      ];
    })
  );

  await fs.writeFile(`${outDir}/index.js`, exportAll(icons, format), 'utf8');

  await fs.writeFile(`${outDir}/index.d.ts`, exportAll(icons, 'esm', false), 'utf8');
}

function main(package) {
  console.log(`Building ${package} package...`);

  Promise.all([rimraf(`./outline/*`), rimraf(`./solid/*`)])
    .then(() =>
      Promise.all([
        buildIcons(package, 'solid', 'esm'),
        buildIcons(package, 'solid', 'cjs'),
        buildIcons(package, 'outline', 'esm'),
        buildIcons(package, 'outline', 'cjs'),
        fs.writeFile(`./outline/package.json`, `{"module": "./esm/index.js"}`, 'utf8'),
        fs.writeFile(`./outline/esm/package.json`, `{"type": "module"}`, 'utf8'),
        fs.writeFile(`./solid/package.json`, `{"module": "./esm/index.js"}`, 'utf8'),
        fs.writeFile(`./solid/esm/package.json`, `{"type": "module"}`, 'utf8'),
      ])
    )
    .then(() => console.log(`Finished building ${package} package.`));
}

let [package] = process.argv.slice(2);

if (!package) {
  throw Error('Please specify a package');
}

main(package);
