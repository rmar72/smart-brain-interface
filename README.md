# smart-brain-interface
#### Front End App:
- HTML5, CSS3, React + ES6

<img src="https://github.com/rmar72/smart-brain-interface/blob/master/static/media/sb1.PNG" />

<img src="https://github.com/rmar72/smart-brain-interface/blob/master/static/media/sb2.PNG" />

note to self: master branch is no longer needed, site hosted on gh-pages branch, & origin develop branch is now up to date with code that got lost in the master branch(ran command " react build ", wrong place to add code). However, my develop branch reflects the same code as master, ...?! before didnt know why but obviously because I also messed it up.

so what I did was 
 - git subtree push --prefix build origin gh-pages

2) now good for, git push origin develop
^hmm idk anymore bc I think I gotta find the closest branch with a regular development react app directory structure and take my loss redo what needs to be done. Then I'll be able to make a new clean dev branch and this time have a clear separation of concern between dev & prod environments. Nevertheless will I have to use gh-pages branch to hold the output of " react build ".
