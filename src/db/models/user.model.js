import { DataTypes } from 'sequelize';
import { sequelize } from '../db.connection.js';

const userModel = sequelize.define('User', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, validate: { isEmail: true } },
    password: { type: DataTypes.STRING, validate: { len: [7, 100] } }
}, {
    hooks: {
        beforeCreate: (user) => {
            if (user.firstName.length <= 2) throw new Error('firstName > 2 chars');
        }
    }
});

export default userModel;