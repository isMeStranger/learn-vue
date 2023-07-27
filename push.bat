set "temp_branch_name=class-binding"

git commit -m "first commit"
git branch -M "%temp_branch_name%"
git push -u origin "%temp_branch_name%"
