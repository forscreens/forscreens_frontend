import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import LoginForm from './components/LoginForm';
import ActorRegistration from './components/ActorRegistration';
import ProfilePage from './components/ActorPage';

const App = () => {
  console.log('Rendering App3333.js');

  return (
    <div className={styles.appContainer}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register1" element={<ActorRegistration />} />
          <Route path="/actorpage" element={<ProfilePage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
