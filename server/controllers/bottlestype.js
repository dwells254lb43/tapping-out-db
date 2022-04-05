const db = require('../db');
const BottleType = db.BottleType;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('we hit the bottletype endpoint!');
    const { type_name } = req.body;
    const bottleType = {
        type_name: type_name,
    }

    BottleType.create(bottleType).then((data) => { res.send(data) });

};