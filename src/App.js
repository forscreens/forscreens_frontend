import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActorRegistration from './pages/ActorRegistration';
import NavBar from './components/NavBar';
import styles from './App.module.css';

const App = () => {
  console.log('Rendering App.js');

  // When deploying to GitHub Pages, you should set the basename to your repository name.
  // This is because GitHub Pages serves your app from a subdirectory that matches your repository name.
  // So your app's root URL would be 'username.github.io/repository-name'.
  // Therefore, the basename should be set to '/repository-name'.

  // However, when you're using a custom domain, your app's root URL will be the domain root ('/').
  // In this case, you should change the basename back to '/' or remove the basename prop from the Router entirely.

  // Make sure to also update the 'homepage' field in your package.json file to match your app's root URL.

  return (
    <div className={styles.appContainer}>
      <Router basename="/forscreens_frontend">
        <NavBar/>
        <Routes>
          <Route path="/register" element={<ActorRegistration />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
