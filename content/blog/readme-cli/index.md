---
title: readme
date: '2021-01-01'
description: A cli that generates README.md files
---

<!-- @format -->

> [a cli that generates README.md files](https://www.npmjs.com/package/@mxttwoods/readme)

### Installation

[@mxttwoods/readme](https://www.npmjs.com/package/@mxttwoods/readme)

Use global installation (optional):

```bash
npm i -g @mxttwoods/readme
```

then

```bash
readme
```

### Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed

(`npx` is shipped by default since npm `5.2.0`)

Run the following command at the root of your project and answer the questions:

```bash
npx @mxttwoods/readme
```

Use default values for all questions (`-y`):

```bash
npx @mxttwoods/readme -y
```

Use your own `ejs` README template (`-p`):

```bash
npx @mxttwoods/readme -p path/to/my/own/template.md
```

#### License

This project is
[MIT](https://github.com/mxttwoods/readme/blob/master/LICENSE) licensed.
