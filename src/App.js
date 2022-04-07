import './App.css';
import { getAuth, getRedirectResult, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result);
        setUser(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }

  return (
    <div className="App">
      {
        user.email ? <button onClick={handleSignOut} style={{ margin: '20px 0' }}>Sign Out</button> :
          <>
            <button onClick={handleGoogleSignIn} style={{ margin: '20px 5px' }}>Google Sign In</button>
            <button onClick={handleGithubSignIn} style={{ margin: '20px 5px' }}>Github Sign In</button>
          </>

      }

      <div>
        <img src={user.photoURL} alt="" />
        <h4>{user.displayName}</h4>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default App;
