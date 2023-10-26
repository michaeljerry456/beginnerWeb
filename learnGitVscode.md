# study git in vscode
git --global  : 修改在c:user\.gitconfig中的配置
git --local   : 修改在当前项目中的.git\config种的配置
git --command -h/--help : 查看命令的帮助
cheat sheet in anki and in browser folder.

what is the relationship between local,gihub and server among multi branches?
+ Multiple Branches: You can create and work on multiple branches on your local machine, and each of these can be pushed to the remote server independently. This means you can have a variety of branches on your local machine, with each one having a corresponding remote branch on the server.

sometimes we met the problem in pushing onto github, like:
+ fatal: unable to access 'https://github.com/michaeljerry456/beginnerWeb.git/': Failed to connect to github.com port 443 after 21046 ms: Couldn't connect to server
  1. ff
     - kk
        - jj
            + ll
                1. hh
  2. gg
+ just close the browser on github or vscode even computer. be patient.
+ be patient about above. the most possibility is net of wifi.

the "origin/main" is the name of main branch in remote repository (github), it just means that vscode thinks when begins a project, we create it on the github first then we pull it to the local, so name it "origin/main". we should pay attention to the name, if we want to pull/push other branch.
how about upload files to server using SFTP by a branch name while the server had the files with the same name which uploaded by the main branch?
+ It's important to note that SFTP doesn't inherently support version control or branch management like Git does. You need to rely on Git to manage different versions by branch, and SFTP is used for the actual file transfer to the server.

git add file2, maybe mean delete file2 in staging area, because file2 is deleted and is not in the working area. next, we commit the change, so file2 is deleted in the local repository. finally, we push the change to the remote repository, so file2 is deleted in the remote repository. so here are some concepts: working area, staging area, local repository, remote repository. and the git add file2 is to delete file2 in the staging area, and git commit is to delete file2 in the local repository, and git push is to delete file2 in the remote repository.
in another words, when we say git add, we add changes of files. the staging area contains the snapshot of last committed files, even it is committed to local repository.
don't put changing the content of a file and changing the name or moving the name to other directory together, because the latter can use concise syntax such as git mv to avoid two steps of changing and git adding such change .
The .gitignore file, which only has an extension, is designed to prevent specific files from being sent to the staging area

how about add files to gitignore while they are already in the staging area? in another words they are already tracked by git?
+ git rm --cached file1 file2 file3 . 
+ that will remove such files from the staging area, but not from the working area. so we can add them to gitignore, and they will not be tracked by git.

git diff --staged : compare the difference between staging area and local repository.
git diff : compare the difference between working area and staging area.

git status -s : show the status of files in short format. there are 2 columns: on the left is the status of staging area, on the right is the status of working area. it is very useful.

how to show the diff of a file which is in the staging area graphitically in vscode?
how to show the diff of a file which is in the working directory graphitically in vscode?

git log --oneline : show the log in one line.

git show HEAD~1:file1 : show the content of file1 in the last commit.

git restore file1 : restore the file1 in the working area to the last commit.
after reset, i wrote sth.