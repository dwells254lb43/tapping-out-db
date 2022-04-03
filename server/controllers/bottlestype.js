const db = require('../db');
const BottleType = db.BottleType;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('we hit the endpoint!');
    const { name } = req.body;
    const bottleType = {
        alcoholType: name,
    }

    BottleType.create(bottleType).then((data) => { res.send(data) });

};