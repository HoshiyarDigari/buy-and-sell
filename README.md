# BuyAndSell
START LEARNING

Here is my summary:
first i needed to check my git config to confirm my email and username was correct. Git was already installed on my system and when i created angular project , git was already initialized on my local system.  I checked out to learning branch and made a few changes to readme.md file .  when i pushed to origin, i got error stating origin is not known and that there was no such repo on github. Then I created a repo on github. used command git add remote origin url to add this origin.
Then I was able to push the learning branch to the repo. I then noticed that githubs default branch was named main while my local has master as default that I checked out to create learning branch. I changed the name of local branch from master to main. I then ran into errors of github rejecting the push from local. I wanted to create a pull request on githhub but the interface wont show the option to pull request to merge learning to main branch.  I tried suggestion around git pull but in the end the unrelated histories was the one that worked. 



here is AI CHAT SUMMARY: 

Absolutely, let's delve into the challenges you faced and how you overcame them:

Challenge: Unknown Git Configuration:

Solution: Checked Git configuration to ensure correct username and email were set.

git config --global user.name
git config --global user.email



Challenge: Unfamiliarity with Angular and Git:

Solution: Followed a step-by-step guide to create an Angular project, initialize Git, and make changes.

ng new my-angular-project
cd my-angular-project
git init


Challenge: Branch Creation and Push:

Solution: Created a new branch (learning), made changes, and pushed to GitHub.

git checkout -b learning
git add .
git commit -m "Add changes to readme"
git push origin learning


Challenge: GitHub Repository Setup:

Solution: Created a GitHub repository and connected it as the remote origin.
git remote add origin https://github.com/your-username/your-repo.git


Challenge: Default Branch Name Change:

Solution: Changed the default branch name from master to main.

git branch -m master main

Challenge: Push Rejection due to Unrelated Histories:

Solution: Faced rejection while pushing to GitHub due to unrelated histories. Used the --allow-unrelated-histories flag to force the push.

git push -u origin main --allow-unrelated-histories

Challenge: Finalizing the Push:

Solution: Pushed the final changes to the main branch.
git push origin main

These challenges reflect the learning process, including Git configuration checks, working with branches, setting up a remote repository, handling default branch name changes, dealing with push rejections, and deciding on pull requests. Overcoming each challenge contributes to a deeper understanding of version control and project management. Well done on navigating these hurdles!





