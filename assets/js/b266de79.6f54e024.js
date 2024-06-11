"use strict";(self.webpackChunkkoss_bolg=self.webpackChunkkoss_bolg||[]).push([[518],{4369:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"git-cheatsheet","metadata":{"permalink":"/git-cheatsheet","editUrl":"https://github.com/kossiitkgp/bolg/tree/main/blog/2018-06-21-git-cheatsheet.md","source":"@site/blog/2018-06-21-git-cheatsheet.md","title":"Git Cheatsheet","description":"What is Git?","date":"2018-06-21T00:00:00.000Z","tags":[{"inline":false,"label":"Engineering","permalink":"/tags/engineering","description":"Technical blogs"}],"readingTime":5.94,"hasTruncateMarker":false,"authors":[{"name":"Taapas Agrawal","title":"Advisor","url":"https://github.com/taapasX28","imageURL":"https://github.com/taapasX28.png","key":"taapas"}],"frontMatter":{"slug":"git-cheatsheet","title":"Git Cheatsheet","authors":"taapas","tags":["engineering"]},"unlisted":false,"nextItem":{"title":"An informal introduction to KWoC","permalink":"/informal-introduction-to-kwoc"}},"content":"## What is Git?\\n\\n![](https://cdn-images-1.medium.com/max/800/1*8xhLJt8Nlps8CDETPgO6lg.jpeg)\\n\\nFrom [Git\u2019s](https://git-scm.com/) official website:\\n\\nGit is a [free and open source](https://git-scm.com/about/free-and-open-source)\\ndistributed version control system designed to handle everything from small to\\nvery large projects with speed and efficiency.\\n\\n**About Version Control**\\n\\nWhat is version control, and why should you care? Version control is a system\\nthat records changes to a file or set of files over time so that you can recall\\nspecific versions later. Even though examples in most of the cases show software\\nsource code as the files under version control, in reality any type of file on a\\ncomputer can be placed under version control.\\n\\n**To install Git:**\\n\\n`sudo apt-get install git`\\n\\n**To check version:**\\n\\n`git -- version`\\n\\n**For configuring:**\\n\\n`git config -- global <keyword> \u201cData\u201d`\\n\\n* `<keyword>` can be `user.name` ,`user.email`, `core.editor` etc.\\n* To display current saved configration type `git config --list`\\n\\n**For help:**\\n\\n`git help <verb>`\\n\\neg: `git help config `for help regarding configration process\\n\\n**Creating a local repository:**\\n\\n* Simply cd into the directory you want to track and simply type `git init`. This\\nwill create a .git file in the directory with a basic skeleton without any\\ncommits.\\n\\n**To check which files can be commited:**\\n\\n`git status`\\n\\nthis will list the files that can be commited\\n\\n* To ignore files create a .gitignore file using `touch .gitignore`\\n* Open this using text editor and add names of files you want to ignore\\n\\n**Moving files to staging area:**\\n\\n* For adding files individually use \u2013`git add <filename>`\\n* For adding all files at once use \u2013`git add -A`\\n* To remove files from staging area use \u2013`git reset <filename>`and to remove all\\nsimply type `git reset`\\n\\n**To commit the files:**\\n\\n`git commit`\\n\\nbut it is necessary to add messages with the commit to make sure what we did ;\\nso for that we use `-m` extension like `git commit -m \u201cmessage\u201d`\\n\\n![](https://cdn-images-1.medium.com/max/800/1*fwUZtFBXFvHwMwmAWlde5w.png)\\n<span class=\\"figcaption_hack\\">Staging and committing Flowchart.</span>\\n\\n**To check the commit history:**\\n\\n`git log`\\n\\n**Cloning a repository from internet:**\\n\\n`git clone <url> <location>`\\n\\n* To clone into current directory use `.`in place of location.\\n* To check status of the cloned repository use `git remote -v` This will give the\\nlocation from where it is fetched.\\n* `git branch -a` gives all the branches in the cloned repository.\\n\\n**Changing and submitting:**\\n\\n* Make changes to the file of the cloned repository.Now to see change made type\\n`git diff <commit>`\\n\\nThis will display the change made with respect to the `<commit>`. By default if\\n`<commit>` field is left empty , Git compares it with `HEAD` i.e the last\\ncommit.\\n\\n> Another feature or form of git diff is\\n\\n> `git diff --cached <commit>`\\n\\n> This shows the diff between your **staged changes** and the `<commit>`. So, here\\n> it gives the diff between your index and the last commit.\\n\\n> `git diff <commit>` shows the diff between the **current working tree** and\\n> the `<commit>`.\\n\\n* Now `git status` will view the modified files .\\n* Add the file to the staging area using `git add -A.`\\n* Commit these files with appropriate message .\\n* Now before pushing it back . We need to pull and check whether any other person\\nmade a change in the branch since the last time type in `git pull origin master`\\n( If on master branch else use branch name in place of master).\\n\\n> **IMPORTANT NOTE:**\\n\\n> `git pull` is often confused with `git fetch` .The basic difference is stated\\n> below.\\n\\n> `git fetch` really only downloads new data from a remote repository \u2014 but it\\n> doesn\u2019t integrate any of this new data into your working files. Fetch is great\\nfor getting a fresh view on all the things that happened in a remote\\nrepository.<br/> Due to it\u2019s \u201charmless\u201d nature, you can rest assured: fetch will\\nnever manipulate, destroy, or screw up anything.`git fetch` is also useful\\nwhen we manually wish to merge or check and merge conflicts that arise whereas\\n`git pull`* *directly fetches and merges (refer branching for merge). It is\\ntherefore more preferred to use `git fetch`.\\n\\n> `git pull` in contrast, is used with a different goal in mind: to update your\\n> current HEAD branch with the latest changes from the remote server. This means\\nthat pull not only downloads new data; it also directly **integrates** it into\\nyour current working copy files.\\n\\nNow for finally pushing type in \u2013>\\n\\n`git push origin master`\\n\\n![](https://cdn-images-1.medium.com/max/800/1*lWS_YsYDgGNzwleoSK8jOg.png)\\n<span class=\\"figcaption_hack\\">Basic process Flowchart.</span>\\n\\n**Branching:**\\n\\n![](https://cdn-images-1.medium.com/max/800/1*roh6Eb2dFSeQhM0Fgs0cng.png)\\n<span class=\\"figcaption_hack\\">A typical image which represents blue dots as master and rest as side branches.</span>\\n\\n* To create a new branch use `git branch <branchname>`\\n* To check all the branches present use `git branch`\\n* To switch over branch use `git checkout <branchname>`\\n* To push a commited changes type in `git push -u origin <branchname>`\\n* To merge the current branch you are working on to master use `git merge\\n<branchname>`\\n* To push the changes we simply use `git push origin master`\\n* To check it they are merged type in `git branch --merged`\\n* If the branch is successfully merged we can now delete the branch\u2013`git branch -d\\n<branchname>`\\n\\n**To switch to a previous version of the code:**\\n\\nWe do `git reset <mode> <SOME-COMMIT>`(some commit is the commit number ) then\\nGit will:\\n\\n* Make your current branch (typically `master`) back to point at `<SOME-COMMIT>`.\\n* Then it will modify your working tree and the index (\u201cstaging area\u201d) according\\nto the `<mode>` selected.\\n* The mode must be one of the following (If `<mode>` is left blank then by default\\n`--mixed` is selected) \u2014\\n* `--soft `\u2014Does not touch the index file or the working tree at all (but resets\\nthe head to` <SOME-COMMIT>`, just like all modes do). This leaves all your\\nchanged files \u201cChanges to be committed\u201d, as *git status* would put it.\\n* `--mixed `\u2014 Resets the index but not the working tree (i.e. the changed files\\nare preserved but not marked for commit) and reports what has not been updated.\\nThis is the default action.\\n* `--hard `\u2014 Resets the index and working tree. Any changes to tracked files in\\nthe working tree since `<SOME-COMMIT>` are discarded.\\n\\n**Stashing**\\n\\nOften there is a condition where code is in a messy state and you don\u2019t want to\\nwork any further . Also you can\u2019t commit this *half-written code*. In such\\nconditions function called `git stash` is used.\\n\\n* Type in `git stash` this will push this code onto a stack while keeping the\\nworking directory clean.Further use of this function again and again on the same\\ncode will generate a stash stack.\\n* To display the stash stack use `git stash list` .The list will be numbered as\\n`stash@{0}`,`stash@{1}` \u2026.`stash@{n}` .\\n* Finally when you decide to work again and want to apply the changes use `git\\nstash apply` . To apply any older stash from the stash stack use `git stash\\napply stash@{n}` where n is the stash number.\\n\\n**For Reference regarding Git :**\\n\\n* For practicing and learning git checkout \u2014\\n[https://github.com/kossiitkgp/git-sandbox](https://github.com/kossiitkgp/git-sandbox)\\n* Basic git\\n:[https://www.youtube.com/watch?v=HVsySz-h9r4&t=464s](https://www.youtube.com/watch?v=HVsySz-h9r4&t=464s)\\n* Resolving a pull request:\\n[https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/)"},{"id":"informal-introduction-to-kwoc","metadata":{"permalink":"/informal-introduction-to-kwoc","editUrl":"https://github.com/kossiitkgp/bolg/tree/main/blog/2017-11-14-informal-introduction-to-kwoc.md","source":"@site/blog/2017-11-14-informal-introduction-to-kwoc.md","title":"An informal introduction to KWoC","description":"Great People of tomorrow, every perfume starts with one ingredient but it is","date":"2017-11-14T00:00:00.000Z","tags":[{"inline":false,"label":"KOSS","permalink":"/tags/koss","description":"A bunch of things specific to Kharagpur Open Source Society"}],"readingTime":8.415,"hasTruncateMarker":false,"authors":[{"name":"Apoorva Kumar","title":"Advisor","url":"https://github.com/rava-dosa","imageURL":"https://github.com/rava-dosa.png","key":"rava-dosa"}],"frontMatter":{"slug":"informal-introduction-to-kwoc","title":"An informal introduction to KWoC","authors":"rava-dosa","tags":["koss"]},"unlisted":false,"prevItem":{"title":"Git Cheatsheet","permalink":"/git-cheatsheet"},"nextItem":{"title":"Writing Kickass READMEs","permalink":"/writing-kickass-readmes"}},"content":"**Great People of tomorrow, every perfume starts with one ingredient but it is\\nthe last one that makes it come to life.**\\n\\nHi! and Welcome! To all esteemed student who are trying to pursue their dreams\\nirrespective of their departments and previous experience.\\n\\nEveryone is welcome. Here \u201cEveryone\u201d is not a metaphor, \u201cEveryone\u201d means\\neveryone.\\n\\nOpen source is not just \u201cGSoC\u201d. It is a lot about, idea, ego, altruism,\\nexpression and satisfaction. From software to hardware to information anything\\ncan be opensource. We do open-source because we love to. \u201cGSoC\u201d is just a good\\nmotivation to start.\\n\\nSome famous open source projects:\\n\\nFirefox, Linux, Ubuntu, VLC.\\n\\n**Now coming back to KWoC**, common problems faced and how to be prepared.\\n\\n**Psychological Barriers** :- Completing KWoC requires you to overcome a\\nstatement \u201cI have just started with coding\u201d or \u201cThese are State of Art things,It\\nrequires a lot of experience\u201d. I will easily term these statements as myths or\\nexcuse.\\n\\n**Why these thoughts arise**?\\n\\nFrom project info. You will read fancy terms as \u201cScraping\u201d \u201cAudio-recognition\u201d\\n\u201cNatural Language Processing\u201d \u201cDeep Learning\u201d \u201cNetworking\u201d and you will lose\\nyour heart. But the matter of truth is that project info tells you just about\\nwhat that project really does, not about the process how it performs that task.\\nIn most of the projects mentioned, you are not going to implement everything\\nyourself and you don\u2019t need to read everything present in the codebase. There\\nare pre-implemented library for most of state of art things, you just need to\\nlearn some basic info about how to use these libraries.\\n\\nMost of the software development is based on basic conditional statements,\\nlibraries and lot of common sense.\\n\\n**Mentor Problem:**- A lot of time there is a problem in response of mentor. A\\nlot of time mentor doesn\u2019t respond in a helpful way or doesn\u2019t respond at all.\\nLet me tell you a ravishing truth \u201cThis phenomenon happens in GSoC as well\u201d.\\nReally you can\u2019t help. Now what, you are in shoes of Robert frost, \u201cTwo roads\\ndiverged in a yellow wood, And sorry I could not travel both\u201d, either you can\\nbecome hopeless again and take a road more traveled or you can make it a\\nmemorable event where you overcame your mediocrity. Try some other project with\\nsimilar portfolio. The cycle is shortlist project, talk to mentor, if you find\\nhim convincing or if you think you can do project without his guidance then only\\nproceed, then code debug and repeat.Bug co-ordinator, but mark my word if you\\nare bugging anyone it\u2019s your responsibility to respect his/her time, give back\\nyour effort or remember that \u201cKarma is a bitch\u201d.\\n\\n**Ubuntu:-**If you are new to ubuntu, \u201cKWOC is going to be really awesome\u201d .\\nBecause you will remember this winter for like 1\u20132 years, because if you are\\nhigh on grit you will be going through a lot of learning shit. Okay, Siri is\\nhere to your rescue, Ubuntu is nothing like Windows but considering you as a\\nWindows user, Instead of .exe there are other methods to install applications.\\n\\n![](https://cdn-images-1.medium.com/max/600/0*7IlL4k_OFlZhgC3u.)\\n<span class=\\"figcaption_hack\\">Here is some Chinese wisdom for you my friend.</span>\\n\\nThere is terminal in ubuntu **(ctrl + alt + t)**. Here is an important\\n**[**[link](https://www.pcsteps.com/5010-basic-linux-commands-terminal/)**]** to\\nmake you little aware of terminal. Get aware of this blog, terminal is quite\\nimportant for software development. Here is the\\n**[**[chest]](https://ubuntuforums.org/showthread.php?t=801404) of all beginner\\nfriendly links.How to install software and\\nlibraries**[**[link](https://askubuntu.com/questions/307280/how-do-i-install-applications-in-ubuntu)**]**.\\nYou don\u2019t need to learn everything at one go. As you start coding and setting up\\nenvironment for your respective project refer to these link as per need. If you\\nhave not installed Ubuntu then visit this\\n**[l**[ink](https://wiki.metakgp.org/w/How_to_install_Ubuntu_as_Dual_Boot)**]**.\\n\\n**Git:-** A command line tool to save different versions of your code wrt to\\nchanges. Nothing more or less than that. People have complicated this\\nunnecessarily. It also interacts with Github and Bitbucket.\\n\\nOne of the best places to learn git is [Learn Git\\nBranching](http://learngitbranching.js.org/)\\n\\nStarter pack of git :-\\n\\na) If you have installed Ubuntu very recently then for installation of git\\n\\n    sudo apt update && sudo apt install git\\n\\nb) When you use git for the first time, you\u2019ll have to configure it with details\\nmatching with your GitHub profile.\\n\\n    git config \u2014 global user.name \u201c\\n    \u201d\\n\\n    git config \u2014 global user.email \u201c\\n    \u201d\\n\\nc) If you are behind a proxy server then to configure git to access Github.\\n\\n    git config \u2014 global http.proxy 172.16.2.30:8080\\n\\nd) Then login in your Github account.\\n\\n**This is just a sample. Change URL according to your project. Don\u2019t just\\nblindly copy paste. Read instruction properly.**\\n\\ne) Visit this link [Kossiitkgp website\\nrepo](https://github.com/kossiitkgp/kossiitkgp.github.io) [Visit your respective\\nproject link].\\n\\nf) On top right of that window click on watch button and pick watching option\\n\\ng) Beside that button is star, star it as well, then there is fork button, click\\non fork button.\\n\\nh) Then you will be automatically directed to your forked window.\\n\\nk) Click on that green button of clone or download.\\n\\nl) When you click there, a menu appears where there is an option to copy link\\nbut ensure that you copy the link is in this format\\n\\n![](https://cdn-images-1.medium.com/max/800/0*bzxLympOO7EubZJW.)\\n\\nAnd not in this format:\\n\\n![](https://cdn-images-1.medium.com/max/800/0*NuKuoB2gB1FnM4af.)\\n\\nm) Then press ctrl+alt+t\\n\\nn)Then enter in terminal \u201cgit clone \u201d and then press ctrl+shift + v and then hit\\nenter (hitting enter is an untold rule).\\n\\n    git clone\\n\\no) cd kossiitkgp.github.io **[change according to name of your project]**\\n\\np) Then enter in terminal git remote add upstream and then press ctrl+shift+v\\n\\n    git checkout -b newbranch\\n\\nr) If you can, edit some files in cloned folder (using git clone)for productive\\nuse, save your changes by ctrl + s (if using sublime or gedit etc) .\\n\\ns) Then properly review your changes then type this command in terminal in\\nalready opened terminal.\\n\\n    git add -A\\n\\n    git commit -m \u201c\\n    \u201d\\n\\n    git push origin\\n\\nv) Enter your username and password. While entering password you will not see\\nanything\\n\\nw) Done\\n\\nx) Then visit\\n[https://github.com/your-user-name](https://github.com/yourusername)**(plz\\nchange)**/kossiitkgp.github.io\\n\\ny) Then click on pull request then click on create new pr.(Check two branches\\nwhich you are comparing)\\n\\n![](https://cdn-images-1.medium.com/max/800/0*26RvHxhcjsbA4ZSJ.)\\n\\n![](https://cdn-images-1.medium.com/max/800/0*nfM7sqVODhn2qA30.)\\n\\n![](https://cdn-images-1.medium.com/max/800/0*xixf1SOFoTSCeN98.)\\n\\nz) If you are sending pr after few days of cloning then before **git push**\\nfirst do\\n\\n    git pull\\n\\n**(there are other methods as well like fetch and rebase) **or face the wrath of\\nmerge conflict.\\n\\nFor proper crisp tutorial read\\n[[this]](https://www.atlassian.com/git/tutorials).\\n\\n**Github:-** It is just a website(like Fb/Orkut) where pull request are similar\\nto Fb\u2019s friend request. It is definitely more productive and useful.\\n\\nBut a more complicated definition\\n\\n*\u201cGitHub is a web-based Git or version control repository and Internet hosting\\nservice. It is mostly used for code. It offers all of the distributed version\\ncontrol and source code management (SCM) functionality of Git as well as adding\\nits own features. It provides access control and several collaboration features\\nsuch as bug tracking, feature requests, task management, and wikis for every\\nproject.\u201d*\\n\\nDefinitely, it gives a lot more insight only if you understand the terminology\\n:) :)\\n\\n**Reading codebase**:- My steps would be:\\n\\n**A)**\\n\\n*1. Setup a source insight( or any good source code browser you use)\\nworkspace/project with all the source, header files, in the code base. Browsing\\nat a higher level from the top most function(main) to lowermost function. During\\nthis code browsing, keep making notes on a paper/or a word document tracing the\\nflow of the function calls. Do not get into function implementation\\nnitti-gritties in this step, keep that for a later iterations. In this step keep\\ntrack of what arguments are passed on to functions, return values, how the\\narguments that are passed to functions are initialized how the value of those\\narguments set modified, how the return values are used ?*\\n\\n*2. After one iteration of step 1, after which you have some level of\\nunderstanding of code and data structures used in the code base, setup\\na\u2026\u2026\u2026\u2026\u2026\u2026\u2026..*[[source]](https://stackoverflow.com/questions/214605/the-best-way-to-familiarize-yourself-with-an-inherited-codebase)\\n\\n**B)**\\n\\n1) Identify why I\u2019m reading code. Could be to understand an algorithm, see\\ndifferent coding style, learn a language, find a defect, figure out a\\nworkaround, understand a badly documented feature, know how to extend a feature,\\nmake a plugin, discover how to exploit a feature beyond the initial intents, \u2026\\n\\n2) Find where to start reading. That could be the main/index file of the\\napplication or library, a manifest. Or you could search the code for a\\ndocumented\\nfeature\u2026\u2026\u2026\u2026\u2026\u2026.[[source]](https://www.quora.com/How-do-you-read-a-big-code-base-like-a-pro)\\n\\n**Googling:-** Google any error which comes while development.This\\n[[URL]](https://medium.com/@apoorvakumar169/art-of-searching-the-web-for-soft-dev-1-4e7044c6f95f)\\nis in different context though. But you can get some idea. If you face any\\nproblem while development just translate your problem to words and search, if\\nyou are not getting solution reframe your problem and then search again. Before\\nasking anyone perform the above instruction at least two times.\\n\\n**Learning:-** Learn what you google. If you are just googling and not learning\\nyou are equally dependent as you were before. Here learning refers to mugging.\\n\\n**Libraries:-**This is the basic difference b/w Windows and Ubuntu , In Windows,\\nwe install whole everything to do something but in Ubuntu, we install something\\nto do a lot of thing. A minimalistic approach towards development.\\n\\nAs one of the member of open-source community, I would like you to introduce to\\nits manifesto\\n\\n*We need to take information, wherever it is stored, make our copies and share\\nthem with the world. We need to take stuff that\u2019s out of copyright and add it to\\nthe archive. We need to buy secret databases and put them on the Web. We need to\\ndownload scientific journals and upload them to file sharing networks. We need\\nto fight\\nfor\u2026\u2026\u2026.*[[source]](https://en.wikisource.org/wiki/Guerilla_Open_Access_Manifesto)\\n\\n*Collective intelligence \u2014 multinational, multiagency, multidisciplinary,\\nmultidomain information-sharing and sense-making \u2014 is the only means of\\nobtaining near-real time understanding of complex systems sufficient to achieve\\nresilience in the face of changes. Many of these changes, including biospheric\\nones such as climate change and depletion of planetary resources, are the result\\nof human activity and industry in the last three\\ncenturies.*[[source]](http://realitysandwich.com/151036/open_source_everything_manifesto/)\\n\\nIn a more beautiful way\\n\\n**\u201cBeneath the mask, there is more than flesh, there is an idea and ideas are\\nbulletproof\u201d**\\n\\nWith Love From:\\n\\n**Kharagpur Open Source Society**"},{"id":"writing-kickass-readmes","metadata":{"permalink":"/writing-kickass-readmes","editUrl":"https://github.com/kossiitkgp/bolg/tree/main/blog/2017-03-14-writing-kickass-readmes.md","source":"@site/blog/2017-03-14-writing-kickass-readmes.md","title":"Writing Kickass READMEs","description":"Writing documentation for code is extremely important. Alas! I realized this","date":"2017-03-14T00:00:00.000Z","tags":[{"inline":false,"label":"Engineering","permalink":"/tags/engineering","description":"Technical blogs"}],"readingTime":8.15,"hasTruncateMarker":false,"authors":[{"name":"Pranit Bauva","title":"Advisor","url":"https://github.com/pranitbauva1997","imageURL":"https://github.com/pranitbauva1997.png","key":"bauva"}],"frontMatter":{"slug":"writing-kickass-readmes","title":"Writing Kickass READMEs","authors":"bauva","tags":["engineering"]},"unlisted":false,"prevItem":{"title":"An informal introduction to KWoC","permalink":"/informal-introduction-to-kwoc"},"nextItem":{"title":"Breaking Github Down","permalink":"/breaking-github-down"}},"content":"Writing documentation for code is **extremely** important. Alas! I realized this\\nlate. Nevertheless, you should not make this mistake again.\\n\\nThis is written with respect to software related READMEs, if you want guidelines\\nfor other stuff, then probably this isn\u2019t the right place.\\n\\nLet\u2019s discuss the potential problems of not having a good README:\\n\\n### Not a clear description of the project\\n\\nI don\u2019t recount how many times this has happened with me. I usually just scroll\\nthrough all of my friends\u2019 projects on GitHub to see what they are upto these\\ndays and time and again I have been disappointed by not seeing a good\\ndescription about the project and it is too time consuming to read the whole\\nsource code to find out what that repository is actually doing.\\n\\nIn fact some professional projects too have vague description and you are left\\nclueless as to what the code does. Sometimes the project is so big that they\\ncan\u2019t really mention all of it in one thing. That is the time you should\\nprobably split it in many repositories or folders (if you desperately want a big\\nmono repo like Google) and each folder should contain some high-level\\ninformation of what the code inside it will do, just like recursive `Makefiles`.\\n\\n### Not having a installation guide (or an incomplete one)\\n\\nSo since you have got the viewer interested in trying our your software by\\nwriting a good introduction, you would now probably piss off her by sucking at\\nwriting an installation guide.\\n\\nWhat a developer should understand is that since your development environment is\\nsetup to run that code, doesn\u2019t mean everybody\u2019s is. One should always write the\\nwhole installation process for all systems that the software supports and it\\nshould clearly mention that the software doesn\u2019t really have support for this\\nsystem but it would be great to support it in future or something.\\n\\nFor unix-based systems, one should list out all the ways to install the\\nsoftware. Let\u2019s take an example of Ubuntu. If you have managed to get your\\nsoftware packaged with a `.deb` file and also uploaded it upstream so that it\\ncan be used with `apt-get`, then that\u2019s just awesome!\\n\\nSometimes you might be releasing it and then packing the source code in a\\n`tar.gz` format, still awesome. In the latter case, it would be worth while to\\nmention all of the dependencies required. Also, just the name isn\u2019t enough,\\ntheir exact version numbers is even better because you might never know when a\\npython code breaks because of the version bump because well that\u2019s how things\\nwork in python world.\\n\\nIf you are expecting the user to do a `gcc` based compiling for each source code\\nfile then God just forgive you. It is time to move on to at least `Makefiles` to\\nautomate that process for you.\\n\\nIf something doesn\u2019t work in particular systems, it is **important** to list it\\nout.\\n\\n### No User Documentation\\n\\nYou don\u2019t have a user documentation? Well then how do you expect others to use\\nyour software. User documentation should be in another file or folder (if it is\\nquite big) and should probably be in some kind of a format which can be rendered\\neasily. You can either write it in markdown format or in Github wiki\u2019s so that\\nit can be easily read on GitHub or you can write in `man` pages form for the\\noldies to read it. But you should have it. And that\u2019s not it, your README should\\nexplicitly point out to the documentation and also tell the user how to access\\nit and actually read it.\\n\\nAlso you can include the very basic use case in the README itself.\\n\\n### No guide for people to actually contribute\\n\\nIf you have the viewer till now and she is thinking of actually contributing to\\nyour project, then kudos, your project is **awesome**.\\n\\nA very important part of the contributing guide is to setup the development\\nenvironment. Again in this, it is worthwhile to get into the platform specific\\ninformation. For eg. Windows will have different development environment while\\nUbuntu will have a different one. You should mention what IDE you used or the\\ntools that you used.\\n\\nNow your project might have some development related dependencies. You should\\nmention about that too. Now finally the viewer can have successful environment\\nsetup to actually contribute to your code.\\n\\nNow, you might be following some conventions for writing your code, right? It is\\nworth while to mention the conventions that you have followed in a separate file\\nand link it in the README.\\n\\nThen you would have a specific way or two in which you accept others\u2019 code,\\nright? You might be using Github\u2019s Pull Request based system or the age old\\nsending patches via email using `git-format-patch` and `git-send-email` just\\nlike old times. Whichever you prefer, it is important to specify this in a new\\nfile possibly named as `CONTRIBUTING GUIDELINES` or something. If you have any\\nspecifics about the project **mention** it there. Don\u2019t just expect people to\\nknow it by default.\\n\\nIt is also worth while to link the `easy to fix` bugs for new comers so that\\nthey can get familiar with the code base without trying to mingle with the core\\nparts of the software.\\n\\n### No technical documentation\\n\\nIf you are having a big project, then you might be having a \u201ccore\u201d part which is\\nused by other parts of code. Have you documented it? Or you just expect people\\nto `git-grep` and `git-blame` to find the relevant use cases, definition of the\\nfunctions and the documentation inside the commit messages? If you are doing\\nthat, it is not exactly bad (I understand you might be having your own reasons)\\nbut it is good to write a technical documentation wherein you will tell the\\nprogrammer what a method does and how to use it. This will also make sure she\\ndoesn\u2019t write a method to do the same stuff again and thus it would reduce your\\nredundancy.\\n\\n### No mention of how to run tests\\n\\nOf course you project has tests, otherwise how can you make sure that by writing\\nnew code, you don\u2019t break the old code? Your README should contain how to run\\nthe test suite. There are tons of different test suites available in the market\\nand it is time consuming for people to check out your test framework and make\\nguesses as how one could probably run it. You should mention how to run\\nindividual tests, the whole test suite, and how to skip some tests, and if your\\ntest suite framework doesn\u2019t support all of these features, then maybe the one\\nyou are using should be replaced.\\n\\n### No license\\n\\nYes, legal matters are important too! Whether you are releasing it as an truly\\nopen-sourced software with `BSD` license or something else, you should mention\\nit. If you don\u2019t realize the importance of licensing, that is maybe because your\\nproject isn\u2019t big enough. Once a lot of people read your code, use it, they\\nmight try to finger with it whether you like it or not. You should explicitly\\nspecify \u201chow much fingering\u201d you can tolerate in a separate file named as\\n`LICENCE` in full detail like a legal document and if you are using a popular\\nlicense, you can just mention the name in the README.\\n\\n### No place to mention about bugs\\n\\nYou don\u2019t have a bug management system? Okay, I agree this isn\u2019t really always\\nrequired but if you do, you should explicitly mention and link to that. If you\\ntalk about bugs in GitHub issues, then mention it there. Also if you are using\\nGitHub, use labels to specify the bugs. If you still track bugs using emails via\\nmailing list, specify that too also include a link to the old archives of the\\nmailing list.\\n\\n### No mention about the version control system\\n\\nWell if you are seeing the project on Github, is it wrong to assume that it uses\\n`git`? Yes, there are many projects that I know use multiple version control\\nsystems and the best example is `nmap`. They accept patches (and PRs) in all\\nforms and integrate it together. So explicitly mention about all the version\\ncontrol systems that you would be using and how you would accept foreign code\\nfor each.\\n\\n### No contacts\\n\\nHow should the viewer contact you in case he needs something or has something\\nfor you? Probably now you have a good incentive to give out your contact\\ninformation (mainly email is good) for others to contact you or just say \u201cThanks\\nfor the awesome software!\u201d.\\n\\n### No fancy GUI pictures\\n\\nYou probably would have spent a hell lot of time in designing and tweaking the\\nGUI and were frustrated when a font size looks bigger than it should, so you\\nshould show it off. There are lots of people who like the fancy GUI way of\\nsoftware rather than the good old black terminal with green text. If you have a\\nfancy GUI, try and put the pictures of it in the README. GitHub\u2019s markdown\\nrenders it, but I don\u2019t think `man` pages do. But if you **really** care about\\nman pages, you probably won\u2019t even have cared enough to make a fancy GUI.\\n\\n### No table of contents\\n\\nWell if you try to write everything that I have pointed out, then it is probably\\ngood for you to follow this advice too. Have a `Table of Contents`. This way,\\nthe README will look more organized and it would make reading much easier.\\n\\nOkay, now that I have ranted a lot, I hope you know **How to Write KickAss\\nREADMEs**.\\n\\n*****\\n\\n*This [article](http://www.bauva.com/blog/Writing-Kickass-READMEs/) originally\\nappeared in Pranit Bauva\u2019s [website](http://www.bauva.com/).*"},{"id":"breaking-github-down","metadata":{"permalink":"/breaking-github-down","editUrl":"https://github.com/kossiitkgp/bolg/tree/main/blog/2017-03-02-breaking-github-down.md","source":"@site/blog/2017-03-02-breaking-github-down.md","title":"Breaking Github Down","description":"During my mid semester exams, one night I was getting bored so I decided to","date":"2017-03-02T00:00:00.000Z","tags":[{"inline":false,"label":"Engineering","permalink":"/tags/engineering","description":"Technical blogs"}],"readingTime":2.16,"hasTruncateMarker":false,"authors":[{"name":"Ayush Goyal","title":"Advisor","url":"https://github.com/Defcon-007","imageURL":"https://github.com/Defcon-007.png","key":"defcon"}],"frontMatter":{"slug":"breaking-github-down","title":"Breaking Github Down","authors":"defcon","tags":["engineering"]},"unlisted":false,"prevItem":{"title":"Writing Kickass READMEs","permalink":"/writing-kickass-readmes"}},"content":"During my mid semester exams, one night I was getting bored so I decided to\\ncheck how to break the most used code hosting website\\n[GitHub](https://github.com/). I wrote a\\nscript[[1]](https://github.com/DefCon-007/Commiter-source) to add infinite\\ncommits to a repository named\\n\u201cCommiter\u201d[[2]](https://github.com/DefCon-007/Commiter). It added a dot at the\\nend of a text file after every commit. The script pushed to the master branch\\nafter every 10,000 commits and then after 1,00,000 commits it deleted the\\nrepository and then cloned it back with just the last commit. I had to do it\\nbecause after a large number of commits the directory size was quite\\nlarge(approx 7\u20139 GBs).\\n\\nWith the help of this script I was able to find three bugs on GitHub after which\\nthey blocked my repository[[2]](https://github.com/DefCon-007/Commiter) .\\n\\n1.  **Z-index for commit label of contribution graph was not proper** :\\n\\nBelow is the screenshot of the issue I am talking about.\\n\\n![](https://cdn-images-1.medium.com/max/800/1*RTWPIaRI0H0hm0FCwxsZlg.png)\\n<span class=\\"figcaption_hack\\">Issue #1</span>\\n\\nThe label for the commit number should be above the graph. I got the following\\nresponse for this issue.\\n\\n![](https://cdn-images-1.medium.com/max/800/1*nlqHSF2LRW8qJ5t3J34cvg.png)\\n<span class=\\"figcaption_hack\\">Reply for issue #3</span>\\n\\n**2. Latest commit info was not loading :**\\n\\nAfter some days the I noticed that the GitHub was failing to load the latest\\ncommit information on the repository homepage.\\n\\n![](https://cdn-images-1.medium.com/max/800/1*Z4JGEWJ5rZYt_xMtsTu_oA.png)\\n<span class=\\"figcaption_hack\\">Issue #2</span>\\n\\nAnd for this issue I got the following reply.\\n\\n![](https://cdn-images-1.medium.com/max/800/1*ZS_cheHLvv5xxdFYQyuGEA.png)\\n<span class=\\"figcaption_hack\\">Reply for issue #2</span>\\n\\n**3. Contributions graph failing to load :**\\n\\nAccording to me this was a major bug. The contributions graph stopped loading.\\nIt showed the below screen for hours and then the page said \u201cFailed to load\\ncontributions graph\u201d.\\n\\n![](https://cdn-images-1.medium.com/max/800/1*H7bPVHj9h4VJn5ABHz9JGQ.png)\\n<span class=\\"figcaption_hack\\">Issue #3</span>\\n\\nSadly this was the last issue I was able to track. After reporting this people\\nat GitHub disabled access to my repository. The reason stated by them was :\\n\\n> The repository you\u2019re inquiring about, DefCon-007/Commiter, has been deemed\\n> abusive to our system and we have disabled it.\\n\\n> Large numbers of commits do not lend themselves well to versioning with Git and\\n> performance issues with a repository of this size can endanger the availability\\nof your repo as well as other user\u2019s repositories. Additionally, the pattern of\\nyour commits is very different than that which Git was meant to handle, and\\ntherefore consumes far more resources than a normal Git repository of its size.\\n\\nAnd at the end they clearly mentioned that the repository access will not\\nenabled again.\\n\\nP.S. : I was able to reach around 6,567,567 commits.\\n\\nSo this was my story how I used my mid semester exam frustration to do some\\nmischief with GitHub.\\n\\nReferences :\\n\\n[1]\\n[https://github.com/DefCon-007/Commiter-source](https://github.com/DefCon-007/Commiter-source)\\n\\n[2][https://github.com/DefCon-007/Commiter](https://github.com/DefCon-007/Commiter)"}]}}')}}]);