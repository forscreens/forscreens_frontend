import React from 'react';
import 'normalize.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SignUp from './pages/auth/SignUp';
import NavBar from './components/navbar/NavBar';
import styles from './App.module.css';
import LoginForm from './pages/auth/LoginForm';
import ActorRegistration from './pages/actor/ActorRegistration';
import ProfilePage from './pages/actor/ActorPage';
import DashboardMain from './pages/dashboard/DashboardMain';
import Footer from './components/footer/footer.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <ToastContainer />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register1" element={<ActorRegistration />} />
          <Route path="/actorpage" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardMain />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
