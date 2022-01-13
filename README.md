# buble-react-rollup-starter [![Build Status](https://travis-ci.org/yamafaktory/buble-react-rollup-starter.svg?branch=master)](https://travis-ci.org/yamafaktory/buble-react-rollup-starter) [![npm version](https://img.shields.io/npm/v/buble-react-rollup-starter.svg?style=flat)](https://www.npmjs.com/package/buble-react-rollup-starter) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> A simple boilerplate for web apps with [React](https://facebook.github.io/react/), [Bublé](https://buble.surge.sh/guide/) and [Rollup](http://rollupjs.org/).

The aim of this project is to provide a simple boilerplate to get started with React bundled as an ES2015 module via Rollup, compiled by Bublé.

To sum up and give an overview of what can be achieved like a breath of fresh air:

```JavaScript
// Import React, ReactDOM and the DummyComponent.
import React from 'react'
import ReactDOM from 'react-dom'
import { DummyComponent } from './components/dummy-component.jsx'

// Define the root element.
const root = document.querySelector('main')

// Append the DummyComponent instance to the root element.
ReactDOM.render(<DummyComponent />, root)
```

Rollup will magically includes only what you need in your bundle depending on the imports!

## Prerequisite

### NodeJS

The easiest way to go is to use [nvm](https://github.com/creationix/nvm) and to install one of the recent NodeJS versions bundled with npm 3 by default (i.e. *NodeJS >= 5.0.0*).

## Installation

Via **npm** into a fresh project:

```sh
npm i buble-react-rollup-starter
```

Or using Git:

```sh
git clone https://github.com/yamafaktory/buble-react-rollup-starter.git
cd buble-react-rollup-starter
npm i
```

For a faster installation, use [yarn](https://yarnpkg.com/en/) instead of npm.

## Usage

### Development

A basic workflow involving [Browsersync](https://www.browsersync.io/) is already implemented. Running the following command will open your default browser pointing to the `html/index-dev.html` file. Any modification of one of the files included in the *src* directory will trigger a new development build and refresh your browser:

```bash
npm start
```

You can also generate a development build by running the following command:

```bash
npm run build:dev
```

### Production

First run the following command:

```bash
npm run build
```

Then open the `html/index.html` file in your browser.

The Rollup production configuration file switch the NodeJS environment to production and minifies the code with [UglifyJS](http://lisperator.net/uglifyjs/).

## Linting

The code quality is checked by the [JavaScript Standard Style](http://standardjs.com/).

## License

Released under the [MIT license](https://opensource.org/licenses/MIT) by Davy Duperron.
