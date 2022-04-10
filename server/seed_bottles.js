const db = require('./db');

const bottles = [
    {name: 'Ciroc', type: 'Vodka'},
    {name: 'Grey Goose', type: 'Vodka'},
    {name: 'PeachyPeach', type: 'Peach Schnopps'}
]

const bottleTypes = await db.bottle.BottleTypes.findMany()

db.Bottle.createBulk([
    {

    }
])