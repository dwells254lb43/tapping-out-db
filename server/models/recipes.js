module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Recipe;
}