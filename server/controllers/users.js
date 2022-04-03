const db = require('../db');
const User = db.User;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('we hit the endpoint!');
    const { email , password } = req.body;
    const user = {
        email: email,
        password: password
    }

    User.create(user).then((data) => {res.send(data)});

};