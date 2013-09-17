#!/bin/sh

npm install

bower install

# clone in hooks and remove all but the wanted grunt related 
# hooks

#clean out the hook examples 
rm .git/hooks/*

git clone "git@gitlab.genslerwi.com:benjamin_metzger/gis-git-hooks.git" .git/hooks

cd .git/hooks

git checkout ssp

git filter-branch --prune-empty --subdirectory-filter grunt -- --all

git filter-branch -f --prune-empty --index-filter 'git rm --cached --ignore-unmatch $(git ls-files | grep -v "pre-commit.sh")'

# allow the scripts to be executable
chmod +x ./*
