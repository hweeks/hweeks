# hweeks.com
[![CircleCI](https://circleci.com/gh/hweeks/hweeks/tree/master.svg?style=svg)](https://circleci.com/gh/hweeks/hweeks/tree/master)

## overview

  * [installation](#installation)
  * [development](#development)
  * [build](#build)
  * [testing](#testing)

## installation

To install:

    yarn

## development

To develop locally run:

    yarn start

This will spin up a local server at [localhost:9000](http://localhost:9000/). It has hot reloading, and watches everything.

## build

To build a prod bundle:

    yarn build

This will create a dist in the `static` folder. Feel free to deploy this to where ever you'd like.


## deployment

If a pr is merged, I've added a simple deployment script. The build is triggered by a deployments script I've deployed to my droplet. All passing builds should take about 5 minutes to deploy and be available live at [hweeks.com](https://hweeks.com).
