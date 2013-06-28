#!/bin/bash

echo "pushing to the following svr: "
git remote
git add . -A #-A is to commit new / deleted dirs. 
git commit -m '_automated commit via script'
git push github master #git push to github
git push origin master #git push to default remote host -> assembla
