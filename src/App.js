import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActorRegistration from './pages/ActorRegistration';
import NavBar from './components/NavBar';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Router>
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
