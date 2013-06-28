#!/bin/bash

echo "pushing to the following git svrs: "
git remote
git add . -A #-A is to commit new / deleted dirs. 
git commit -m '_automated commit via script_'
git push github master #git push to github
git push origin master #git push to default remote host -> assembla
