"use strict";(self.webpackChunkkoss_bolg=self.webpackChunkkoss_bolg||[]).push([[640],{2349:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=i(6070),t=i(5710);const r={slug:"git-cheatsheet",title:"Git Cheatsheet",authors:"taapas",tags:["engineering"]},c=void 0,o={permalink:"/git-cheatsheet",editUrl:"https://github.com/kossiitkgp/bolg/tree/main/blog/2018-06-21-git-cheatsheet.md",source:"@site/blog/2018-06-21-git-cheatsheet.md",title:"Git Cheatsheet",description:"What is Git?",date:"2018-06-21T00:00:00.000Z",tags:[{inline:!1,label:"Engineering",permalink:"/tags/engineering",description:"Technical bolgs"}],readingTime:5.94,hasTruncateMarker:!1,authors:[{name:"Taapas Agrawal",title:"Advisor",url:"https://github.com/taapasX28",imageURL:"https://github.com/taapasX28.png",key:"taapas"}],frontMatter:{slug:"git-cheatsheet",title:"Git Cheatsheet",authors:"taapas",tags:["engineering"]},unlisted:!1,prevItem:{title:"KWoC 2023 Report",permalink:"/kwoc-2023-report"},nextItem:{title:"An informal introduction to KWoC",permalink:"/informal-introduction-to-kwoc"}},l={authorsImageUrls:[void 0]},h=[{value:"What is Git?",id:"what-is-git",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"what-is-git",children:"What is Git?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/800/1*8xhLJt8Nlps8CDETPgO6lg.jpeg",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["From ",(0,s.jsx)(n.a,{href:"https://git-scm.com/",children:"Git\u2019s"})," official website:"]}),"\n",(0,s.jsxs)(n.p,{children:["Git is a ",(0,s.jsx)(n.a,{href:"https://git-scm.com/about/free-and-open-source",children:"free and open source"}),"\ndistributed version control system designed to handle everything from small to\nvery large projects with speed and efficiency."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"About Version Control"})}),"\n",(0,s.jsx)(n.p,{children:"What is version control, and why should you care? Version control is a system\nthat records changes to a file or set of files over time so that you can recall\nspecific versions later. Even though examples in most of the cases show software\nsource code as the files under version control, in reality any type of file on a\ncomputer can be placed under version control."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To install Git:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"sudo apt-get install git"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To check version:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git -- version"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For configuring:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git config -- global <keyword> \u201cData\u201d"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<keyword>"})," can be ",(0,s.jsx)(n.code,{children:"user.name"})," ,",(0,s.jsx)(n.code,{children:"user.email"}),", ",(0,s.jsx)(n.code,{children:"core.editor"})," etc."]}),"\n",(0,s.jsxs)(n.li,{children:["To display current saved configration type ",(0,s.jsx)(n.code,{children:"git config --list"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For help:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git help <verb>"})}),"\n",(0,s.jsxs)(n.p,{children:["eg: ",(0,s.jsx)(n.code,{children:"git help config "}),"for help regarding configration process"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Creating a local repository:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Simply cd into the directory you want to track and simply type ",(0,s.jsx)(n.code,{children:"git init"}),". This\nwill create a .git file in the directory with a basic skeleton without any\ncommits."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To check which files can be commited:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git status"})}),"\n",(0,s.jsx)(n.p,{children:"this will list the files that can be commited"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To ignore files create a .gitignore file using ",(0,s.jsx)(n.code,{children:"touch .gitignore"})]}),"\n",(0,s.jsx)(n.li,{children:"Open this using text editor and add names of files you want to ignore"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Moving files to staging area:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For adding files individually use \u2013",(0,s.jsx)(n.code,{children:"git add <filename>"})]}),"\n",(0,s.jsxs)(n.li,{children:["For adding all files at once use \u2013",(0,s.jsx)(n.code,{children:"git add -A"})]}),"\n",(0,s.jsxs)(n.li,{children:["To remove files from staging area use \u2013",(0,s.jsx)(n.code,{children:"git reset <filename>"}),"and to remove all\nsimply type ",(0,s.jsx)(n.code,{children:"git reset"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To commit the files:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git commit"})}),"\n",(0,s.jsxs)(n.p,{children:["but it is necessary to add messages with the commit to make sure what we did ;\nso for that we use ",(0,s.jsx)(n.code,{children:"-m"})," extension like ",(0,s.jsx)(n.code,{children:"git commit -m \u201cmessage\u201d"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/800/1*fwUZtFBXFvHwMwmAWlde5w.png",alt:""}),"\n",(0,s.jsx)("span",{class:"figcaption_hack",children:"Staging and committing Flowchart."})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To check the commit history:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git log"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cloning a repository from internet:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git clone <url> <location>"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To clone into current directory use ",(0,s.jsx)(n.code,{children:"."}),"in place of location."]}),"\n",(0,s.jsxs)(n.li,{children:["To check status of the cloned repository use ",(0,s.jsx)(n.code,{children:"git remote -v"})," This will give the\nlocation from where it is fetched."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"git branch -a"})," gives all the branches in the cloned repository."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Changing and submitting:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make changes to the file of the cloned repository.Now to see change made type\n",(0,s.jsx)(n.code,{children:"git diff <commit>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This will display the change made with respect to the ",(0,s.jsx)(n.code,{children:"<commit>"}),". By default if\n",(0,s.jsx)(n.code,{children:"<commit>"})," field is left empty , Git compares it with ",(0,s.jsx)(n.code,{children:"HEAD"})," i.e the last\ncommit."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Another feature or form of git diff is"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git diff --cached <commit>"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This shows the diff between your ",(0,s.jsx)(n.strong,{children:"staged changes"})," and the ",(0,s.jsx)(n.code,{children:"<commit>"}),". So, here\nit gives the diff between your index and the last commit."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"git diff <commit>"})," shows the diff between the ",(0,s.jsx)(n.strong,{children:"current working tree"})," and\nthe ",(0,s.jsx)(n.code,{children:"<commit>"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Now ",(0,s.jsx)(n.code,{children:"git status"})," will view the modified files ."]}),"\n",(0,s.jsxs)(n.li,{children:["Add the file to the staging area using ",(0,s.jsx)(n.code,{children:"git add -A."})]}),"\n",(0,s.jsx)(n.li,{children:"Commit these files with appropriate message ."}),"\n",(0,s.jsxs)(n.li,{children:["Now before pushing it back . We need to pull and check whether any other person\nmade a change in the branch since the last time type in ",(0,s.jsx)(n.code,{children:"git pull origin master"}),"\n( If on master branch else use branch name in place of master)."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"IMPORTANT NOTE:"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"git pull"})," is often confused with ",(0,s.jsx)(n.code,{children:"git fetch"})," .The basic difference is stated\nbelow."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"git fetch"})," really only downloads new data from a remote repository \u2014 but it\ndoesn\u2019t integrate any of this new data into your working files. Fetch is great\nfor getting a fresh view on all the things that happened in a remote\nrepository.",(0,s.jsx)("br",{})," Due to it\u2019s \u201charmless\u201d nature, you can rest assured: fetch will\nnever manipulate, destroy, or screw up anything.",(0,s.jsx)(n.code,{children:"git fetch"})," is also useful\nwhen we manually wish to merge or check and merge conflicts that arise whereas\n",(0,s.jsx)(n.code,{children:"git pull"}),"* *directly fetches and merges (refer branching for merge). It is\ntherefore more preferred to use ",(0,s.jsx)(n.code,{children:"git fetch"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"git pull"})," in contrast, is used with a different goal in mind: to update your\ncurrent HEAD branch with the latest changes from the remote server. This means\nthat pull not only downloads new data; it also directly ",(0,s.jsx)(n.strong,{children:"integrates"})," it into\nyour current working copy files."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now for finally pushing type in \u2013>"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git push origin master"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/800/1*lWS_YsYDgGNzwleoSK8jOg.png",alt:""}),"\n",(0,s.jsx)("span",{class:"figcaption_hack",children:"Basic process Flowchart."})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Branching:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/800/1*roh6Eb2dFSeQhM0Fgs0cng.png",alt:""}),"\n",(0,s.jsx)("span",{class:"figcaption_hack",children:"A typical image which represents blue dots as master and rest as side branches."})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To create a new branch use ",(0,s.jsx)(n.code,{children:"git branch <branchname>"})]}),"\n",(0,s.jsxs)(n.li,{children:["To check all the branches present use ",(0,s.jsx)(n.code,{children:"git branch"})]}),"\n",(0,s.jsxs)(n.li,{children:["To switch over branch use ",(0,s.jsx)(n.code,{children:"git checkout <branchname>"})]}),"\n",(0,s.jsxs)(n.li,{children:["To push a commited changes type in ",(0,s.jsx)(n.code,{children:"git push -u origin <branchname>"})]}),"\n",(0,s.jsxs)(n.li,{children:["To merge the current branch you are working on to master use ",(0,s.jsx)(n.code,{children:"git merge <branchname>"})]}),"\n",(0,s.jsxs)(n.li,{children:["To push the changes we simply use ",(0,s.jsx)(n.code,{children:"git push origin master"})]}),"\n",(0,s.jsxs)(n.li,{children:["To check it they are merged type in ",(0,s.jsx)(n.code,{children:"git branch --merged"})]}),"\n",(0,s.jsxs)(n.li,{children:["If the branch is successfully merged we can now delete the branch\u2013",(0,s.jsx)(n.code,{children:"git branch -d <branchname>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To switch to a previous version of the code:"})}),"\n",(0,s.jsxs)(n.p,{children:["We do ",(0,s.jsx)(n.code,{children:"git reset <mode> <SOME-COMMIT>"}),"(some commit is the commit number ) then\nGit will:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make your current branch (typically ",(0,s.jsx)(n.code,{children:"master"}),") back to point at ",(0,s.jsx)(n.code,{children:"<SOME-COMMIT>"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Then it will modify your working tree and the index (\u201cstaging area\u201d) according\nto the ",(0,s.jsx)(n.code,{children:"<mode>"})," selected."]}),"\n",(0,s.jsxs)(n.li,{children:["The mode must be one of the following (If ",(0,s.jsx)(n.code,{children:"<mode>"})," is left blank then by default\n",(0,s.jsx)(n.code,{children:"--mixed"})," is selected) \u2014"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--soft "}),"\u2014Does not touch the index file or the working tree at all (but resets\nthe head to",(0,s.jsx)(n.code,{children:" <SOME-COMMIT>"}),", just like all modes do). This leaves all your\nchanged files \u201cChanges to be committed\u201d, as ",(0,s.jsx)(n.em,{children:"git status"})," would put it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--mixed "}),"\u2014 Resets the index but not the working tree (i.e. the changed files\nare preserved but not marked for commit) and reports what has not been updated.\nThis is the default action."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--hard "}),"\u2014 Resets the index and working tree. Any changes to tracked files in\nthe working tree since ",(0,s.jsx)(n.code,{children:"<SOME-COMMIT>"})," are discarded."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Stashing"})}),"\n",(0,s.jsxs)(n.p,{children:["Often there is a condition where code is in a messy state and you don\u2019t want to\nwork any further . Also you can\u2019t commit this ",(0,s.jsx)(n.em,{children:"half-written code"}),". In such\nconditions function called ",(0,s.jsx)(n.code,{children:"git stash"})," is used."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type in ",(0,s.jsx)(n.code,{children:"git stash"})," this will push this code onto a stack while keeping the\nworking directory clean.Further use of this function again and again on the same\ncode will generate a stash stack."]}),"\n",(0,s.jsxs)(n.li,{children:["To display the stash stack use ",(0,s.jsx)(n.code,{children:"git stash list"})," .The list will be numbered as\n",(0,s.jsx)(n.code,{children:"stash@{0}"}),",",(0,s.jsx)(n.code,{children:"stash@{1}"})," \u2026.",(0,s.jsx)(n.code,{children:"stash@{n}"})," ."]}),"\n",(0,s.jsxs)(n.li,{children:["Finally when you decide to work again and want to apply the changes use ",(0,s.jsx)(n.code,{children:"git stash apply"})," . To apply any older stash from the stash stack use ",(0,s.jsx)(n.code,{children:"git stash apply stash@{n}"})," where n is the stash number."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For Reference regarding Git :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For practicing and learning git checkout \u2014\n",(0,s.jsx)(n.a,{href:"https://github.com/kossiitkgp/git-sandbox",children:"https://github.com/kossiitkgp/git-sandbox"})]}),"\n",(0,s.jsxs)(n.li,{children:["Basic git\n:",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=HVsySz-h9r4&t=464s",children:"https://www.youtube.com/watch?v=HVsySz-h9r4&t=464s"})]}),"\n",(0,s.jsxs)(n.li,{children:["Resolving a pull request:\n",(0,s.jsx)(n.a,{href:"https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/",children:"https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/"})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5710:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(758);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);