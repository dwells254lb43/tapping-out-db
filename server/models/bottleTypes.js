module.exports = (sequelize, DataTypes) => {
    const BottleType = sequelize.define('bottle type', {
        bottle_type_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return BottleType;
}
