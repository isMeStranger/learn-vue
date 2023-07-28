set "temp_branch_name=my-modals"

git init
git remote add origin https://github.com/isMeStranger/learn-vue.git
git branch -M "%temp_branch_name%"
git add .
git commit -a -m "first commit"
git push -u origin "%temp_branch_name%"

PAUSE