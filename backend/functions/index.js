const functions = require('firebase-functions');
const app = require('express')();

const { getAllOrders, postOneOrder } = require('./handlers/orders')
const { signup, login } = require('./handlers/users')

const FBAuth = require('./util/fbAuth')

//Orders routes
app.get('/orders', getAllOrders)
app.post('/order', FBAuth, postOneOrder)

//Users routes
app.post('/signup', signup)
app.post('/login', login)

exports.api = functions.region('europe-west2').https.onRequest(app);