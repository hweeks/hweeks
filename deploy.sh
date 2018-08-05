#!/bin/bash
source ~/.bashrc
source ~/.bash_profile
yarn
yarn build
tmux kill-session -t hweeks
tmux new -s hweeks -d
tmux send-keys -t hweeks 'NODE_ENV=production forever --id=hweeks server/index.js' Enter
