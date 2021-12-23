<p align="center">
  A set of free MIT-licensed high-quality SVG icons for you to use in your web projects. <br>Available as basic SVG icons and via first-party <a href="#react">React</a> libraries.
<p>

## Basic Usage

First, install `@bubbles/icons` from npm:

```sh
npm install @bubbles/icons
```

Now each icon can be imported individually as a React component:

```js
import { BeakerIcon } from '@bubbles/icons/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon />
      <p>...</p>
    </div>
  )
}
```

The 24x24 outline icons can be imported from `@bubbles/icons/outline`, and the 20x20 solid icons can be imported from `@bubbles/icons/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

## License

This library is MIT licensed.
