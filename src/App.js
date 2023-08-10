import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SignUp from './pages/auth/SignUp';
import NavBar from './components/navbar/NavBar';
import styles from './App.module.css';
import LoginForm from './pages/auth/LoginForm';
import ActorRegistration from './pages/actor/ActorRegistration';
import ProfilePage from './pages/actor/ActorPage';

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
