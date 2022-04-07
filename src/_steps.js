/* 
Steps to use Firebase

1. Create a firebase project on console.firebase.google.com
2. npm install firebase
3. Register web app in firebase
4. Copy and paste firebase init with config from firebase sattings into firebase.init.js to initialize firebase
5. Export default app from firebase.init.js
6. call getAuth from firebase/auth and keep in a variable const auth = getAuth(app);
7. Import app firebase init.js to app.js and pass it as parameter of getAuth()
8. Enable any sign in methods such as google authentication.
9. Create google provider calling GoogleAuthProvider from 'firebase/auth'. GoogleAuthProvider is a class constructor so it can not be called without 'new';
10. Call SignInWithPopup inside a event handler and pass auth and provider as its parameter
11. then add .then(if succes) .catch(if error) 

12. if need to sign out a user call signOut passing parameter auth. 
*/