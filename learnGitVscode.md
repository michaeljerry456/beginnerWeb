# study git in vscode
git --global  : �޸���c:user\.gitconfig�е�����
git --local   : �޸��ڵ�ǰ��Ŀ�е�.git\config�ֵ�����
git --command -h/--help : �鿴����İ���
cheat sheet in anki and in browser folder.

what is the relationship between local,gihub and server among multi branches?
+ Multiple Branches: You can create and work on multiple branches on your local machine, and each of these can be pushed to the remote server independently. This means you can have a variety of branches on your local machine, with each one having a corresponding remote branch on the server.
sometimes we met the problem in pushing onto github, like:
+ fatal: unable to access 'https://github.com/michaeljerry456/beginnerWeb.git/': Failed to connect to github.com port 443 after 21046 ms: Couldn't connect to server
+ just close the browser on github or vscode even computer. be patient.
+ be patient about above. the most possibility is net of wifi.
the "origin/main" is the name of main branch in remote repository (github), it just means that vscode thinks when begins a project, we create it on the github first then we pull it to the local, so name it "origin/main". we should pay attention to the name, if we want to pull/push other branch.