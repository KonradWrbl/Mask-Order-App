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
                    userHandle: doc.data.userHandle,
                    createdAt: doc.data().createdAt,

                    name: doc.data().name,
                    surname: doc.data().surname,
                    phone: doc.data().phone,

                    visors: doc.data().visors,
                    frames: doc.data().frames,
                    forms: doc.data().forms,
                    PETFilament: doc.data().PETFilament,
                    PETFoil: doc.data().PETFoil,
                    unit: doc.data().unit,
                    unitAdress: doc.data().unitAdress,
                    contactName: doc.data().contactName,
                    contactSurname: doc.data().contactSurname,
                    contactPhone: doc.data().contactPhone,
                    done: doc.data().done
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
        createdAt: new Date().toUTCString(),
        userHandle: req.user.handle,
        done: false,

        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,

        visors: req.body.visors,
        frames: req.body.frames,
        forms: req.body.forms,
        PETFilament: req.body.PETFilament,
        PETFoil: req.body.PETFoil,
        unit: req.body.unit,
        unitAdress: req.body.unitAdress,
        contactName: req.body.contactName,
        contactSurname: req.body.contactSurname,
        contactPhone: req.body.contactPhone,
    }

    db.collection('orders')
        .add(newOrder)
        .then(doc => {
            const resOrder = newOrder;
            resOrder.orderId = doc.id;
            res.json({resOrder})
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong'})
            console.error(err)
        })
}

exports.setOrderStatus = (req, res) => {
  let id = req.body.id;

  db.doc(`/orders/${id}`)
    .update({done: true})
    .then(() => {
      return res.json({ message: 'Status update succesfully' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

        // name: req.user.name,
        // surname: req.user.surname,
        // phone: req.user.phone,
        // email: req.user.email,

        // PETFilament: req.body.PETFilament,
        // PETFoil: req.body.PETFoil,

        // unit: req.body.unit,
        // unitAdress: req.body.unitAdress,

        // contactName: req.body.contactName,
        // contactSurname: req.body.contactSurname,
        // contactPhone: req.body.contactPhone,