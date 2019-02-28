# stencil-strip-debug

Strip console, alert, and debugger statements from Stencil components

First, npm install within the project:

```
npm install stencil-strip-debug --save-dev
```

Next, within the project's `stencil.config.js` file, import the plugin and add it to the config's `plugins` config:

#### stencil.config.ts

```ts
import { Config } from '@stencil/core';
import { stripDebug } from 'stencil-strip-debug';

export const config: Config = {
  plugins: [
    sass()
    stripDebug()
  ]
};
```

## Environment variables use-case

You can easily pass environment variable to your `stencil.config.js`.

#### package.json

```shell
{
  ...
  "scripts": {
    "build-dev": "stencil build",
    "build-production": "NODE_ENV=production stencil build",
  }
  ...
}

```

#### stencil.config.ts

```ts
import { Config } from '@stencil/core';
import { stripDebug } from 'stencil-strip-debug';

const PLUGINS = [sass()];

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    PLUGINS.push(stripDebug());
}

export const config: Config = {
    ...,
    plugins: PLUGINS
};
```
