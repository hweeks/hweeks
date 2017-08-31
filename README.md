# hweeks.com
[![CircleCI](https://circleci.com/gh/hweeks/hweeks/tree/master.svg?style=svg)](https://circleci.com/gh/hweeks/hweeks/tree/master)

## overview

  * [installation](#installation)
  * [development](#development)
  * [build](#build)
  * [testing](#testing)

## installation

To install:

    npm i

Assumptions:

  1. [brunch](http://brunch.io/docs/getting-started) installed globally
  1. jest installed globally
  1. eslint installed globally
  1. stylelint installed globally

I'm aware I could use the `$(npm bin)` shortcut, but I'm on windows and it's frankly a hassle to do both.

## development

To develop locally run:

    npm start

This will spin up a local server at [localhost:3333](http://localhost:3333/). It has hot reloading, and watches everything.

## build

To build a prod bundle:

    npm run build

This will create a `public` folder. Feel free to deploy this to where ever you'd like.

## testing

### jest

To run our jest commands:

    jest

If you're not on windows:

    npm run ci-test

### stylelint

To run our stylelint commands:

    npm run stylelint

If you're not on windows:

    npm run ci-stylelint

### eslint

To run our jest commands:

    eslint .\app\

If you're not on windows:

    npm run ci-lint

### circleci

I've added pull request only integration for non forked repos here. It runs:

    npm run ci

This runs both jest and lint on non-windows environments.
