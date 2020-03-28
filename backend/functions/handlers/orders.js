const { db }= require('../util/admin')

exports.getAllOrders = (req, res) => {
    db.collection('orders')
        .orderBy('createdAt', 'desc')
        .get()
        .then(data => {
            let orders = [];
            data.forEach(doc => {
                orders.push({
                    orderId: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data.userHandle,
                    createdAt: doc.data().createdAt
                });
            });
            return res.json(orders);
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: err.code })
        })
}

exports.postOneOrder = (req, res) =>{
    const newOrder = {
        body: req.body.body,
        createdAt: new Date().toISOString(),
        userHandle: req.user.handle
    }

    db.collection('orders')
        .add(newOrder)
        .then(doc => {
            res.json({ message: `document ${doc.id} created duccesfully` })
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong'})
            console.error(err)
        })
}