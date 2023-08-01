# Deployment Instructions

## Deploying to GitHub Pages

When deploying to GitHub Pages, you should update the `basename` prop in the `Router` component to match your repository name. This is because GitHub Pages serves your app from a subdirectory that matches your repository name.

In `App.js`:

```jsx
<Router basename="/repository-name">```

You should also update the homepage field in your package.json file to match your app's root URL on GitHub Pages.
"homepage": "http://username.github.io/repository-name",
# Using a Custom Domain
When you're using a custom domain, your app's root URL will be the domain root ('/'). In this case, you should change the basename back to '/' or remove the basename prop from the Router entirely.

In App.js:
<Router basename="/">

You should also update the homepage field in your package.json file to match your custom domain.
"homepage": "https://customdomain.com",

Remember to replace username, repository-name, and customdomain.com with your actual GitHub username, repository name, and custom domain.
