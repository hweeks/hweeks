# Docker and Templates

## Introduction

![screenshot](../assets/img/docker.png)

I built this site quite some time ago when I was busy with trying out whatever tool made my life simpler. I've recently found that simplicity in life outside of work is fascinating, but in development not so much. I've been really enjoying devops work lately and decided it was time to revamp this site with some fun tools.

## Initial Concept

I originally wanted something that would allow me to easily proxy a series of docker containers. After a bit of trial and error, I ended up with [this](https://github.com/hweeks/easy-node-nginx-docker-proxy). It's a really simple templating concept that starts up an nginx reverse proxy based on supplied arguments.

## hweeks.com

Here's how I deploy and update this site:

  1. run all of our lint and testing
  1. build a docker image of the current site and push it
  1. if on master run a remote deploy script

Now this is obviously not as clever as kubernetes, but something simple for me, and a fun way to get myself more framiliar with some of these concepts. The remote deploy script is fairly simple:

```bash
#!/bin/bash
source ~/.bashrc
source ~/.bash_profile
docker-compose -f ~/easy-node-nginx-docker-proxy/docker-compose.yml stop
./easy-node-nginx-docker-proxy/src/index.js "$@"
docker-compose -f easy-node-nginx-docker-proxy/docker-compose.yml up -d
```
The script takes in all passed arguments, takes down the docker images, builds the new version, and brings everything back up. Eventually I will make it more complex but for now it works quickly and simply, which was the goal.

## Final Thoughts

There is still more work to do and as it is done I will continue to bump this post to explain more.
