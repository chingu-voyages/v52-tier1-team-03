# This Document Covers The Basics of Git
### What is Git?
Git is a version control system. It helps developers manage and track changes to their code

### Git branching and merging:
Git allows you to create branches, which are separate copies of the code where you can work on features or fixes without affecting the main codebase. You can later merge these changes back into the main branch.
 
### How to clone a repository? 
git clone https://github.com/chingu-voyages/v52-tier1-team-03.git
We are going to clone our current repository. We are then going to cd into the folder.
 
### How to open a folder?
The code command requires that Visual Studio Code is installed and that the command-line tool is set up. 
You can enable it in VS Code under Command Palette > Shell Command: Install 'code' command in PATH.
We will be making edits :
Write this is my branch or whatever message you want to write

### Creating a branch:
git branch name
 
### How to get into your branch?
git checkout your-branch-name
 
### How to add changes? 
git add .
git commit -m “your message” 
git push origin your-branch-name
 
### How to go back to the main branch?
git checkout main

