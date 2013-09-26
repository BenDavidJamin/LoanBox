#!/bin/sh

npm install
bower install
# clone in hooks and remove all but the wanted grunt related 
# hooks

cd .git/hooks

if [ -d ".git/hooks/.git" ]; 
then 

git pull 

else

git clone "git@gitlab.genslerwi.com:benjamin_metzger/gis-git-hooks.git" .git/hooks

fi

git filter-branch --prune-empty --subdirectory-filter grunt -- --all

#git filter-branch -f --prune-empty --index-filter 'git rm --cached --ignore-unmatch $(git ls-files | grep -v "pre-commit")'

# allow the scripts to be executable
chmod +x *
