
Project: Full stack development

This project is to help me learn to use tools and processes

technical topics: 
Angular Frontend
working with git


Task:
Build homepage with listings for a buy-and-sell site.

    - /listings page lists all the listings for things people want to sell.

        1. Create a component for listings page 
            ng generate component listings-page
        2. Create route for the listings page to display only on /listings route
            update app routing module ts file to add a path. The root path don't start with /
            { path: 'listings', component: ListingsPageComponent, pathMatch: 'full'}
            The pathMatch full means it will match only on /listings and not on longer paths
        3. Create fake listings data 
        4. Populate the listings page with fake data
        5. Clicking on each listings routes to the listings/id path
        note: 
        see issue with modheader extension inserting an extra div. I updated global styles sheet to style the div's and I saw one extra div with background color. Checked with Omor and he found that modHeader was inserting an extra div. The issue was not seen in safari where that extension didn't exist.
        Also shortcut for turning lines into comments command + /
    - /listings/{id}  page will show details of a specific listing with that parameter.
        1. generate new component ng generate component listing-details-page
        2. create a back button to go back to the listings page
        3. create a contact seller button to navigate to contact-seller page.
        4. update the app-routing.module.ts file with the route for the listing details page and to route to listings page by default
        {{ path:'', redirectTo: '/listings', pathMatch:'full'},
        { path: 'listings/:id', component: ListingDetailsPageComponent}
        
        5. added some styling for the buttons
        6. List the details of the listing on the listing-details page.
        7. I got the property not defined error. Fix is to tell angular that the listing is optional at compile time and it will be defined in runtime. listing? : Listing;. The ? suffix makes the variable optional.

We will use fake data but learn the angular code that will allow us to pull data from databases.

    - Create types.ts file to create a type of listing object that has attributes id , name, description and price.
    - Create fake-data.ts that will contain the local data to use.



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




