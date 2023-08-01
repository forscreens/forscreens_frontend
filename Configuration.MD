# Basic Git Workflow

    Local Development: Your local development should be done in a separate branch, not directly on the main or master branch. This way, the master branch always contains stable, deployable code. Let's call this branch dev.

    Committing Changes: As you make changes in the dev branch, regularly commit these changes. A commit is like a save point in your project. It's a snapshot of your code at a particular point in time.

    Pushing Changes: After you've made a series of commits on your dev branch, you should push these changes to the remote dev branch on GitHub. This backs up your work and allows others to see your progress.

    Pull Requests: When you're ready to merge the dev branch into master, you'll create a pull request on GitHub. This allows you (or others) to review the changes and ensure everything is okay before the merge.

    Merging: If the pull request is approved, you merge the dev branch into master. This takes all the changes from dev and applies them to master.

    Deploying: Now that your master branch has the latest code, you can build your React application and deploy it. If you're using GitHub Pages, this typically involves pushing to the gh-pages branch.

# Handling Merge Conflicts

Sometimes, when you're trying to merge two branches, Git can't automatically merge them. This usually happens when the same part of the same file has been modified in both branches. Git will not decide for you which change to keep; you have to resolve this conflict manually.

   Here's a basic process to handle merge conflicts:

## Identify the Conflict: 
   Git will tell you which files have conflicts that you need to resolve.

## Open the Files: 
    Open these files in your code editor. You'll see the conflicting changes marked like this:

    ```

    <<<<<<< HEAD
    // Changes from the branch you're merging into
    =======
    // Changes from the branch you're merging from
    >>>>>>> branch-name
    ```
## Resolve the Conflict: 
    Choose which changes to keep. You may decide to keep the changes from one branch, the other, or make a new change that combines both. Delete the conflict markers and the changes you don't want to keep.

## Commit the Resolution: 
    After you've resolved all conflicts in a file, save the file. Stage the changes and commit the file. This commit serves as a record that the conflict has been resolved.

# Deploying to GitHub Pages

When deploying to GitHub Pages, you typically use the gh-pages branch. The process is as follows:

## Create a Production Build: 
    Run npm run build to create a production-ready build of your React application. This command creates a build folder in your project directory, containing the static files for your app.

## Deploy: 
    If you're using the gh-pages package, you can simply run npm run deploy. This command pushes the contents of the build folder to the gh-pages branch on your GitHub repository.

Remember, always keep your master branch clean and stable. All development should happen in separate branches, which are then merged into master when the features are complete and tested. The gh-pages branch is used exclusively for deployment and should not contain any source code.

# Connect to the dev Branch
## Clone the Repository: 
    If you haven't already done so, clone the GitHub repository to your local machine. You can do this with the git clone command in the terminal or via the Git: Clone command in the Command Palette (Ctrl+Shift+P to open the Command Palette) in Visual Studio Code.

## Switch to the dev Branch: 
    If the dev branch already exists in your remote repository, you can switch to it using the Git: Checkout to... command in the Command Palette. Type dev and press Enter.

## Create the dev Branch: 
    If the dev branch doesn't exist yet, you can create it using the Git: Create Branch... command in the Command Palette. Type dev for the branch name and press Enter.

# Merge from dev to master
## Switch to the master Branch: 
Use the Git: Checkout to... command in the Command Palette to switch to the master branch.

## Pull the Latest Changes: 
Before you merge, make sure your master branch is up to date with the remote repository. Use the Git: Pull command in the Command Palette to pull the latest changes.

## Merge the dev Branch: 
Use the Git: Merge Branch... command in the Command Palette. Type dev and press Enter. This will merge the changes from the dev branch into the master branch.

## Handle Merge Conflicts: 
If there are any merge conflicts, resolve them as described in the previous section.

## Push the Changes: 
After the merge is complete, use the Git: Push command in the Command Palette to push your changes to the remote master branch.    

# Switch Between Branches
You can switch between branches using the Git: Checkout to... command in the Command Palette. Type the name of the branch you want to switch to and press Enter.

Remember, the master branch should contain stable, deployable code. All development should happen in the dev branch or other feature branches. The gh-pages branch is used exclusively for deployment and should not contain any source code.

After making changes in the dev branch, merge them into master and then deploy from master to gh-pages.

To deploy the build of your React application from the master branch to the gh-pages branch, you can use the gh-pages npm package. Here are the steps:

    Install the gh-pages package: If you haven't already done so, add gh-pages as a devDependency in your project by running the following command in your terminal:

    bash

npm install --save-dev gh-pages

Add deploy scripts to package.json: In your package.json file, add the following scripts:

json

"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  // ...
}

The predeploy script runs automatically before the deploy script. It builds your React application and generates the static files in the build directory.

The deploy script uses the gh-pages package to create a gh-pages branch (if it doesn't already exist), removes the old files from it, adds the new files from the build directory to the gh-pages branch, and then pushes the gh-pages branch to the remote repository.

Run the deploy script: To create a production build of your React application and deploy it to the gh-pages branch, run the following command in your terminal:

bash

    npm run deploy

This process is automated, so you don't need to manually handle the files or switch branches. The npm run deploy command takes care of everything for you.

Please note that the deployment won't be successful if there are any uncommitted changes in your working directory. Make sure to commit all changes before running npm run deploy.

Also, remember to replace master with main or the name of your default branch if your repository setup is different.

# How will this pull data from master branch since I will be working on dev branch ?

In this setup, you're developing your application on the dev branch and merging your changes into the master branch when they're ready. The gh-pages branch is being used exclusively for deployment.

When you run npm run deploy, it doesn't matter which branch you're currently on. The predeploy script (which is npm run build) generates a production-ready build of your application based on your current code. This build is then deployed to the gh-pages branch by the gh-pages package.

However, to ensure that you're deploying the latest stable version of your app, you should switch to the master branch and pull the latest changes before running npm run deploy. Here's a step-by-step guide:

    Switch to the master branch: You can use the command git checkout master in your terminal to switch to the master branch.

    Pull the latest changes: Use the command git pull origin master to make sure your local master branch is up to date with the remote repository.

    Deploy your app: Now you can run npm run deploy to build your app and deploy it to the gh-pages branch.

Remember, the master branch should always contain the latest stable version of your app. All development should happen on the dev branch or other feature branches, and these changes should be merged into master only when they're tested and ready for deployment.