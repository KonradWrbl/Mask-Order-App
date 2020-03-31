const { db } = require('../util/admin')
const firebase = require('firebase')
const config = require('../util/config')
const cors = require('cors')({origin: true});

firebase.initializeApp(config)

exports.signup = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')

    const newUser = {
        handle: req.body.handle,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        canAddUser: false,
        canCloseOrder: false,
        createdAt: new Date().toISOString()
    }

    let token, userId;
    db.doc(`/users/${newUser.handle}`).get()
        .then(doc => {
            if (doc.exists) {
                return res.status(400).json({ handle: 'this handle is already taken' })
            } else {
                return firebase
                    .auth()
                    .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken()
        })
        .then(IdToken => {
            token = IdToken;
            const userCredentials = {
                handle: newUser.handle,
                name: newUser.name,
                surname: newUser.surname,
                phone: newUser.phone,
                email: newUser.email,
                canAddUser: false,
                canCloseOrder: false,
                createdAt: new Date().toISOString(),
                userId
            }
            return db.doc(`/users/${newUser.handle}`).set(userCredentials);
        })
        .then(() => {
            return res.status(201).json({ token })
        })
        .catch(err => {
            console.error(err)
            if(err.code === 'auth/email-already-in-use') {
                return res.status(400).json({ email: 'Email is already used'});
            } else {
                return res.status(500).json({ general: 'Something went wrong, please try again' })
            }
        })
}

exports.login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
        return data.user.getIdToken();
    })
    .then(token => {
        return res.json({ token })
    })
    .catch(err => {
        console.error(err);
        if(err.code = 'auth/wrong-password') {
            return res.status(403).json({ general: 'Wrong credentials, please try again' })
        } else return res.status(500).json({ error: err.code });
    })

}


exports.getAuthenticatedUser = (req, res) => {
    let userData = {};
    db.doc(`/users/${req.user.handle}`).get()
        .then(doc => {
            if(doc.exists) {
                userData.credentails = doc.data().name;
                return db.collection('orders').where('userHandle', '==', req.user.handle).get();
            }
        })
        .then(data =>{
            userData.orders = [];
            data.forEach(doc => {
                userData.orders.push(doc.data());
            })
            return res.json(userData)
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.getAuthenticatedAccountType = (req, res) => {
    let type;
    db.doc(`/users/${req.user.handle}`).get()
        .then(doc => {
            if (doc.exists) {
                type = doc.data().canAddUser
                return res.json(type)
            }
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.getUserOrders = (req, res) => {
    let orders = [];
    db.doc(`/users/${req.user.handle}`).get()
        .then(doc => {
            if(doc.exists) {
                return db
                    .collection('orders')
                    .where('userHandle', '==', req.user.handle)
                    .get();
            }
        })
        .then(data => {
            data.forEach(doc => {
                orders.push(doc.data())
            })
            return res.json(orders)
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}