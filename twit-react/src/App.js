import Login from './Login';
import Logout from './Logout';
import React, { useState } from 'react';
import Main from './Main';
import Signup from './Signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [signup, setSignup] = useState(false);

  const getLoggedIn = (loggedIn, userEmail) => {
    setLoggedIn(loggedIn);
    setUserEmail(userEmail);
  };

  const getSignup = (signup) => {
    setSignup(signup);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Logout getLoggedIn={getLoggedIn} userEmail={userEmail} />
      ) : (
        <Login getLoggedIn={getLoggedIn} getSignup={getSignup} />
      )}
      {signup ? <Signup /> : <Main loggedIn={loggedIn} />}
    </div>
  );
}

export default App;
