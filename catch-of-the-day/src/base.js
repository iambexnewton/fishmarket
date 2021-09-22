import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDm9yMJgCUMa8ZgQtQPTs5VpqrTqLmYs0A',
  authDomain: 'catch-of-the-day-bex-889ce.firebaseapp.com',
  databaseURL:
    'https://catch-of-the-day-bex-889ce-default-rtdb.europe-west1.firebasedatabase.app',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
