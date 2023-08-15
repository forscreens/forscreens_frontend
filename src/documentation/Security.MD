
# ReactJS User Authentication using REST API

## 1. Calling the Login API from a ReactJS Login Page

First, create a simple Login form that captures the user's credentials. When the form is submitted, make an API call to authenticate the user.

```jsx
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        username,
        password,
      });
      // Save the token somewhere (e.g., local storage, context, Redux store)
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

## 2. Maintaining Login Session

For maintaining the user session, store the authentication token (usually a JWT) in the local storage or a cookie. This token should be sent with every subsequent request to authenticate the user.

## 3. Protecting Routes

To prevent unauthenticated users from accessing certain routes, use Route guards. Here's a simple implementation using React Router:

```jsx
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
```

Use this `ProtectedRoute` component instead of the regular `Route` component for routes you wish to protect.

## 4. Changing Navbar Content Based on Authentication Status

You can conditionally render content in your Navbar based on the authentication status.

```jsx
function Navbar() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <nav>
      {isAuthenticated ? (
        <>
          <a href="/profile">Profile</a>
          <a href="/logout">Logout</a>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
}
```

## 5. Fetching Logged-in User Data

After logging in, you can make an API call to fetch the logged-in user's data. Store this data in a global state (like Context or Redux) so you can access it across different components.

```jsx
import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get("/api/me");
        setUser(response.data);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
}
```

In your components, use the `useUser` hook to access the logged-in user's data:

```jsx
function UserProfile() {
  const user = useUser();
  return <div>{user.name}</div>;
}
```


## Maintaining User Sessions in ReactJS

In web development, a session refers to a series of interactions between the user and the web application, which span a certain period of time. In the context of user authentication, maintaining a session means keeping the user authenticated across various pages and actions until they log out or the session expires.

### 1. What is a Session?

When a user logs into a web application, a session is started. The server can remember this session until the user logs out or until the session expires. This helps in giving users a seamless experience; they don't have to log in again and again for every single page or action.

### 2. Browser Storage Options:

There are a few methods to store session information on the client-side:

- **Local Storage:** Key-value storage that persists until explicitly deleted. It has no expiration time.
- **Session Storage:** Similar to local storage but limited to a session. Data is cleared when the page's session ends.
- **Cookies:** Can store small amounts of data and can be set with expiration times.

### 3. Using Local Storage for Session Management:

In a React app, upon successful authentication, you can store user information or a session token in local storage.

```javascript
// Setting a user token into local storage upon successful login
const userToken = "YOUR_USER_TOKEN_FROM_SERVER";
localStorage.setItem("token", userToken);
```

To retrieve the token:

```javascript
const token = localStorage.getItem("token");
```

To remove the token (e.g., when logging out):

```javascript
localStorage.removeItem("token");
```

### 4. React Context API for Session Management:

For sharing session data across components, React's Context API is a great tool. 

Create a context:

```javascript
import React from 'react';

const AuthContext = React.createContext();

export default AuthContext;
```

Use a provider to wrap the app or part of the app where the session data should be available:

```javascript
import AuthContext from './AuthContext';

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null
  });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {/* Rest of your components */}
    </AuthContext.Provider>
  );
}
```

In any child component, you can now access the session data:

```javascript
import React, { useContext } from 'react';
import AuthContext from './AuthContext';

function SomeComponent() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <div>
      {auth.isAuthenticated ? "Logged In" : "Not Logged In"}
    </div>
  );
}
```

### 5. Route Protection:

Using libraries like `react-router-dom`, you can protect certain routes to ensure they're only accessible when a user is authenticated.

```javascript
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const [auth] = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
```

### 6. Changing Navbar based on Authentication:

Based on the authentication state, you can conditionally render different navbar contents:

```javascript
function Navbar() {
  const [auth] = useContext(AuthContext);

  return (
    <nav>
      {/* Other Nav Items */}
      {auth.isAuthenticated ? (
        <button onClick={() => {/* handle logout logic */}}>Logout</button>
      ) : (
        <button onClick={() => {/* handle login logic */}}>Login</button>
      )}
    </nav>
  );
}
```

### Summary:

Maintaining user sessions in React involves using browser storage options and possibly the Context API to manage and share session data across components. With the right combination of tools and patterns, you can ensure a smooth user experience that securely maintains their session across interactions.

