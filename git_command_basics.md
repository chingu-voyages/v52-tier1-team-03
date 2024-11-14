# Instructions to set up Git

### Setting up
1. Open VS Code and go to your terminal 
2. Go to or create your designated folder where the cloned repo files will go.
   You can also create one in the terminal by typing 
   ```
   mkdir your-folder-name
   ```
3. Go to your VS code terminal and go into that path or “cd” into it by typing `cd name-of-your-dir`
4. In your Github browser tab - click on the `<> Code` dropdown button & copy the repo url or use ``` https://github.com/chingu-voyages/v52-tier1-team-03.git ```
5. In your VS code terminal type 
``` git clone https://github.com/chingu-voyages/v52-tier1-team-03.git ``` 
This should clone the repo and it should appear in your designated folder if your /path is correct. 

### Creating Your Branch
1. After that is set up - go back to the terminal and type 
``` git branch your-name ``` to create a branch
2. Go into that branch by running command ``` git checkout your-branch-name ```
3. To check `which branch` you are currently in run ```` git branch ``` and you’ll see a little asterix (*) near the branch you are located in. 
4. Lastly to run and always be sure you are/have the latest commits and changes run 
``` git pull ```.

### How To Make Your Branch Appear on Github
1. Go back to your VS code cloned repo folders and can create a test document - it could be something as simple as `practice-git.txt` and then add some text like `hello, it’s me!`.
2. Once that’s created go back to your terminal and type in 
``` git status ``` and you should see the newest changes show up in `red`.
3. Then type in ``` git add .``` to add `newest` changes
4. If you type in `git status` again you’ll notice all the changes stated were once `red` are now `green`.
5. Now type ``` git commit -m "your message describing your latest change" ```
6. (optional and good practice) I like to double check and make sure everything is running smoothly so I’ll run `git status` again and it should say something like `working tree clean` which means everything was committed correctly. 
7. Run ``` git push ``` to push your newest changes up to your github branch. You’ll see some code pop up, and again (completely optional) but I usually run `git status` one last time - just to make sure everything has been run smoothly - before running “cls” to clear the terminal.

### Locate Your Branch on Github
In order to see your branch appear on your Github repo
1. Click on the `Main` button to open the dropdown and then select `View All Branches`
2. You probably *won’t see it* listed on there right away so hit `refresh` and it should pop up under `"your-name branch"`.

Great job!You’ve successfully created an independent branch on your Github repo to commit your work.
~ Happy coding!
