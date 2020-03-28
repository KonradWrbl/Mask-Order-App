const functions = require('firebase-functions');
const app = require('express')();

const { getAllOrders, postOneOrder } = require('./handlers/orders')
const { signup, login } = require('./handlers/users')

const FBAuth = require('./util/fbAuth')

const { db } = require('./util/admin')

//Orders routes
app.get('/orders', getAllOrders)
app.post('/order', FBAuth, postOneOrder)

//Users routes
app.post('/signup', signup)
app.post('/login', login)

exports.api = functions.region('europe-west2').https.onRequest(app);

exports.createNotificationOnNewOrder = functions.region('europe-west2').firestore.document('/orders/{id}')
    .onCreate(snapshot => {
        return db.doc(`/orders/${snapshot.data().orderId}`).get()
            .then(doc => {
                if(doc.exists) {
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createdAt: new Date().toISOString(),
                        recipient: doc.data().userhandle,
                        sender: snapshot.data().userHandle,
                        read: false,
                        orderId: doc.id
                    })
                }
            })
            .catch(err => {
                console.error(err);
            })
    })