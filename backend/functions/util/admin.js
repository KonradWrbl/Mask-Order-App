const admin = require('firebase-admin')
const serviceAccount = require("../DBKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://maskorder-adadd.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };