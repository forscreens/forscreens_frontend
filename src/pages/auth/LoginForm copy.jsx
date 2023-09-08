// LoginForm.js
import React, { useState } from 'react';
import { loginUser } from '../../services/authService';
import { toast } from 'react-toastify';
import styles from './LoginForm.module.css'; // Import the CSS module for styling
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [authRequest, setAuthRequest] = useState({ username: '', password: '' });

  function createAuthRequest() {
    authRequest.username = email;
    authRequest.password = password;
    setAuthRequest({ ...authRequest });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login form submission logic here (integrate with Spring Boot REST service)
    // Example: Send login credentials to the backend using fetch or axios

    // validate username
    // validate password

    createAuthRequest();
    console.log(authRequest);

    loginUser(authRequest)
      .then((result) => {
        console.log(result);
        if (result != null) {
          navigate('/');
        }
        toast.success('You have logged in successfully!');
      })
      .catch((err) => {
        console.log('error : ' + err.message);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <form onSubmit={handleSubmit}>
          <h3 className={styles.loginBoxHeading}>Already a member? Log in here.</h3>
          <div className="form-group">
            <label htmlFor="loginFormEmail">Email</label>
            <input id="loginFormEmail" name="loginFormEmail" type="text" className={styles.input} placeholder="Email" aria-describedby="loginFormEmail-status" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <div className={styles.passwordInputGroup}>
              <input type={showPassword ? 'text' : 'password'} className={styles.input} placeholder="Password" name="password" data-testid="passwordInput" value={password} onChange={handlePasswordChange} />
              <span className={styles.showPasswordButton} onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.eyeIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 9L7 4m0 0L2 9m5-5l5 5m5 5l5-5m-5 5a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.eyeIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 9L7 4m0 0L2 9m5-5l5 5m5 5l5-5m-5 5a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                )}
              </span>
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <a href="/accounts/password/reset/">Forgot your password?</a>
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
      <div className={`col-8 ${styles.joinBox}`}>
        <h3 className={styles.joinBoxHeading}>Join ForScreens and start applying for auditions</h3>
        <p>Take your acting or voiceover career to the next level</p>
        <ul>
          <li>Access &amp; apply to thousands of up-to-the-minute casting notices!</li>
          <li>Learn how to hone your craft.</li>
          <li>Access our proprietary database of agents and casting directors.</li>
        </ul>
        <div className={styles.joinButtonContainer}>
          <a href="/subscribe/" className={`btn-primary-md ${styles.joinButton}`}>
            Join ForScreens
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
