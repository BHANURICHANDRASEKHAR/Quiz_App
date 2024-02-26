const admin = require('firebase-admin');

// Initialize Firebase Admin with your service account key
const serviceAccount = require('./database.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://quiz-app-d25cf-default-rtdb.firebaseio.com',
});

const databaseRef = admin.database() // Corrected path

module.exports=databaseRef;
