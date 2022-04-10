const db = require('./db');

db.BottleType.bulkCreate([
    {type_name: 'Vodka'},
    {type_name: 'Gin'},
    {type_name: 'Whiskey'},
    {type_name: 'Tequila'},
    {type_name: 'Rum'},
    {type_name: 'Scotch'},
    {type_name: 'Bourbon'},
    {type_name: 'Orange Juice'},
    {type_name: 'Ginger Beer'},
    {type_name: 'Cranberry Juice'},
    {type_name: 'Pineapple Juice'},
    {type_name: 'Peach Schnopps'}
])