module.exports = (sequelize, DataTypes) => {
    const Bottle = sequelize.define('bottle', {
        bottle_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Bottle;
}
