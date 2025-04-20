import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB1eioi4p4GXefG2VJ29WYZNEZyQZm1MZw',
  authDomain: 'myasd-71f9f.firebaseapp.com',
  databaseURL: 'https://myasd-71f9f.firebaseio.com',
  projectId: 'myasd-71f9f',
  storageBucket: 'myasd-71f9f.appspot.com',
  messagingSenderId: '257506663607',
  appId: '1:257506663607:web:c91f6c7acdf69a86e70132',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;

// var app = firebase.initializeApp({
// 	apiKey: '<your-api-key>',
// 	authDomain: '<your-auth-domain>',
// 	databaseURL: '<your-database-url>',
// 	projectId: '<your-cloud-firestore-project>',
// 	storageBucket: '<your-storage-bucket>',
// 	messagingSenderId: '<your-sender-id>'
// });
