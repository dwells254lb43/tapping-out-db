const db = require('../db');
const Bottle = db.Bottle;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('we hit the endpoint!');
    const { name } = req.body;
    const bottle = {
        name: name,
    }

    Bottle.create(bottle).then((data) => { res.send(data) });

};