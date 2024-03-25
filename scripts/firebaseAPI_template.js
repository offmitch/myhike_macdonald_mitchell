//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCp8iFmFiWy6LpvJU5dfAlhG0VabRRbyPs",
  authDomain: "comp1800-demo-3f4ae.firebaseapp.com",
  projectId: "comp1800-demo-3f4ae",
  storageBucket: "comp1800-demo-3f4ae.appspot.com",
  messagingSenderId: "767567989999",
  appId: "1:767567989999:web:9aa186118853e59a229f1a",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
