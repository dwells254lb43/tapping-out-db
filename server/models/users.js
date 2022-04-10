module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // set(value) {
            //     // Storing passwords in plaintext in the database is terrible.
            //     // Hashing the value with an appropriate cryptographic hash function is better.
            //     this.setDataValue('password', hash(value));
            //   }
        }
    })

    return User;
}