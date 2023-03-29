const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import {getAuth ,GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDt1c41mejQJDzYpi4fTJQv7EqQw7LUKhs",
    authDomain: "sortedstudy.firebaseapp.com",
    projectId: "sortedstudy",
    storageBucket: "sortedstudy.appspot.com",
    messagingSenderId: "1078091837618",
    appId: "1:1078091837618:web:fe68e849bed9c25935d9ab"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);


  login.addEventListener('click',(e) => {
   // signInWithRedirect(auth, provider);


   // redirect the result
  //  getRedirectResult(auth)
  //    .then((result) => {
  //      // This gives you a Google Access Token. You can use it to access Google APIs.
  //      const credential = GoogleAuthProvider.credentialFromResult(result);
  //      const token = credential.accessToken;

  //      // The signed-in user info.
  //      const user = result.user;

  //    }).catch((error) => {
  //      // Handle Errors here.
  //      const errorCode = error.code;
  //      const errorMessage = error.message;
  //      // The email of the user's account used.
  //      const email = error.email;
  //      // The AuthCredential type that was used.
  //      const credential = GoogleAuthProvider.credentialFromError(error);
  //      // ...
       
  // });


// sign in with popup tab
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const checkcurrent = auth.currentUser;
    console.log(user.displayName);
    console.log(user.email);
    console.log(user.photoURL);
    console.log(user.emailVerified);
    if(checkcurrent){
        localStorage.setItem('name' , user.displayName)
        localStorage.setItem('email' , user.email)
        localStorage.setItem('photourl' , user.photoURL)
        localStorage.setItem('emailVerified' ,user.emailVerified)
      window.location.replace('https://sortedstudynew.github.io/SortedStudy/index1.html');
    }
    else{
      window.location.replace('https://sortedstudynew.github.io/SortedStudy/login.html');
    }
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...

    alert(errorMessage);
  });
 });

//   signOut.addEventListener('click',(e) => {

//    signOut(auth).then(() => {
//     // Sign-out successful.
//    }).catch((error) => {
//     // An error happened.
//    });

//   });
