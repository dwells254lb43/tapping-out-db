const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./config');
const sequelize = new Sequelize(`postgres://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:5432/${dbConfig.DB}`, {
    host: dbConfig.HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }}
)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect ot the database:', err);
})

let db = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    User: require('./models/users')(sequelize, DataTypes),
    Recipe: require('./models/recipes')(sequelize, DataTypes),
    Bottle: require('./models/bottles')(sequelize, DataTypes),
    BottleType: require('./models/bottleTypes')(sequelize, DataTypes)
}

db.User.belongsToMany(db.Bottle, { through: 'user_bottles' })
db.Bottle.belongsToMany(db.User, { through: 'user_bottles' })
db.BottleType.hasMany(db.Bottle)
db.Recipe.belongsToMany(db.BottleType, { through: 'recipe_bottle_type' })
db.BottleType.belongsToMany(db.Recipe, { through: 'recipe_bottle_type' })
sequelize.sync().then(() => {
    console.log('synced!')
});
module.exports = db