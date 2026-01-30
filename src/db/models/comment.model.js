import { DataTypes } from 'sequelize';
import { sequelize } from '../db.connection.js';

const commentModel = sequelize.define('Comment', {
    content: { type: DataTypes.TEXT, allowNull: false }
});

export default commentModel;