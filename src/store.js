import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyBdFynj4QxF4TeDLidk4xf_28gwIFqUw3g",
  authDomain: "reactclientpanel-6ed7c.firebaseapp.com",
  databaseURL: "https://reactclientpanel-6ed7c.firebaseio.com",
  projectId: "reactclientpanel-6ed7c",
  storageBucket: "reactclientpanel-6ed7c.appspot.com",
  messagingSenderId: "71245515954"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//init firebase instance
firebase.initializeApp(firebaseConfig);

//Init firestore
//const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

//create initial state
const initialState = {};

//create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
