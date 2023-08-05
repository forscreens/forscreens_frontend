// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';  // import the SignUp component here
import NavBar from './components/NavBar';
import styles from './App.module.css';
import LoginForm from './components/LoginForm';
import ActorRegistration from './components/ActorRegistration'; 

const App = () => {
  console.log('Rendering App.js');

  return (
    <div className={styles.appContainer}>
      <Router basename="/forscreens_frontend">
        <NavBar />
        <Routes>
          <Route path="/register" element={<SignUp />} />  
          <Route path="/login" element={<LoginForm />} /> {/* Use 'element' prop here */}
          <Route path="/register1" element={<ActorRegistration />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
