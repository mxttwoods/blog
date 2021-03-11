---
title: readme-cli
date: '2021-01-01'
description: A cli that generates README.md files
---

<!-- @format -->

> [a cli that generates README.md files](https://www.npmjs.com/package/@mxttwoods/readme-cli)

### Installation

[@mxttwoods/readme-cli](https://www.npmjs.com/package/@mxttwoods/readme-cli)

Use global installation (optional):

```bash
# install globally
npm i -g @mxttwoods/readme-cli
```

then

```bash
# use the cli
readme-cli
```

### Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed

(`npx` is shipped by default since npm `5.2.0`)

Run the following command at the root of your project and answer the questions:

```bash
# use with questionnaire
npx @mxttwoods/readme-cli
```

Use default values for all questions (`-y`):

```bash
# use without questionnaire
npx @mxttwoods/readme-cli -y
```

Use your own `ejs` README template (`-p`):

```bash
# user with your own template
npx @mxttwoods/readme-cli -p path/to/my/own/template.md
```

### Development

#### Install

```bash
yarn install
```

#### Build

```bash
yarn build
```

#### Test

```bash
yarn test
```

### License

This project is
[MIT](https://github.com/mxttwoods/readme-cli/blob/master/LICENSE) licensed.
