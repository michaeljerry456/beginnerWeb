# study git in vscode

git --global : 修改在 c:user\.gitconfig 中的配置
git --local : 修改在当前项目中的.git\config 种的配置
git --command -h/--help : 查看命令的帮助
cheat sheet in anki and in browser folder.

what is the relationship between local,gihub and server among multi branches?

- Multiple Branches: You can create and work on multiple branches on your local machine, and each of these can be pushed to the remote server independently. This means you can have a variety of branches on your local machine, with each one having a corresponding remote branch on the server.

sometimes we met the problem in pushing onto github, like:

- fatal: unable to access 'https://github.com/michaeljerry456/beginnerWeb.git/': Failed to connect to github.com port 443 after 21046 ms: Couldn't connect to server
  1. ff
     - kk
       - jj
         - ll
           1. hh
  2. gg
- just close the browser on github or vscode even computer. be patient.
- be patient about above. the most possibility is net of wifi.

# some config before using git in vscode

in terminal we set:  
git config --global core.editor "code --wait"  
git config --global core.autochrlf true  
we can edit the global config file in c:\user\.gitconfig by git config --global -e.  
for more detail, please see the youtube in bookmards Quant\git

the "origin/main" is the name of main branch in remote repository (github), it just means that vscode thinks when begins a project, we create it on the github first then we pull it to the local, so name it "origin/main". we should pay attention to the name, if we want to pull/push other branch.
how about upload files to server using SFTP by a branch name while the server had the files with the same name which uploaded by the main branch?

- It's important to note that SFTP doesn't inherently support version control or branch management like Git does. You need to rely on Git to manage different versions by branch, and SFTP is used for the actual file transfer to the server.

git add file2, maybe mean delete file2 in staging area, because file2 is deleted and is not in the working area. next, we commit the change, so file2 is deleted in the local repository. finally, we push the change to the remote repository, so file2 is deleted in the remote repository. so here are some concepts: working area, staging area, local repository, remote repository. and the git add file2 is to delete file2 in the staging area, and git commit is to delete file2 in the local repository, and git push is to delete file2 in the remote repository.
in another words, when we say git add, we add changes of files. the staging area contains the snapshot of last committed files, even it is committed to local repository.
don't put changing the content of a file and changing the name or moving the name to other directory together, because the latter can use concise syntax such as git mv to avoid two steps of changing and git adding such change .  
for example  
git mv old-file new-file  
old-file: This is the name of the file you want to move or rename.  
new-file: This is the new name or location for the file.

- something like `git mv `to combine two steps of changing name and git adding such change.
  we can use git rm to combine two steps of deleting file and git adding such change.

git difftool /--staged : diff between working area and staged area./ diff between the staged area and local repository.

The .gitignore file, which only has an extension, is designed to prevent specific files from being sent to the staging area

how about add files to gitignore while they are already in the staging area? in another words they are already tracked by git?

- git rm --cached file1 file2 file3 .
- that will remove such files from the staging area, but not from the working area. so we can add them to gitignore, and they will not be tracked by git.

git diff --staged : compare the difference between staging area and local repository.
git diff : compare the difference between working area and staging area.

git status -s : show the status of files in short format. there are 2 columns: on the left is the status of staging area, on the right is the status of working area. it is very useful.

how to show the diff of a file which is in the staging area graphitically in vscode?
how to show the diff of a file which is in the working directory graphitically in vscode?

git log --oneline : show the log in one line.

git show HEAD~1:file1 : show the content of file1 in the last commit.

git restore file1 : restore the file1 in the working area to the last commit.

The terms "HEAD," "index," and "working tree" are concepts in Git that refer to different states of your repository, specifically regarding your current commit, your staging area, and your working directory. Understanding these terms is important when using Git commands like git reset or git checkout. Here's what each of these terms means:

HEAD:

Current Commit: HEAD is a reference to the latest commit in your branch. It essentially points to the snapshot of your project at the last commit. When you switch branches or check out a specific commit, you're moving the HEAD to a different commit, effectively changing which snapshot you're working on.

Index (or Staging Area):

The index, also known as the staging area, is a place where you prepare changes for your next commit. When you make changes to your working directory and want to include them in your next commit, you use git add to stage those changes. These staged changes are in the index, waiting to be committed.

Working Tree (or Working Directory):

The working tree, often referred to as the working directory, is where you have the actual files on your local file system. These files can be modified, and these changes can be tracked by Git. When you edit a file in your project, you're making changes in the working tree.
When you use Git commands like git reset or git checkout with different options, you can specify which of these areas you want to affect:

--soft: When you reset with --soft, you move the HEAD to a different commit but leave your changes in the index and working tree. This is useful when you want to "undo" a commit but keep your changes staged and ready for the next commit.

--mixed (default): This is the default mode for git reset. When you reset with --mixed, you move the HEAD to a different commit, and any changes in the commit you're moving away from are unstaged. Your working tree retains the changes.

--hard: When you reset with --hard, you move the HEAD to a different commit and completely remove all changes from both the index and the working tree. It's a way to discard changes completely, and it should be used with caution because it's not reversible.

In summary, "reset HEAD, index, and working tree" means using the git reset command to change the state of your repository by moving the HEAD (current commit), affecting what's in the index (staging area), and potentially modifying your working directory (local file system). The specific effect depends on the options used with git reset

be attention: after `reset --hard`, when we push new commit to remote repository, we need to use `git push --force` to force push the new commit to remote. otherwise, we will get error message: `Updates were rejected because the tip of your current branch is behind its remote counterpart. Integrate the remote changes (e.g. 'git pull ...') before pushing again.`

so now we understand how to reset to a specific commit in the same branch, but how to reset to a specific commit in a ohter specific branch?

plans: testBranch add new feature, when it succeed a part we merge it into main, little by little. if the main branch collapes, we now know how to rest.

learn check out

pull

pull request maybe is a request to be adopted by the origin author. when you forked a project and made some commit of changes to it on you own forked repository, you will want to pull request.

merge  

git merge subBranch -m "msg"

git merge --abort : abort/undo the merge when you don't want to resolve the conflict.

code \*files

we can use code *files in terminal to open files in vscode. because code is a environment variable, so we can use it in cmd. so can we using code *file to address the conflict in merging.

## push
git branch -vv : check the relationship
git remote -v : check the settings
git remote set-url origin  git@github.com:michaeljerry456/beginnerWeb.git : set SSH connection, need other settings.

